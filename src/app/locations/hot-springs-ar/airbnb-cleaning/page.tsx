import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  getLocation,
  getService,
  serviceSchema,
} from "@/lib/seo";

const location = getLocation("hot-springs-ar");
const service = getService("airbnb-cleaning");

const canonicalPath = "/locations/hot-springs-ar/airbnb-cleaning";

const faqs = [
  {
    q: "Do you clean Airbnbs in Hot Springs, AR?",
    a: "Yes. We clean Airbnb and short-term rental properties in Hot Springs and nearby lake-area communities so the space is ready for the next guest.",
  },
  {
    q: "Do you offer vacation rental turnover cleaning?",
    a: "Yes. We help with vacation rental turnovers, guest resets, bathrooms, kitchens, floors, trash, and basic restock if supplies and expectations are agreed on ahead of time.",
  },
  {
    q: "Can you clean between check-out and check-in?",
    a: "Yes, depending on scheduling. We work from the timing you give us and focus on getting the rental cleaned and ready as efficiently as possible.",
  },
  {
    q: "Do you clean around Lake Hamilton or Lake Catherine?",
    a: "Yes. We clean lake homes, rentals, part-time homes, and guest properties around Hot Springs, Lake Hamilton, Lake Catherine, and nearby areas when scheduling allows.",
  },
];

export const metadata: Metadata = {
  title: "Airbnb Cleaning in Hot Springs, AR | Vacation Rental Turnovers",
  description:
    "Airbnb cleaning, vacation rental cleaning, and rental turnover cleaning in Hot Springs, Arkansas, Lake Hamilton, Lake Catherine, and nearby areas.",
  alternates: {
    canonical: canonicalPath,
  },
};

export default function HotSpringsAirbnbCleaningPage() {
  if (!location || !service) notFound();

  const schemas = [
    breadcrumbSchema([
      {
        name: "Home",
        url: absoluteUrl("/"),
      },
      {
        name: "Hot Springs Cleaning Services",
        url: absoluteUrl(location.href),
      },
      {
        name: "Airbnb Cleaning in Hot Springs",
        url: absoluteUrl(canonicalPath),
      },
    ]),
    serviceSchema(service, location),
    faqSchema(faqs),
  ].filter(Boolean);

  const Icon = service.icon;

  return (
    <>
      <Script
        id="hot-springs-airbnb-cleaning-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas),
        }}
      />

      <main>
        <section className="section">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="eyebrow">
                  Airbnb Cleaning · Hot Springs, Arkansas
                </p>

                <h1 className="section-title">
                  Airbnb Cleaning in Hot Springs, AR
                </h1>

                <p className="section-lead">
                  Reliable Airbnb and vacation rental cleaning for Hot Springs
                  hosts, lake-area rentals, cabins, and short-term stays that
                  need to be cleaned, reset, and guest-ready before the next
                  booking.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn btn-primary">
                    Request a Quote
                  </Link>

                  <Link
                    href="/house-cleaning-hot-springs-ar"
                    className="btn btn-secondary"
                  >
                    View Hot Springs Services
                  </Link>
                </div>
              </div>

              <div className="soft-card">
                {Icon ? <Icon className="mb-5 text-4xl" /> : null}

                <p className="eyebrow">Vacation Rental Turnovers</p>

                <h2 className="text-3xl font-semibold">
                  Guest-ready cleaning for Hot Springs rentals.
                </h2>

                <p className="mt-4 text-base leading-7">
                  Hot Springs rentals have to make a good impression fast.
                  Bathrooms, kitchens, floors, trash, linens if provided, basic
                  restock, and the final guest-ready reset all matter when
                  reviews are on the line.
                </p>

                <p className="mt-5 font-semibold">
                  Custom quote based on the property, timing, and turnover needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Hot Springs Rental Cleaning</p>

                <h2 className="section-title">
                  Cleaning for short-term rentals, lake homes, and guest stays.
                </h2>
              </div>

              <div>
                <p className="section-text">
                  Airbnb cleaning around Hot Springs is different from regular
                  house cleaning because the property has to be reset for the
                  next guest, not just cleaned for the current owner. We help
                  hosts and property owners keep the cleaning side simple between
                  check-out and check-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What It Can Include</p>

              <h2 className="section-title">
                A rental reset built around the property.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Guest reset",
                "Trash removal",
                "Bathroom cleaning",
                "Kitchen reset",
                "Floor cleaning",
                "Basic restock if provided",
                "Linen reset if agreed on",
                "Final guest-area check",
              ].map((item) => (
                <div key={item} className="card">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why It Matters</p>

              <h2 className="section-title">
                Hot Springs rentals depend on clean first impressions.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Airbnb cleaning around Hot Springs often comes down to timing, consistency, and making sure the next guest walks into a clean, comfortable space.",
                "Vacation rentals near Lake Hamilton, Lake Catherine, and other Hot Springs areas may need extra attention after weekends, lake traffic, pollen, outdoor use, and busy seasons.",
                "Turnover cleaning can include bathrooms, kitchens, floors, trash removal, guest-area resets, basic restock if supplies are provided, and linen reset if the process is agreed on ahead of time.",
                "This service is a good fit for hosts, cabin owners, lake-house owners, and property owners who cannot always be there between stays.",
              ].map((item) => (
                <div key={item} className="soft-card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Nearby Areas</p>

              <h2 className="section-title">
                Airbnb cleaning around Hot Springs and nearby lake areas.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Lake Hamilton",
                "Lake Catherine",
                "Hot Springs Village",
                "Rockwell",
                "Piney",
                "Royal",
                "Mountain Pine",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Questions</p>

              <h2 className="section-title">
                Questions about Airbnb cleaning in Hot Springs.
              </h2>
            </div>

            <div className="grid gap-4">
              {faqs.map((item) => (
                <div key={item.q} className="card">
                  <h3 className="text-xl font-semibold">{item.q}</h3>
                  <p className="mt-3">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="soft-card">
              <p className="eyebrow">Get a Quote</p>

              <h2 className="section-title">
                Need Airbnb cleaning in Hot Springs?
              </h2>

              <p className="section-text">
                Reach out with the property size, location, check-out/check-in
                timing, and what needs handled between stays. We can talk through
                the job and give a clear quote before getting started.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary">
                  Request a Quote
                </Link>

                <Link
                  href="/house-cleaning-hot-springs-ar"
                  className="btn btn-secondary"
                >
                  Back to Hot Springs Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}