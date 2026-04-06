import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase-server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const files = formData.getAll('files') as File[]
    const email = formData.get('email')?.toString() || null

    if (!files.length) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const supabase = createServerSupabase()

    const { data: job, error: jobError } = await supabase
      .from('jobs')
      .insert({ email, status: 'uploaded' })
      .select()
      .single()

    if (jobError || !job) {
      throw jobError || new Error('Failed to create job')
    }

    const uploadedImages: Array<{
      id: string
      original_path: string
      original_filename: string
    }> = []

    for (const file of files) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const safeName = `${crypto.randomUUID()}-${file.name.replace(/\s+/g, '-')}`
      const path = `${job.id}/${safeName}`

      const { error: uploadError } = await supabase.storage
        .from('slides-raw')
        .upload(path, buffer, {
          contentType: file.type || 'image/jpeg',
          upsert: false,
        })

      if (uploadError) {
        throw uploadError
      }

      const { data: imageRow, error: imageError } = await supabase
        .from('job_images')
        .insert({
          job_id: job.id,
          original_path: path,
          original_filename: file.name,
          status: 'pending',
        })
        .select()
        .single()

      if (imageError || !imageRow) {
        throw imageError || new Error('Failed to save image row')
      }

      uploadedImages.push(imageRow)
    }

    return NextResponse.json({
      jobId: job.id,
      imageCount: uploadedImages.length,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to create processing job' },
      { status: 500 }
    )
  }
}