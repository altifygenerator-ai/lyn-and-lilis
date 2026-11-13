import Image from "next/image";

const beforeAfterItems = [
  {
    title: "Stovetop deep cleaning",
    before: "/images/recent-cleaning/stovetop-before.webp",
    after: "/images/recent-cleaning/stovetop-after.webp",
    text: "Grease and cooking buildup cleaned from the stovetop and burner area during a detailed kitchen cleaning.",
  },
  {
    title: "Bathroom toilet detail",
    before: "/images/recent-cleaning/toilet-detail-before.webp",
    after: "/images/recent-cleaning/toilet-detail-after.webp",
    text: "Attention to the toilet seat, hinges, and bowl where everyday buildup can collect.",
  },
  {
    title: "Bathroom sink cleaning",
    before: "/images/recent-cleaning/bathroom-sink-before.webp",
    after: "/images/recent-cleaning/bathroom-sink-after.webp",
    text: "The basin and faucet area cleaned down for a fresher, more usable bathroom.",
  },
  {
    title: "Bathroom floor cleaning",
    before: "/images/recent-cleaning/bathroom-floor-before.webp",
    after: "/images/recent-cleaning/bathroom-floor-after.webp",
    text: "Visible dirt and marks worked down on this hard floor. Existing wear and floor damage remain.",
  },
  {
    title: "Bathtub cleaning",
    before: "/images/recent-cleaning/bathtub-before.webp",
    after: "/images/recent-cleaning/bathtub-after.webp",
    text: "A tub surface cleaned and brightened as part of a bathroom detail service.",
  },
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
