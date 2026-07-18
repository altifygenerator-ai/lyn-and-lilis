import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
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

const hotSpringsNeedCards = [
  {
    title: "House Cleaning in Hot Springs",
    href: "/locations/hot-springs-ar/standard-cleaning",
    text: "Regular home cleaning for bathrooms, kitchens, floors, dusting, and the everyday mess that builds up in busy Hot Springs homes.",
  },
  {
    title: "Deep Cleaning in Hot Springs",
    href: "/locations/hot-springs-ar/deep-cleaning",
    text: "A stronger reset for homes, lake houses, rentals, and lived-in spaces that need extra time, detail, and attention.",
  },
  {
    title: "Nicotine-Stained Wall Cleaning",
    href: "/locations/hot-springs-ar/tobacco-residue-wall-cleaning",
    text: "Hands-on washing for visible tobacco film and yellow staining on suitable walls, trim, doors, and hard surfaces.",
  },
  {
    title: "Airbnb Cleaning in Hot Springs",
    href: "/locations/hot-springs-ar/airbnb-cleaning",
    text: "Turnover cleaning for short-term rentals, guest spaces, lake-area properties, and hosts who need spaces ready between stays.",
  },
  {
    title: "Move-Out Cleaning in Hot Springs",
    href: "/locations/hot-springs-ar/move-in-move-out-cleaning",
    text: "Move-in and move-out cleaning for renters, landlords, sellers, buyers, and property owners preparing an empty space.",
  },
  {
    title: "Office Cleaning in Hot Springs",
    href: "/locations/hot-springs-ar/professional-building-cleaning",
    text: "Cleaning for small offices, professional spaces, waiting areas, breakrooms, bathrooms, and customer-facing areas.",
  },
  {
    title: "Home Organization in Hot Springs",
    href: "/locations/hot-springs-ar/home-organization",
    text: "Practical organization and decluttering for closets, pantries, cabinets, laundry rooms, downsizing, and everyday household spaces.",
  },
  {
    title: "Senior Home Help in Hot Springs",
    href: "/locations/hot-springs-ar/senior-home-help",
    text: "Non-medical cleaning and light household help for seniors, including laundry, bedding, floors, kitchens, bathrooms, and simple organization.",
  },
  {
    title: "Holiday & Post-Party Cleaning",
    href: "/locations/hot-springs-ar/holiday-special-occasion-cleaning",
    text: "Guest-ready cleaning before holidays and gatherings, plus after-party and post-holiday household resets when the home needs to get back to normal.",
  },
  {
    title: "Lake-Area Cleaning Help",
    href: "/#quote",
    text: "Cleaning support for homes and properties around Lake Hamilton, Lake Catherine, Rockwell, Piney, Royal, and nearby areas.",
  },
];

export default function LocationLandingPage({ location }: LocationPageProps) {
  const isHotSprings = location.slug === "hot-springs-ar";
  const hotSpringsOnlyServiceSlugs = [
    "home-organization",
    "senior-home-help",
    "holiday-special-occasion-cleaning",
  ];

  const locationServices = services.filter(
    (service) =>
      isHotSprings || !hotSpringsOnlyServiceSlugs.includes(service.slug)
  );

  const priorityServices = locationServices.filter((service) =>
    location.priorityServiceSlugs?.includes(service.slug)
  );

  const otherServices = locationServices.filter(
    (service) => !location.priorityServiceSlugs?.includes(service.slug)
  );

  const orderedServices = [...priorityServices, ...otherServices];
  const hotSpringsReviews = reviews.slice(0, 3);

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
      "Tobacco Residue and Nicotine-Stained Wall Cleaning",
      "Move-In Cleaning",
      "Move-Out Cleaning",
      "Airbnb Turnover Cleaning",
      "Professional Building Cleaning",
      ...(isHotSprings
        ? [
            "Home Organization and Decluttering",
            "Senior Home Cleaning and Household Help",
            "Holiday Cleaning",
            "Post-Party Cleaning",
          ]
        : []),
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
                {isHotSprings ? "Cleaning and home services" : "Cleaning services"} in {location.city}, {location.state}
              </h2>

              <p className="mt-4 leading-8 text-black/65">
                These are the main {isHotSprings ? "cleaning and household" : "cleaning"} services available in{" "}
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

        {isHotSprings ? (
          <section className="section-padding bg-[var(--seafoam-soft)]">
            <div className="container-custom px-5">
              <div className="max-w-4xl">
                <p className="font-script text-4xl text-[var(--pink)]">
                  Hot Springs focus
                </p>

                <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                  Cleaning help for the way Hot Springs homes and rentals are actually used.
                </h2>

                <p className="mt-5 text-lg leading-8 text-black/70">
                  Hot Springs has regular family homes, lake-area houses, rentals,
                  apartments, Airbnb stays, small offices, seniors who need a little
                  household help, and properties that get busy around weekends,
                  holidays, events, and guest traffic. These local pages explain the
                  cleaning, organization, and household services people are actually
                  looking for around the Hot Springs area.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hotSpringsNeedCards.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="soft-card block bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--pink)]"
                  >
                    <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {item.text}
                    </p>

                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--gray-dark)]">
                      View service <FaArrowRight />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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

        {isHotSprings ? (
          <section className="section-padding bg-white">
            <div className="container-custom px-5">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="font-script text-4xl text-[var(--pink)]">
                    Local trust
                  </p>

                  <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
                    Multiple 5-star Google reviews from customers who trusted us in their homes.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-black/70">
                    Hot Springs is a competitive cleaning market, so trust matters.
                    Lyn & Lili’s Tidy House is building that trust through friendly
                    service, detailed work, clear communication, and reviews from
                    real customers.
                  </p>

                  <Link href="/#quote" className="btn-secondary mt-6">
                    Ask About Hot Springs Cleaning <FaArrowRight />
                  </Link>
                </div>

                <div className="grid gap-4">
                  {hotSpringsReviews.map((review) => (
                    <div key={review.name} className="soft-card bg-[var(--pink-soft)] p-6">
                      <p className="text-sm font-black tracking-[0.18em] text-[var(--pink)]">
                        ★★★★★
                      </p>

                      <h3 className="mt-2 font-heading text-2xl font-bold text-[var(--gray-dark)]">
                        {review.name}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-black/65">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

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