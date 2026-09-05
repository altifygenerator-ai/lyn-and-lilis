export const CLIENT_POLICY_VERSION = "2026-09-04";
export const CLIENT_POLICY_EFFECTIVE_DATE = "September 4, 2026";

export type ClientPolicy = {
  id: string;
  title: string;
  shortTitle: string;
  body: string;
};

export const clientPolicies: ClientPolicy[] = [
  {
    id: "quotes-pricing",
    title: "Quotes, pricing & changes to the job",
    shortTitle: "Quotes & pricing",
    body:
      "Website prices are starting points. Final quotes are based on the size and condition of the home, buildup, pet hair, clutter, add-ons, travel, and the amount of work involved. If the home or requested work is substantially different when we arrive, we will talk with you before doing work that would increase the quoted price.",
  },
  {
    id: "deposits",
    title: "Booking deposits",
    shortTitle: "Deposits",
    body:
      "Some first-time, deep-clean, move-in/move-out, or larger appointments may require a 25% booking deposit to reserve the scheduled time. Any required deposit is applied toward the final cleaning total. If an appointment is canceled inside the late-cancellation window, some or all of the deposit may be applied toward the cancellation fee.",
  },
  {
    id: "cancellations",
    title: "Cancellations & rescheduling",
    shortTitle: "Cancellations",
    body:
      "We understand that plans change and ask for at least 24 hours' notice when an appointment needs to be canceled or moved. Cancellations or rescheduling with at least 24 hours' notice do not have a cancellation fee. Cancellations with less than 24 hours' notice may be charged 50% of the scheduled service. If our team is already traveling to the property, has arrived, is turned away, or cannot access the property at the scheduled time, the appointment may be charged up to the full scheduled amount. We will always try to work with clients when there is a genuine emergency.",
  },
  {
    id: "access",
    title: "Access to the property",
    shortTitle: "Property access",
    body:
      "Please make sure our team can access the home or property at the scheduled appointment time. If we cannot enter the property and cannot reach you, or if the appointment is canceled after we have already traveled to the job, the visit may be treated as a same-day cancellation under the cancellation policy.",
  },
  {
    id: "payment",
    title: "Payment & late balances",
    shortTitle: "Payment",
    body:
      "Payment is due when the scheduled cleaning is completed unless another arrangement has been approved in advance. If a balance remains unpaid for more than 24 hours after completion, a $15 late payment fee may be added. Future appointments may be paused until the account is current.",
  },
  {
    id: "card-on-file",
    title: "Cards kept securely on file",
    shortTitle: "Card on file",
    body:
      "When a client chooses or is asked to keep a card on file, the card information is handled securely by our payment processor, Stripe. Lyn & Lili's does not store the full card number on this website. A saved payment method may be used for agreed cleaning charges and any cancellation or no-access fee that applies under these policies. Clients may contact us to change or remove a saved payment method for future charges.",
  },
  {
    id: "extras",
    title: "Add-ons & extra work",
    shortTitle: "Extra work",
    body:
      "Extra services that were not included in the original quote will be discussed before they are added. We do not want you finding out about an unexpected charge after the job is already finished.",
  },
  {
    id: "safety",
    title: "Safety & specialty cleanup",
    shortTitle: "Safety",
    body:
      "Some conditions require specialty remediation or equipment beyond normal home cleaning. We may decline or stop work if we find unsafe conditions, active infestations, hazardous materials, or cleanup that falls outside the service that was booked.",
  },
];

export const clientPolicySnapshot = {
  version: CLIENT_POLICY_VERSION,
  effectiveDate: CLIENT_POLICY_EFFECTIVE_DATE,
  policies: clientPolicies,
};
