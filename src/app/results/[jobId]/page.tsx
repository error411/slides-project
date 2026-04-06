import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ jobId: string }>
}

async function getJob(jobId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/jobs/${jobId}`, {
    cache: 'no-store',
  })

  if (!res.ok) return null
  return res.json()
}

export default async function ResultsPage({ params }: PageProps) {
  const { jobId } = await params
  const data = await getJob(jobId)

  if (!data) return notFound()

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Processed slides</h1>
      <p className="mt-2 text-sm text-slate-600">
        Status: {data.job.status}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {data.images.map((image: any) => (
          <div key={image.id} className="rounded-2xl border p-4">
            <div className="mb-3 text-sm font-medium">{image.original_filename}</div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <div className="mb-2 text-xs text-slate-500">Original</div>
                {image.originalUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image.originalUrl} alt="" className="rounded-xl border" />
                ) : null}
              </div>
              <div>
                <div className="mb-2 text-xs text-slate-500">Processed</div>
                {image.processedUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image.processedUrl} alt="" className="rounded-xl border" />
                ) : (
                  <div className="rounded-xl border p-6 text-sm text-slate-500">
                    {image.status}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}