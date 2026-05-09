import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

export default function LocalServicePageContent({
  location,
  service,
  faq,
}: {
  location: any;
  service: any;
  faq: { q: string; a: string }[];
}) {
  const Icon = service.icon;

  return (
    <>
      <section className="bg-[var(--pink-soft)] px-5 py-24">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--gray-dark)]">
              <Icon />
            </div>

            <p className="font-script text-4xl text-[var(--pink)]">
              {location.city}, {location.state}
            </p>

            <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
              {service.title} in {location.city}, {location.state}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
              Local {service.title.toLowerCase()} for {location.pageFocus} in{" "}
              {location.city} and nearby areas.
            </p>

            <Link href="/#quote" className="btn-primary mt-8">
              Request a Quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                Why people book this in {location.city}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-black/70">
                <p>{location.localAngle}</p>
                <p>
                  {service.title} is a strong fit for {location.city} properties
                  that need dependable cleaning without a complicated process or
                  big-company feel.
                </p>
              </div>
            </div>

            <div className="soft-card bg-[var(--seafoam-soft)] p-8">
              <h3 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
                Common local situations
              </h3>

              <div className="mt-6 space-y-4">
                {location.details.slice(0, 3).map((item: string) => (
                  <div key={item} className="flex gap-3">
                    <FaCheck className="mt-1 shrink-0 text-[var(--pink)]" />
                    <p className="leading-7 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--seafoam-soft)] py-20">
        <div className="container-custom px-5">
          <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
            What’s usually included
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item: string) => (
              <div key={item} className="rounded-2xl bg-white p-5 font-bold shadow-sm">
                <FaCheck className="mb-3 text-[var(--pink)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom px-5">
          <div className="max-w-4xl">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Areas near {location.city} we can help with
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              We serve {location.city} and nearby areas including{" "}
              {location.nearbyAreas.join(", ")}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {location.nearbyAreas.map((area: string) => (
                <span
                  key={area}
                  className="rounded-full bg-[var(--pink-soft)] px-5 py-3 text-sm font-bold text-[var(--gray-dark)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--pink-soft)]">
        <div className="container-custom max-w-4xl px-5">
          <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
            Questions about {service.title.toLowerCase()} in {location.city}
          </h2>

          <div className="mt-8 space-y-6">
            {faq.map((item) => (
              <div key={item.q} className="border-b border-black/10 pb-6">
                <h3 className="text-lg font-bold text-[var(--gray-dark)]">
                  {item.q}
                </h3>
                <p className="mt-2 leading-7 text-black/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}