import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-script text-4xl text-[var(--pink)]">Who we are</p>

          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            A local, family-run cleaning service.
          </h2>

          <p className="mt-4 text-black/65 leading-8">
            Lyn has spent years caring for homes and learning the cleaning
            business firsthand, while Lili brings the same level of care and
            consistency into every home they step into.
          </p>

          <p className="mt-4 text-black/65 leading-8">
            Together, they focus on simple, honest work — showing up, doing the
            job right, and making your home feel taken care of.
          </p>

          <Link href="/about" className="btn-secondary mt-6 inline-flex items-center gap-2">
            Learn More About Us <FaArrowRight />
          </Link>
        </div>

        <div className="rounded-[2rem] bg-[var(--pink-soft)] p-8 flex items-center justify-center text-center text-black/60">
          <p>
            Real photos coming soon — we’ll be updating this with actual homes
            we’ve cleaned locally.
          </p>
        </div>
      </div>
    </section>
  );
}