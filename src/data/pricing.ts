export type PricingTier = {
  label: string;
  price: string;
  detail?: string;
};

export type ServicePricing = {
  eyebrow: string;
  title: string;
  intro: string;
  tiers: PricingTier[];
  note: string;
};

const servicePricing: Record<string, ServicePricing> = {
  "standard-cleaning": {
    eyebrow: "Typical pricing",
    title: "Standard cleaning starts at $100.",
    intro:
      "Standard cleaning is priced by the size of the home, number of bathrooms, condition, and how much regular upkeep is needed. These are common starting points for maintained homes, not hard flat-rate caps.",
    tiers: [
      {
        label: "1–2 bedrooms / up to about 1,200 sq. ft.",
        price: "$100",
      },
      {
        label: "3 bedrooms / up to about 1,600 sq. ft.",
        price: "$125",
      },
      {
        label: "4 bedrooms / up to about 2,000 sq. ft.",
        price: "$150",
      },
      {
        label: "5 bedrooms / up to about 2,400 sq. ft.",
        price: "$175",
      },
      {
        label: "About 2,400–3,000 sq. ft.",
        price: "$185–$210",
      },
      {
        label: "3,000+ sq. ft. or unusually large layouts",
        price: "$210+ / custom quote",
      },
    ],
    note:
      "Extra bathrooms, heavy pet hair, buildup, or a larger-than-typical floor plan can raise the quote. If the home needs more than normal upkeep, a deep clean may be the better first visit.",
  },

  "deep-cleaning": {
    eyebrow: "Typical pricing",
    title: "Deep cleaning starts at $250.",
    intro:
      "Bedroom count gives us a useful starting point, but square footage and condition still matter. A large 3-bedroom home can cost more than a smaller 4-bedroom home if there is simply more space and detail work to cover.",
    tiers: [
      {
        label: "1–3 bedrooms / typical size up to about 1,600 sq. ft.",
        price: "$250",
      },
      {
        label: "4 bedrooms / typical size up to about 2,000 sq. ft.",
        price: "$300",
      },
      {
        label: "5 bedrooms / typical size up to about 2,400 sq. ft.",
        price: "$350",
      },
      {
        label: "6 bedrooms, very large homes, or larger floor plans",
        price: "$400+",
      },
    ],
    note:
      "As a general guide, extra square footage can add about $25 for each additional 250–300 sq. ft. before condition adjustments. Heavy buildup, extra bathrooms, inside appliances, or other added detail can increase the final quote.",
  },

  "move-in-move-out-cleaning": {
    eyebrow: "Typical pricing",
    title: "Move-in and move-out cleaning starts at $300.",
    intro:
      "Empty-home cleaning usually includes more detail than a normal maintenance visit. Pricing is based on the size of the home, bathrooms, appliances, cabinets, condition, and how much work is needed before the next person moves in.",
    tiers: [
      { label: "Small home or 1–2 bedrooms", price: "$300" },
      { label: "Typical 3-bedroom home", price: "$325–$350" },
      { label: "Typical 4-bedroom home", price: "$375–$400" },
      { label: "Typical 5-bedroom home", price: "$425–$475" },
      { label: "Large or heavily soiled property", price: "$500+ / custom quote" },
    ],
    note:
      "Square footage and condition can move the price above these examples. Heavy trash, junk removal, repairs, carpet shampooing, and other work outside normal move-in or move-out cleaning are quoted separately.",
  },

  "airbnb-cleaning": {
    eyebrow: "Turnover pricing",
    title: "Vacation rental pricing is built around the property.",
    intro:
      "Bed count, laundry, property size, turnover window, supplies, and travel all affect a rental clean. These are useful starting points for a normal turnover, but each property is quoted around the actual setup.",
    tiers: [
      { label: "1-bedroom rental", price: "$100–$125" },
      { label: "2-bedroom rental", price: "$125–$150" },
      { label: "3-bedroom rental", price: "$150–$190" },
      { label: "4-bedroom rental", price: "$185–$225" },
      { label: "Large cabins / 5+ beds", price: "$225+" },
    ],
    note:
      "Large laundry loads, many beds, long travel distance, excessive mess, restocking, or tight same-day turnover windows can increase the quote. Regular hosts can ask about a consistent property-specific rate.",
  },

  "professional-building-cleaning": {
    eyebrow: "Business cleaning pricing",
    title: "Professional building cleaning is quoted around the space.",
    intro:
      "Small offices and local professional spaces vary a lot in square footage, bathrooms, traffic, and cleaning frequency, so recurring business work is quoted around the actual building and schedule.",
    tiers: [
      { label: "Small office or professional space", price: "Often starts around $100 / visit" },
      { label: "Medium office or professional building", price: "$125–$200 / visit" },
      { label: "Larger or high-traffic spaces", price: "Custom quote" },
    ],
    note:
      "Weekly or biweekly service may be priced differently than one-time cleaning. We look at the space, bathrooms, breakrooms, floors, traffic, and frequency before giving a recurring rate.",
  },

  "home-organization": {
    eyebrow: "Organization pricing",
    title: "Home organization starts at $175.",
    intro:
      "Organization is priced by the amount of sorting, folding, resetting, and putting-away work involved. Storage bins, baskets, hangers, and other organizing products are normally supplied by the customer unless included in the quote.",
    tiers: [
      { label: "Small pantry or reach-in closet", price: "$175–$225" },
      { label: "Large walk-in closet or laundry room", price: "$200–$225" },
      { label: "Two or three organizing areas", price: "$250–$325" },
      { label: "Larger multi-room project", price: "$350+ / custom quote" },
    ],
    note:
      "A project with a very large amount of clothing, donation sorting, or multiple rooms may need a custom quote. Light shelf wipe-downs can be included while the space is being reset; deeper cleaning can be added separately.",
  },

  "senior-home-help": {
    eyebrow: "Senior household help pricing",
    title: "Senior home cleaning and household help starts at $100.",
    intro:
      "Visits can be built around regular cleaning, laundry, bedding, light organization, or a mix of household tasks. The final quote depends on the home, amount of help requested, travel, and whether service is one-time or recurring.",
    tiers: [
      { label: "Smaller routine household visit", price: "$100–$140" },
      { label: "Longer cleaning and household-help visit", price: "$150–$200+" },
      { label: "Regular recurring service", price: "Custom recurring rate" },
    ],
    note:
      "This is non-medical household help. Larger homes, heavier cleaning, or visits with a lot of laundry and organization can be quoted above the typical starting range.",
  },

  "holiday-special-occasion-cleaning": {
    eyebrow: "Event and holiday pricing",
    title: "Holiday and special occasion cleaning starts at $175.",
    intro:
      "Pricing depends on whether the visit is before or after the gathering, the size of the home, guest areas involved, timing, and the condition of the space.",
    tiers: [
      { label: "Light event-prep cleaning", price: "$175+" },
      { label: "Typical whole-home guest-ready cleaning", price: "$200–$300" },
      { label: "Larger or deeper event preparation", price: "$300+" },
      { label: "Post-party cleanup", price: "Custom quote" },
    ],
    note:
      "Holiday and event dates can fill quickly. Same-night, weekend, large-group, or heavier post-party cleanup may cost more depending on the timing and condition of the home.",
  },
};

export function getServicePricing(slug: string) {
  return servicePricing[slug] ?? null;
}
