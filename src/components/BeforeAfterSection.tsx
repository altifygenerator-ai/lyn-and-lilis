const beforeAfterItems = [
  {
    title: "Kitchen reset",
    before: "/images/before-1.png",
    after: "/images/after-1.png",
    text: "Counters cleared, dishes handled, surfaces wiped down, and the kitchen brought back to a clean usable space.",
  },
  {
    title: "Bathroom refresh",
    before: "/images/before-2.png",
    after: "/images/after-2.png",
    text: "Sinks, mirrors, tubs, toilets, counters, and floors cleaned so the bathroom feels fresh again.",
  },
  {
    title: "Living room reset",
    before: "/images/before-3.png",
    after: "/images/after-3.png",
    text: "Main living spaces picked up, straightened, and brought back to a calmer, guest-ready feel.",
  },
  {
    title: "Sink detail clean",
    before: "/images/dirty-sink.jpeg",
    after: "/images/clean-sink.jpeg",
    text: "A dirty sink area cleaned back up with attention to the basin, faucet area, and surrounding surface.",
  },
  {
    title: "Tub detail clean",
    before: "/images/dirty-tub.jpeg",
    after: "/images/clean-tub.jpeg",
    text: "Tub buildup handled so the surface looks brighter, cleaner, and ready to use again.",
  },
  {
    title: "Shower clean-up",
    before: "/images/shower-dirty.jpeg",
    after: "/images/shower-clean.jpeg",
    text: "Shower walls, corners, and floor areas cleaned to help remove visible grime and brighten the space.",
  },
  {
    title: "Stove deep clean",
    before: "/images/stove-dirty.jpeg",
    after: "/images/stove-clean.jpeg",
    text: "Stove tops can get really grimy, but we make sure to get into the nooks and crannies to get it back to a cleaner state.",
  },
  {
    title: "Dishwasher shine-up",
    before: "/images/dirty-dishwasher.jpeg",
    after: "/images/clean-shiney-dishwasher.jpeg",
    text: "Exterior appliance surfaces wiped down and polished so the kitchen detail looks cleaner overall.",
  },
  {
    title: "Cabinet shelf clean-out",
    before: "/images/dirty-cupboard.jpeg",
    after: "/images/cupboard-clean.jpeg",
    text: "Cabinet and shelf areas cleaned out so stored items have a fresher place to go back into.",
  },
  {
    title: "Cupboard detail clean",
    before: "/images/dirty-cupboard2.jpeg",
    after: "/images/cupboard-clean2.jpeg",
    text: "Small storage areas and cabinet surfaces cleaned up where dust, crumbs, and everyday mess collect.",
  },
  {
    title: "Lazy Susan cabinet clean",
    before: "/images/lazy-susan-dirty.jpeg",
    after: "/images/lazy-susan-clean.jpeg",
    text: "Hard-to-reach cabinet areas cleaned with care so the inside looks and feels usable again.",
  },
  {
    title: "Lazy Susan detail clean",
    before: "/images/lazy-susan-dirty2.jpeg",
    after: "/images/lazy-susan-clean2.jpeg",
    text: "A closer cabinet detail showing the kind of small-area cleaning that can make a big difference.",
  },
  {
    title: "Top of fridge detail",
    before: "/images/top-of-fridge-dirty.jpeg",
    after: "/images/top-of-fridge-clean.jpeg",
    text: "High-touch and high-dust areas like the top of the fridge cleaned so the kitchen feels more finished.",
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

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {beforeAfterItems.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-sm"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {item.title}
                    </h3>

                    <span className="shrink-0 rounded-full bg-[var(--pink-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-black/55">
                      Before
                    </span>
                  </div>

                  <div className="relative h-[260px] overflow-hidden rounded-[1.5rem] bg-neutral-50 md:h-[320px]">
                    <img
                      src={item.before}
                      alt={`${item.title} before cleaning`}
                      className="block h-full w-full object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center justify-end">
                    <span className="rounded-full bg-[var(--pink)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                      After
                    </span>
                  </div>

                  <div className="relative h-[260px] overflow-hidden rounded-[1.5rem] bg-neutral-50 md:h-[320px]">
                    <img
                      src={item.after}
                      alt={`${item.title} after cleaning`}
                      className="block h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-black/10 pt-5">
                <p className="leading-8 text-black/65">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
