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
const service = getService("deep-cleaning");

const canonicalPath = "/locations/hot-springs-ar/deep-cleaning";

const faqs = [
  {
    q: "Do you offer deep cleaning in Hot Springs, AR?",
    a: "Yes. We offer detailed deep cleaning for homes, rentals, lake houses, move-in spaces, and one-time cleaning resets in Hot Springs and nearby areas.",
  },
  {
    q: "When should I book a deep clean?",
    a: "Deep cleaning is best when the home needs more than regular upkeep, such as before guests, after a busy season, before recurring cleaning starts, or when buildup has collected.",
  },
  {
    q: "Is deep cleaning good for lake homes?",
    a: "Yes. Lake homes and part-time properties often benefit from deep cleaning because dust, pollen, outdoor debris, and weekend-use mess can build up between visits.",
  },
  {
    q: "Is deep cleaning different from standard cleaning?",
    a: "Yes. Standard cleaning is for upkeep. Deep cleaning is more detailed and focuses on buildup, baseboards, bathrooms, kitchens, corners, and areas that need extra time.",
  },
];

export const metadata: Metadata = {
  title: "Deep Cleaning Services in Hot Springs, AR | Lyn & Lili’s",
  description:
    "Detailed deep cleaning services in Hot Springs, Arkansas for homes, lake houses, rentals, vacation properties, move-ins, and one-time cleaning resets.",
  alternates: {
    canonical: canonicalPath,
  },
};

export default function HotSpringsDeepCleaningPage() {
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
        name: "Deep Cleaning in Hot Springs",
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
        id="hot-springs-deep-cleaning-schema"
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
                  Deep Cleaning · Hot Springs, Arkansas
                </p>

                <h1 className="section-title">
                  Deep Cleaning Services in Hot Springs, AR
                </h1>

                <p className="section-lead">
                  Detailed deep cleaning for Hot Springs homes, lake houses,
                  rentals, and lived-in spaces that need more than regular
                  upkeep.
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

                <p className="eyebrow">Detailed Home Reset</p>

                <h2 className="text-3xl font-semibold">
                  A stronger reset for homes, rentals, and lake houses.
                </h2>

                <p className="mt-4 text-base leading-7">
                  Some homes need more than a normal maintenance clean. Around
                  Hot Springs, deep cleaning is useful for lake homes after busy
                  weekends, rentals before guests arrive, move-in spaces,
                  first-time cleanings, seasonal resets, and homes that have
                  simply gotten behind.
                </p>

                <p className="mt-5 font-semibold">
                  Starting around $220–$350 depending on size and condition.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Hot Springs Deep Cleaning</p>

                <h2 className="section-title">
                  A deeper reset for buildup, skipped areas, and heavy-use
                  spaces.
                </h2>
              </div>

              <div>
                <p className="section-text">
                  Deep cleaning focuses on the areas that regular cleaning
                  usually cannot fully handle in one quick visit. Bathrooms,
                  kitchens, baseboards, corners, floors, high-touch surfaces,
                  and buildup areas often need more time. This service is made
                  for customers who want the home to feel reset, not just touched
                  up.
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
                Detail cleaning for the areas that need extra time.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Detailed bathrooms",
                "Kitchen detail",
                "Baseboards",
                "Build-up removal",
                "Floor cleaning",
                "High-touch surfaces",
                "Corners and edges",
                "Extra attention areas",
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
                Hot Springs homes and rentals often need a stronger reset.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Deep cleaning is a good starting point when a Hot Springs home has buildup, dust, bathroom grime, kitchen mess, or areas that have been skipped during regular upkeep.",
                "Lake-area homes and part-time properties often collect pollen, dust, outdoor debris, and weekend-use mess that needs a stronger reset.",
                "This service works well before guests arrive, before starting recurring cleaning, before listing a rental, or after a busy season.",
                "Deep cleaning usually takes longer than standard cleaning because it focuses on detail, buildup, corners, baseboards, bathrooms, kitchens, and other extra-attention areas.",
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
              <p className="eyebrow">Good Fit For</p>

              <h2 className="section-title">
                Common reasons people book deep cleaning.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "First-time cleanings",
                "Seasonal resets",
                "Lake homes",
                "Vacation rentals",
                "Homes before guests arrive",
                "Bathrooms and kitchens with buildup",
                "Move-in spaces",
                "Homes that have gotten behind",
              ].map((item) => (
                <div key={item} className="card">
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Questions</p>

              <h2 className="section-title">
                Questions about deep cleaning in Hot Springs.
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
                Need deep cleaning in Hot Springs?
              </h2>

              <p className="section-text">
                Reach out with the home size, condition, type of cleaning
                needed, and timing. We can talk through the details and give a
                clear quote before getting started.
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