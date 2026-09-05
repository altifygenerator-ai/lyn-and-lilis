import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const items = [
  {
    title: "Deposits on some new or larger jobs",
    text: "Some first-time, deep-clean, move-in/move-out, or larger appointments may require a 25% deposit to reserve the scheduled time. It is applied to the final balance.",
  },
  {
    title: "Payment due when the cleaning is finished",
    text: "Payment is due at completion unless another arrangement was approved ahead of time. Balances left unpaid for more than 24 hours may receive a $15 late fee.",
  },
  {
    title: "24-hour cancellation notice",
    text: "With at least 24 hours' notice there is no cancellation fee. Less than 24 hours may be charged 50%, and same-day travel/no-access situations may be charged up to the scheduled amount.",
  },
  {
    title: "Simple client agreement",
    text: "New clients can review the current policies, acknowledge them online, and optionally keep a card securely on file through Stripe.",
  },
];

export default function BookingPaymentSection() {
  return (
    <section className="bg-[var(--cream)] py-20">
      <div className="container-custom px-5">
        <div className="max-w-3xl">
          <p className="font-script text-4xl text-[var(--pink)]">Booking & payment</p>
          <h2 className="font-heading mt-2 text-4xl font-bold text-[var(--gray-dark)]">
            Clear terms so scheduling stays simple for everybody.
          </h2>
          <p className="mt-4 leading-8 text-black/65">
            As the business has grown, we have put the basics in writing so clients and our cleaning team both know what to expect before the appointment.
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

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/policies" className="btn-secondary">
            View Client Policies
          </Link>
          <Link href="/client-agreement" className="btn-primary">
            Client Agreement
          </Link>
        </div>
      </div>
    </section>
  );
}
