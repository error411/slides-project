'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function UploadPage() {
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!files.length) return

    setLoading(true)

    try {
      const formData = new FormData()
      for (const file of files) {
        formData.append('files', file)
      }
      if (email) formData.append('email', email)

      const createRes = await fetch('/api/jobs/create', {
        method: 'POST',
        body: formData,
      })

      const createJson = await createRes.json()
      if (!createRes.ok) throw new Error(createJson.error || 'Upload failed')

      await fetch('/api/jobs/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobId: createJson.jobId }),
      })

      router.push(`/results/${createJson.jobId}`)
    } catch (err) {
      console.error(err)
      alert('Something went wrong during upload/processing.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Upload your slides</h1>
      <p className="mt-2 text-sm text-slate-600">
        Add a batch of images, then we’ll process them automatically.
      </p>

      <div className="mt-8 rounded-2xl border border-dashed p-8">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
        />
      </div>

      <div className="mt-4">
        <input
          type="email"
          placeholder="Email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full max-w-md rounded-lg border px-3 py-2"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {files.map((file, index) => (
          <div key={`${file.name}-${index}`} className="rounded-xl border p-2 text-xs">
            <div className="truncate">{file.name}</div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!files.length || loading}
        className="mt-8 rounded-xl bg-black px-5 py-3 text-white disabled:opacity-50"
      >
        {loading ? 'Processing...' : `Upload ${files.length ? `(${files.length})` : ''}`}
      </button>
    </main>
  )
}