import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'
import { processSlideImage } from '@/lib/image-processing'

export async function POST(req: NextRequest) {
  try {
    const { jobId } = await req.json()

    if (!jobId) {
      return NextResponse.json({ error: 'Missing jobId' }, { status: 400 })
    }

    const supabase = createServerSupabase()

    await supabase.from('jobs').update({ status: 'processing' }).eq('id', jobId)

    const { data: images, error: imagesError } = await supabase
      .from('job_images')
      .select('*')
      .eq('job_id', jobId)
      .order('created_at', { ascending: true })

    if (imagesError || !images) {
      throw imagesError || new Error('Failed to load job images')
    }

    for (const image of images) {
      try {
        const { data: rawFile, error: downloadError } = await supabase.storage
          .from('slides-raw')
          .download(image.original_path)

        if (downloadError || !rawFile) {
          throw downloadError || new Error('Failed to download raw image')
        }

        const arrayBuffer = await rawFile.arrayBuffer()
        const inputBuffer = Buffer.from(arrayBuffer)
        const outputBuffer = await processSlideImage(inputBuffer)

        const processedPath = image.original_path.replace(/\.[^.]+$/, '.jpg')

        const { error: uploadError } = await supabase.storage
          .from('slides-processed')
          .upload(processedPath, outputBuffer, {
            contentType: 'image/jpeg',
            upsert: true,
          })

        if (uploadError) {
          throw uploadError
        }

        await supabase
          .from('job_images')
          .update({
            processed_path: processedPath,
            status: 'processed',
            error_message: null,
          })
          .eq('id', image.id)
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Unknown processing error'

        await supabase
          .from('job_images')
          .update({
            status: 'failed',
            error_message: message,
          })
          .eq('id', image.id)
      }
    }

    const { data: finalImages } = await supabase
      .from('job_images')
      .select('status')
      .eq('job_id', jobId)

    const hasFailures = finalImages?.some((img) => img.status === 'failed')

    await supabase
      .from('jobs')
      .update({ status: hasFailures ? 'completed_with_errors' : 'completed' })
      .eq('id', jobId)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to process job' },
      { status: 500 }
    )
  }
}