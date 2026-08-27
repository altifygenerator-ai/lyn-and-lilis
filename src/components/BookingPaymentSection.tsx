import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const items = [
  {
    title: "25% deposit on larger one-time jobs",
    text: "One-time services of $200 or more may require a 25% deposit to reserve the appointment. The deposit is applied to the final balance.",
  },
  {
    title: "Balance due within one hour",
    text: "The remaining balance is due when the cleaning is finished and must be received within one hour of completion.",
  },
  {
    title: "$15 late fee after one hour",
    text: "Payment is expected within one hour of completion for every customer. If a balance is still unpaid after that one-hour window, a $15 late payment fee may be added.",
  },
  {
    title: "24-hour cancellation notice",
    text: "With at least 24 hours' notice, a booking deposit can be transferred to a new date. Late cancellations or no-shows may forfeit the deposit.",
  },
];

export default function BookingPaymentSection() {
  return (
    <section className="bg-[var(--cream)] py-20">
      <div className="container-custom px-5">
        <div className="max-w-3xl">
          <p className="font-script text-4xl text-[var(--pink)]">Booking & payment</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            Clear terms so there are no surprises after the job.
          </h2>
          <p className="mt-4 leading-8 text-black/65">
            We keep payment simple and talk through the quote before work starts. Payment is due when the job is finished and must be received within one hour, no matter which payment method you use.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="soft-card bg-white p-6">
              <FaCheck className="text-2xl text-[var(--pink)]" />
              <h3 className="font-heading mt-4 text-2xl font-bold text-[var(--gray-dark)]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-black/65">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/policies" className="btn-secondary">
            View Full Booking & Payment Policies
          </Link>
        </div>
      </div>
    </section>
  );
}
