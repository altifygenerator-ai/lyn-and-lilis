const beforeAfterItems = [
  {
    title: "Kitchen reset",
    before: "/images/sink-1.jpg",
    after: "/images/sink-2.jpg",
    text: "Counters cleared, dishes handled, surfaces wiped down, floors cleaned, and the kitchen brought back to a fresh usable space.",
  },
  {
    title: "Bathroom refresh",
    before: "/images/bathroom-1.jpg",
    after: "/images/bathroom-2.jpg",
    text: "Sinks, mirrors, tubs, toilets, counters, and floors cleaned so the bathroom feels fresh again.",
  },
  {
    title: "Living room cleanup",
    before: "/images/before-3.png",
    after: "/images/after-3.png",
    text: "Clutter picked up, surfaces cleaned, pillows and blankets reset, and the room brought back to a comfortable clean space.",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-[var(--pink-soft)]">
      <div className="container-custom px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-[var(--pink)]">
            Real results
          </p>

          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)] md:text-5xl">
            Before and after cleaning examples.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-black/65">
            Every home is different, but the goal is always the same — help make
            the space feel clean, fresh, and taken care of again.
          </p>
        </div>

        <div className="mt-14 grid gap-10">
          {beforeAfterItems.map((item, index) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-sm"
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-[var(--pink-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
                      Before
                    </span>
                  </div>

                  <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] bg-neutral-100 md:h-[360px]">
                    <img
                      src={item.before}
                      alt={`${item.title} before cleaning`}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-end">
                    <span className="rounded-full bg-[var(--pink)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>

                  <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] bg-neutral-100 md:h-[360px]">
                    <img
                      src={item.after}
                      alt={`${item.title} after cleaning`}
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="max-w-3xl leading-8 text-black/65">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}