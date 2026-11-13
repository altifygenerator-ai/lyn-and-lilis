import Image from "next/image";
import Link from "next/link";

const jobs = [
  { title: "Stovetop detail", before: "/images/recent-cleaning/stovetop-before.webp", after: "/images/recent-cleaning/stovetop-after.webp" },
  { title: "Bathroom toilet", before: "/images/recent-cleaning/toilet-detail-before.webp", after: "/images/recent-cleaning/toilet-detail-after.webp" },
  { title: "Bathroom sink", before: "/images/recent-cleaning/bathroom-sink-before.webp", after: "/images/recent-cleaning/bathroom-sink-after.webp" },
];

export default function HotSpringsCleaningProof() {
  return (
    <section className="section-padding bg-white" aria-labelledby="hot-springs-cleaning-work">
      <div className="container-custom px-5">
        <div className="max-w-3xl">
          <p className="font-script text-4xl text-[var(--pink)]">See the difference</p>
          <h2 id="hot-springs-cleaning-work" className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)] md:text-5xl">
            Real cleaning details, before and after.
          </h2>
          <p className="mt-4 leading-8 text-black/65">
            A few genuine cleaning results from homes in our service area. The photos are examples of
            our work, not a claim that every job pictured was completed in Hot Springs.
            We help with the same kinds of kitchen and bathroom cleaning in Hot Springs,
            Lake Hamilton, Royal, Pearcy, and nearby areas.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {jobs.map((job) => (
            <article key={job.title} className="soft-card overflow-hidden bg-[var(--pink-soft)] p-4">
              <h3 className="font-heading text-2xl font-bold text-[var(--gray-dark)]">{job.title}</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  { src: job.before, label: "Before" },
                  { src: job.after, label: "After" },
                ].map((photo) => (
                  <div key={photo.label}>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black/65">{photo.label}</p>
                    <div className="relative h-52 overflow-hidden rounded-xl bg-white sm:h-64">
                      <Image
                        src={photo.src}
                        alt={job.title + " " + photo.label.toLowerCase() + " cleaning"}
                        fill
                        sizes="(max-width: 768px) 50vw, 18vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/locations/hot-springs-ar/deep-cleaning" className="btn-primary">
            Deep Cleaning in Hot Springs
          </Link>
          <Link href="/#quote" className="btn-secondary">
            Ask for a Cleaning Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
