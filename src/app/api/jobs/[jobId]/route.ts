import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'

type Params = {
  params: Promise<{ jobId: string }>
}

export async function GET(_req: NextRequest, context: Params) {
  try {
    const { jobId } = await context.params
    const supabase = createServerSupabase()

    const { data: job, error: jobError } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single()

    if (jobError || !job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    const { data: images, error: imagesError } = await supabase
      .from('job_images')
      .select('*')
      .eq('job_id', jobId)
      .order('created_at', { ascending: true })

    if (imagesError) {
      throw imagesError
    }

    const hydratedImages = await Promise.all(
      (images || []).map(async (image) => {
        const originalSigned = await supabase.storage
          .from('slides-raw')
          .createSignedUrl(image.original_path, 60 * 60)

        const processedSigned = image.processed_path
          ? await supabase.storage
              .from('slides-processed')
              .createSignedUrl(image.processed_path, 60 * 60)
          : null

        return {
          ...image,
          originalUrl: originalSigned.data?.signedUrl ?? null,
          processedUrl: processedSigned?.data?.signedUrl ?? null,
        }
      })
    )

    return NextResponse.json({
      job,
      images: hydratedImages,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch job' },
      { status: 500 }
    )
  }
}