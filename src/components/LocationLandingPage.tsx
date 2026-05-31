import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { FaArrowLeft, FaArrowRight, FaLocationDot } from "react-icons/fa6";

type LocationPageProps = {
  location: {
    slug: string;
    href: string;
    city: string;
    state: string;
    headline: string;
    pageFocus: string;
    intro: string;
    localAngle: string;
    uniqueSectionTitle: string;
    uniqueSectionBody: string;
    priorityServiceSlugs: string[];
    nearbyAreas: string[];
    details: string[];
    internalLinks: {
      text: string;
      href: string;
    }[];
    localKeywords: string[];
    faq: {
      q: string;
      a: string;
    }[];
  };
};

const baseUrl = "https://www.lynandlilistidyhouse.com";

export default function LocationLandingPage({ location }: LocationPageProps) {
  const priorityServices = services.filter((service) =>
    location.priorityServiceSlugs?.includes(service.slug)
  );

  const otherServices = services.filter(
    (service) => !location.priorityServiceSlugs?.includes(service.slug)
  );

  const orderedServices = [...priorityServices, ...otherServices];

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: `Lyn & Lili’s Tidy House - ${location.city}, ${location.state}`,
    url: `${baseUrl}${location.href}`,
    telephone: "8702604536",
    areaServed: {
      "@type": "City",
      name: `${location.city}, ${location.state}`,
    },
    serviceType: [
      "House Cleaning",
      "Deep Cleaning",
      "Move-In Cleaning",
      "Move-Out Cleaning",
      "Airbnb Turnover Cleaning",
      "Professional Building Cleaning",
    ],
    description: location.intro,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: `${baseUrl}/#areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${location.city}, ${location.state}`,
        item: `${baseUrl}${location.href}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([locationSchema, faqSchema, breadcrumbSchema]),
        }}
      />

      <Header />

      <main className="pt-20">
        <section className="bg-[var(--pink-soft)] px-5 py-24">
          <div className="container-custom">
            <Link
              href="/#areas"
              className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]"
            >
              <FaArrowLeft /> Back to service areas
            </Link>

            <div className="max-w-4xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-[var(--gray-dark)]">
                <FaLocationDot />
              </div>

              <p className="font-script text-4xl text-[var(--pink)]">
                {location.city}, {location.state}
              </p>

              <h1 className="font-heading mt-3 text-5xl font-bold leading-tight text-[var(--gray-dark)] md:text-6xl">
                {location.headline}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-black/70">
                {location.intro}
              </p>

              <Link href="/#quote" className="btn-primary mt-8">
                Request a Quote <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom px-5">
            <div className="max-w-4xl">
              <p className="font-script text-4xl text-[var(--pink)]">
                Around {location.city}
              </p>

              <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                {location.uniqueSectionTitle}
              </h2>

              <p className="mt-5 text-lg leading-8 text-black/70">
                {location.uniqueSectionBody}
              </p>

              <p className="mt-5 text-lg leading-8 text-black/70">
                {location.localAngle}
              </p>

              {location.nearbyAreas?.length ? (
                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                    Nearby areas we can help with
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {location.nearbyAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[var(--seafoam-soft)] px-4 py-2 text-sm font-bold text-black/70"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[var(--seafoam-soft)]">
          <div className="container-custom px-5">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                Cleaning services in {location.city}, {location.state}
              </h2>

              <p className="mt-4 leading-8 text-black/65">
                These are the main cleaning services available in{" "}
                {location.city}. Every home and property is a little different,
                so quotes are based on the actual space and what needs done.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {orderedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/locations/${location.slug}/${service.slug}`}
                  className="soft-card block bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
                >
                  <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                    {service.title} in {location.city}, {location.state}
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[var(--seafoam)]">
                    {service.price}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    Local {service.title.toLowerCase()} for{" "}
                    {location.pageFocus} in {location.city} and nearby areas.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.includes.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--pink-soft)] px-3 py-1 text-xs font-bold text-[var(--gray-dark)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]">
                    View {service.title} in {location.city} <FaArrowRight />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom px-5">
            <div className="soft-card max-w-4xl bg-white p-8">
              <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
                What people usually need cleaned in {location.city}
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-8 text-black/70">
                {location.details.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--pink-soft)] py-16">
          <div className="container-custom px-5">
            <h2 className="font-heading text-3xl font-bold text-[var(--gray-dark)]">
              Popular cleaning searches for {location.city}
            </h2>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {location.internalLinks.map((link) => (
                <Link
                  key={link.href + link.text}
                  href={link.href}
                  className="rounded-2xl bg-white px-5 py-4 font-bold text-[var(--gray-dark)] shadow-sm transition hover:-translate-y-1 hover:text-[var(--pink)]"
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {location.localKeywords?.length ? (
              <p className="mt-6 max-w-3xl text-sm leading-6 text-black/55">
                People in this area often look for help with{" "}
                {location.localKeywords.join(", ")}.
              </p>
            ) : null}
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl px-5">
            <h2 className="font-heading text-4xl font-bold text-[var(--gray-dark)]">
              Questions about cleaning in {location.city}
            </h2>

            <div className="mt-8 space-y-6">
              {location.faq.map((item) => (
                <div key={item.q} className="border-b border-black/10 pb-6">
                  <h3 className="text-lg font-bold text-[var(--gray-dark)]">
                    {item.q}
                  </h3>

                  <p className="mt-2 leading-7 text-black/70">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/#quote" className="btn-primary">
                Get a Cleaning Quote <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}