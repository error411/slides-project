export default function SlideSnapLandingPage() {
  const parts = [
    {
      title: 'Overhead phone mount',
      desc: 'Stable top-down mount for the iPhone. This is the key piece.',
      price: '$47.99',
      url: 'https://www.bestbuy.com/product/neewer-entry-level-overhead-phone-stand-with-led-light-foldable-remote-v10/CZLV9FXSRW',
      cta: 'View mount',
    },
    {
      title: 'A4 LED light pad',
      desc: 'Use this as the backlight under the slide holder.',
      price: '$13.99',
      url: 'https://www.walmart.com/ip/A4-LED-tracing-light-box-USB-powered-suitable-artistic-endeavours-including-tattoo-transfer-painting-live-streaming-sketching-animation-template-crea/19240104653',
      cta: 'View light pad',
    },
    {
      title: 'Bluetooth shutter remote',
      desc: 'Optional, but it speeds up capture and reduces shake.',
      price: '$11.99+',
      url: 'https://www.ebay.com/itm/146848451445',
      cta: 'View remote',
    },
    {
      title: 'Diffusion sheet',
      desc: 'Use parchment paper or thin white plastic you already have at home.',
      price: '$0–$5',
      url: 'https://www.target.com/s/parchment+paper',
      cta: 'View parchment paper',
    },
  ];

  const steps = [
    {
      label: 'Step 1',
      title: 'Get the parts',
      body: 'Overhead phone mount, light pad, diffusion sheet, and a simple slide holder.',
    },
    {
      label: 'Step 2',
      title: 'Set it up once',
      body: 'Light pad flat on the table, holder taped in place, phone centered above it.',
    },
    {
      label: 'Step 3',
      title: 'Lock it and repeat',
      body: 'Adjust height until the slide fills most of the frame, then do not move anything.',
    },
  ];

  const buildSteps = [
    'Place the light pad flat on a table.',
    'Add one diffusion layer on top to soften hotspots.',
    'Tape the slide holder in the center of the light pad.',
    'Mount the iPhone directly above the holder.',
    'Raise or lower the phone until the slide fills most of the frame with no digital zoom.',
    'Lock the tripod and holder position before starting the batch.',
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-600">
              No scanner required • Low-cost setup • Fast batch capture
            </div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Digitize 100 Slides in 10 Minutes
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Build a simple slide capture rig, use your iPhone, and move through big boxes of old slides fast.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#rig"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Build Your Rig
              </a>
              <a
                href="#parts"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Buy the Parts
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              If you can set up a tripod, you can build this.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-5 shadow-xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700">Simple Capture Rig</span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  5-minute setup
                </span>
              </div>
              <div className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-inner">
                <div className="absolute bottom-7 h-10 w-72 rounded-full bg-amber-100/80 blur-sm" />
                <div className="absolute bottom-12 flex h-28 w-72 items-center justify-center rounded-[1.5rem] border border-amber-200 bg-amber-50 shadow-sm">
                  <div className="absolute -top-3 rounded-full bg-slate-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    Light pad
                  </div>
                  <div className="flex h-16 w-20 items-center justify-center rounded-sm border-4 border-slate-700 bg-orange-100 shadow-sm">
                    <div className="h-8 w-8 border border-slate-500 bg-white/70" />
                  </div>
                  <div className="absolute -top-10 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-300" />
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm ring-1 ring-slate-200">
                    Slide holder
                  </div>
                </div>
                <div className="absolute top-16 flex flex-col items-center">
                  <div className="rounded-[1.25rem] border-4 border-slate-900 bg-white p-2 shadow-lg">
                    <div className="h-24 w-16 rounded-xl bg-slate-100" />
                  </div>
                  <div className="h-16 w-2 rounded-full bg-slate-400" />
                  <div className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm ring-1 ring-slate-200">
                    iPhone centered above slide
                  </div>
                </div>
                <div className="absolute right-6 top-28 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm ring-1 ring-slate-200">
                  Lens parallel to slide
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm ring-1 ring-slate-200">
                  6–10 in above slide
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="rig" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Build the rig</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Build the rig once. Capture hundreds of slides fast.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Keep the phone fixed, keep the slide in the same spot, and use even backlight.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">What to acquire</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">The exact pieces you need</h3>
              <div className="mt-5 space-y-3">
                {[
                  'Tripod or overhead mount that positions the phone directly above the slide',
                  'Phone mount that holds the iPhone flat and stable',
                  'LED light pad or tracing pad with adjustable brightness',
                  'Diffusion layer like parchment paper or thin white plastic',
                  'Simple slide holder made from foam board or cardboard',
                  'Optional Bluetooth shutter remote for faster capture',
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-[1.25rem] bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Build steps</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">Assemble it in order</h3>
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
          </div>

          <div className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 px-6 py-5 text-amber-900 shadow-sm">
            <div className="text-sm leading-7">
              <span className="font-semibold">Typical setup cost:</span> about $60–$70 with the core purchased parts
              <br />
              <span className="font-semibold">Setup time:</span> about 5 minutes
            </div>
          </div>
        </div>
      </section>

      <section id="parts" className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Buy the parts</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Buy the core pieces and build today
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Keep the shopping list short. Do not turn this into a gear hunt.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {parts.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                  <div className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {item.price}
                  </div>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  {item.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Fast workflow</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Capture 100+ slides without slowing down
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Stage the stack',
                body: 'Keep unshot slides on one side and finished slides on the other.',
              },
              {
                title: 'Swap and shoot',
                body: 'Drop each slide into the holder and trigger with the remote or volume button.',
              },
              {
                title: 'Do not review mid-batch',
                body: 'Finish the whole stack first, then clean up and sort later.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:px-10 lg:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Start now</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Build it once and start digitizing tonight
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Buy the core parts, set the rig once, and move through old slides fast without buying a dedicated scanner.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#parts"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Buy the Parts
              </a>
              <a
                href="#rig"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Build Your Rig
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
