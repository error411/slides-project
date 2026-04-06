export default function QuickSlideScanPOCPage() {
  const parts = [
    {
      title: 'Overhead phone mount',
      desc: 'Holds the iPhone directly above the slide area for repeatable framing.',
      note: 'Example: desk arm or overhead tripod mount',
    },
    {
      title: 'LED light pad',
      desc: 'Provides the backlight underneath the slide holder.',
      note: 'Example: tracing pad or slim LED panel',
    },
    {
      title: 'Diffusion layer',
      desc: 'Softens hotspots and evens out the backlight.',
      note: 'Example: parchment paper or thin white acrylic',
    },
    {
      title: 'DIY slide holder',
      desc: 'Keeps each slide in the same position for fast batch capture.',
      note: 'Example: foam board template or 3D-printed tray',
    },
  ];

  const buildSteps = [
    'Place the light pad flat on a table.',
    'Add a diffusion layer on top of the light source.',
    'Tape or secure the slide holder in the center.',
    'Mount the iPhone directly above the holder.',
    'Adjust height until the slide fills most of the frame.',
    'Lock the rig and start batch capture.',
  ];

  const workflow = [
    {
      title: 'Load slides',
      body: 'Keep an input stack on one side and a finished stack on the other.',
    },
    {
      title: 'Drop and capture',
      body: 'Insert each slide, trigger the shutter, and move to the next one immediately.',
    },
    {
      title: 'Process later',
      body: 'Finish the whole batch first, then crop, enhance, and export.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
              Stakeholder proof of concept • DIY capture rig • Fast batch workflow
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digitize old slides fast with a simple iPhone rig
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              This concept combines a low-cost physical capture setup with a clean workflow for photographing large slide collections quickly and consistently.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rig"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                View Rig Concept
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Workflow
              </a>
            </div>
            <div className="mt-6 grid max-w-lg grid-cols-2 gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="font-semibold text-slate-900">Low cost</div>
                <div className="mt-1">Simple parts</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="font-semibold text-slate-900">Fast capture</div>
                <div className="mt-1">100+ slides</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 col-span-2 sm:col-span-1">
                <div className="font-semibold text-slate-900">Consistent setup</div>
                <div className="mt-1">Repeatable framing</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-5 shadow-xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-slate-700">Hero Visual</span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  Rig concept render
                </span>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                <img
                  src="/images/quickslidescan-rig-hero.png"
                  alt="QuickSlideScan rig concept showing iPhone mounted above a light pad and slide holder"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rig" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Rig concept</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A simple physical setup designed for speed and repeatability
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The rig is intentionally basic: overhead phone, backlight, diffusion, and a fixed holder for the slide.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Rig diagram</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">How the setup fits together</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  5-minute setup target
                </span>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
                <img
                  src="/images/quickslidescan-rig-hero.png"
                  alt="Concept rig diagram showing phone mount, slide holder, and light pad"
                  className="block h-auto w-full"
                />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    label: 'Step 1',
                    title: 'Acquire the core parts',
                    body: 'Use simple components that are easy to source and low cost.',
                  },
                  {
                    label: 'Step 2',
                    title: 'Set the geometry once',
                    body: 'Center the phone over the holder and lock in the framing.',
                  },
                  {
                    label: 'Step 3',
                    title: 'Run a repeatable batch',
                    body: 'Swap slides quickly without touching the rig between captures.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                    <h4 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Core parts</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">What the rig includes</h3>
                <div className="mt-5 space-y-4">
                  {parts.map((item) => (
                    <div key={item.title} className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
                      <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                      <div className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Assembly</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Build steps</h3>
                <div className="mt-5 space-y-4">
                  {buildSteps.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-amber-200 bg-amber-50 px-6 py-5 text-amber-900 shadow-sm">
                <div className="text-sm leading-7">
                  <span className="font-semibold">POC assumptions:</span> low-cost parts, simple DIY holder, iPhone capture, batch-first workflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Workflow</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              A capture flow built for 100+ slides per session
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The workflow prioritizes speed during capture and leaves cleanup for later.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Workflow visual</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">Input to capture to completed batch</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                  This visual shows the intended session flow: stack slides, drop into the holder, then move the full batch into processing.
                </p>
              </div>
              <div className="w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                <img
                  src="/images/quickslidescan-workflow.png"
                  alt="Three-panel QuickSlideScan workflow showing slide stack, scanning setup, and completed digital batch"
                  className="block h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Proof of concept</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A simple, credible concept for fast slide digitization
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              This page is designed to communicate the concept clearly to stakeholders before the physical rig photography and production visuals are finalized.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#rig"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Review Rig Concept
              </a>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Review Workflow
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
