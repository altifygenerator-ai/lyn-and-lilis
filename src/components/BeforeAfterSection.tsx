import Image from "next/image";

const beforeAfterItems = [
  {
    title: "Closet declutter and reset",
    before: "/images/latest-work/closet-declutter-before.webp",
    after: "/images/latest-work/closet-declutter-after.webp",
    text: "Clothes, shoes, hangers, and loose items sorted back into a much more usable closet without trying to make the space feel staged or unrealistic.",
  },
  {
    title: "Kids closet reset",
    before: "/images/latest-work/kids-closet-before.webp",
    after: "/images/latest-work/kids-closet-after.webp",
    text: "Toys, dress-up clothes, and everyday items gathered, sorted, and put back into a setup that is easier to use and keep up with.",
  },
  {
    title: "Window sill detail",
    before: "/images/latest-work/window-sill-before.webp",
    after: "/images/latest-work/window-sill-after.webp",
    text: "Dust, hair, and buildup removed from the sill and track area so the whole window detail looks cleaner and more finished.",
  },
  {
    title: "Wall spot clean-up",
    before: "/images/latest-work/wall-spot-before.webp",
    after: "/images/latest-work/wall-spot-after.webp",
    text: "A visible wall mark cleaned down as part of the detail work around doors, walls, trim, and other spots that collect everyday grime.",
  },
  {
    title: "Toilet base detail",
    before: "/images/latest-work/toilet-base-before.webp",
    after: "/images/latest-work/toilet-base-after.webp",
    text: "The base, sides, hinges, and floor-edge areas cleaned with attention to the places that are easy to miss during a quick bathroom wipe-down.",
  },
  {
    title: "Bathroom sink detail",
    before: "/images/latest-work/bathroom-sink-before.webp",
    after: "/images/latest-work/bathroom-sink-after.webp",
    text: "The basin and surrounding vanity cleaned up so the sink area looks brighter and ready to use again.",
  },
  {
    title: "Kitchen sink clean-up",
    before: "/images/latest-work/kitchen-sink-before.webp",
    after: "/images/latest-work/kitchen-sink-after.webp",
    text: "A used kitchen sink cleaned and rinsed down with the drains and basin brought back to a much cleaner everyday condition.",
  },
  {
    title: "Stove deep clean",
    before: "/images/stove-dirty.jpeg",
    after: "/images/stove-clean.jpeg",
    text: "Stove tops can get really grimy, so we make sure to get into the nooks and crannies and bring the surface back to a cleaner state.",
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
    title: "Cabinet shelf clean-out",
    before: "/images/dirty-cupboard.jpeg",
    after: "/images/cupboard-clean.jpeg",
    text: "Cabinet and shelf areas cleaned out so stored items have a fresher place to go back into.",
  },
  {
    title: "Top of fridge detail",
    before: "/images/top-of-fridge-dirty.jpeg",
    after: "/images/top-of-fridge-clean.jpeg",
    text: "High-dust areas like the top of the fridge cleaned so the kitchen feels more finished from top to bottom.",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="section-padding bg-[var(--pink-soft)]">
      <div className="container-custom px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-[var(--pink)]">Real results</p>

          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)] md:text-5xl">
            Before and after cleaning and organization.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-black/65">
            Real work from homes we have cleaned and helped get back under
            control. Every job is different, but the goal is always a cleaner,
            more usable space.
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
                    <Image
                      src={item.before}
                      alt={`${item.title} before`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
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
                    <Image
                      src={item.after}
                      alt={`${item.title} after`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
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
