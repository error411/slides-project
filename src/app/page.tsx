import Link from 'next/link'

const steps = [
  {
    title: 'Capture your slides',
    description:
      'Use a simple DIY setup with your phone, tripod, and backlight to photograph slides quickly.',
  },
  {
    title: 'Upload in bulk',
    description:
      'Drag in a full batch of images at once instead of scanning one-by-one in a clunky mobile app.',
  },
  {
    title: 'Get cleaned digital images',
    description:
      'We process, enhance, and prepare your slide images so they are easier to review, save, and share.',
  },
]

const benefits = [
  'Built for bulk workflows, not one-at-a-time scanning',
  'Simple upload and processing experience',
  'Designed for DIY slide digitizing setups',
  'Fast path from capture to usable digital images',
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600 shadow-sm">
                Batch-first slide digitizing
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Turn old slides into digital photos — fast.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Built for simple DIY setups. Capture your slides quickly, upload
                them in bulk, and get cleaned digital images without a slow,
                one-by-one workflow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/upload"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Start Uploading
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  See how it works
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/60">
                <div className="rounded-[24px] bg-slate-950 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-300">Processing preview</p>
                      <h2 className="mt-1 text-2xl font-semibold">
                        Batch upload workflow
                      </h2>
                    </div>
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                      MVP
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {['Raw', 'Enhanced', 'Export'].map((label, index) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-white/5 p-3"
                      >
                        <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800" />
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-sm text-slate-200">{label}</span>
                          <span className="text-xs text-slate-400">
                            {index === 0 ? '01' : index === 1 ? '02' : '03'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">Batch status</span>
                      <span className="font-medium text-white">42 images</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-2/3 rounded-full bg-white" />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Uploaded and processing</span>
                      <span>67%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-medium text-slate-900">Why this exists</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Most tools are built for casual one-photo-at-a-time scanning.
                      This is built for moving through a full box of slides faster.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-sm font-medium text-slate-900">Best for</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Families, hobbyists, archivists, and anyone with lots of slides
                      who wants a simpler workflow from capture to digital output.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A faster path from physical slides to digital files
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Keep the capture process simple. The product shines by making the
              upload and processing workflow cleaner and faster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Positioning
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Built for volume, not novelty
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                The point is not to make scanning feel magical. The point is to make
                digitizing a lot of slides feel manageable.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-medium text-slate-900">What users want</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Less friction</li>
                <li>Bulk upload instead of repetitive tapping</li>
                <li>Cleaner images with minimal effort</li>
                <li>A simple export path when processing is done</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                Get started
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to process your first batch?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Upload a set of slide images and start testing the workflow end to end.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/upload"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Go to Upload
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}