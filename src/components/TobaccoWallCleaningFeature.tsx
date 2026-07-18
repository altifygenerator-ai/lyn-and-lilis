import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

const highlights = [
  "Washable walls, trim, doors, and hard surfaces",
  "Useful for rentals, inherited homes, and pre-paint cleaning",
  "Smaller areas start at $250",
];

export default function TobaccoWallCleaningFeature() {
  return (
    <section className="section-padding bg-[var(--gray-soft)]">
      <div className="container-custom px-5">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-script text-4xl text-[var(--pink)]">
              New specialty service
            </p>

            <h2 className="font-heading mt-2 text-4xl font-bold leading-tight text-[var(--gray-dark)] md:text-5xl">
              Tobacco residue and nicotine-stained wall cleaning.
            </h2>

            <p className="mt-5 text-lg leading-8 text-black/70">
              Homes that have been smoked in can carry a sticky yellow film
              across the walls, trim, doors, and other hard surfaces. We wash
              that visible residue by hand using a three-person crew, practical
              cleaning tools, fresh rinse water, and plenty of elbow grease.
            </p>

            <p className="mt-4 leading-7 text-black/60">
              This is specialty surface cleaning, not full smoke-damage
              restoration. We do not promise complete odor removal from
              drywall, carpet, insulation, furniture, or HVAC systems.
            </p>

            <div className="mt-6 space-y-3">
              {highlights.map((item) => (
                <p key={item} className="flex gap-3 font-semibold text-black/70">
                  <FaCheck className="mt-1 shrink-0 text-[var(--pink)]" />
                  {item}
                </p>
              ))}
            </div>

            <Link
              href="/services/tobacco-residue-wall-cleaning"
              className="btn-primary mt-8"
            >
              See How the Service Works <FaArrowRight />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-sm">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.3rem] bg-neutral-100">
                <Image
                  src="/images/tobacco-wall-cleaning/doorway-before.webp"
                  alt="Yellow tobacco residue above a doorway before wall cleaning"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pb-1 pt-3 text-sm font-bold text-[var(--gray-dark)]">
                Before cleaning
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-3 shadow-sm sm:mt-10">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.3rem] bg-neutral-100">
                <Image
                  src="/images/tobacco-wall-cleaning/finished-room.webp"
                  alt="Finished room after the tobacco residue was washed from the walls"
                  fill
                  sizes="(max-width: 640px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 pb-1 pt-3 text-sm font-bold text-[var(--gray-dark)]">
                After the wall-washing work
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
