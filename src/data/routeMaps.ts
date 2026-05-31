import { locations } from "@/data/locations";
import { services } from "@/data/services";

export const serviceImageMap: Record<string, { src: string; alt: string }[]> = {
  "standard-cleaning": [
    { src: "/images/livingroom-1.png", alt: "Fresh living room after routine house cleaning" },
    { src: "/images/livingroom-2.png", alt: "Cleaned living area in an Arkansas home" },
    { src: "/images/after-1.png", alt: "Finished cleaning result in a local home" },
  ],
  "deep-cleaning": [
    { src: "/images/shower-clean.jpeg", alt: "Clean shower after detailed deep cleaning" },
    { src: "/images/bathroom-1.jpg", alt: "Bathroom detail cleaning result" },
    { src: "/images/lazy-susan-clean.jpeg", alt: "Cleaned cabinet area after deep cleaning" },
  ],
  "move-in-move-out-cleaning": [
    { src: "/images/after-2.png", alt: "Cleaned room ready after move-out cleaning" },
    { src: "/images/stove-clean.jpeg", alt: "Clean stove after move-in or move-out cleaning" },
    { src: "/images/sink-1.jpg", alt: "Clean sink and counter after empty-home cleaning" },
  ],
  "airbnb-cleaning": [
    { src: "/images/image1.jpeg", alt: "Guest-ready space after vacation rental cleaning" },
    { src: "/images/image2 (1).jpeg", alt: "Clean rental property prepared for guests" },
    { src: "/images/image3 (1).jpeg", alt: "Freshly cleaned room for Airbnb guests" },
  ],
  "professional-building-cleaning": [
    { src: "/images/after-3.png", alt: "Clean professional space after building cleaning" },
    { src: "/images/image4 (2).jpeg", alt: "Clean interior space for a local business" },
    { src: "/images/image5 (1).jpeg", alt: "Tidy room after professional cleaning" },
  ],
};

export const localServiceDetails: Record<string, Record<string, string[]>> = {
  "hot-springs-ar": {
    "standard-cleaning": [
      "Standard house cleaning in Hot Springs is a good fit for full-time homes, lake-area houses, and busy households that need help keeping bathrooms, kitchens, floors, dusting, and main living areas under control.",
      "This service gives homeowners a dependable upkeep option without jumping straight into a full deep clean every visit.",
      "For homes near Lake Hamilton, Lake Catherine, and nearby communities, routine cleaning can help keep outdoor traffic, pollen, pet hair, and everyday mess from piling up between heavier resets.",
    ],
    "deep-cleaning": [
      "Deep cleaning is a strong fit for Hot Springs homes, rentals, lake houses, and part-time properties that need more than regular upkeep.",
      "A deeper reset can help before guests arrive, after a busy season, before recurring cleaning starts, or when bathrooms, kitchens, baseboards, corners, and buildup areas need extra time.",
      "Lake homes and vacation properties around Hot Springs often benefit from deeper cleaning after weekends, family visits, outdoor traffic, pollen, and guest use.",
    ],
    "move-in-move-out-cleaning": [
      "Move-in and move-out cleaning in Hot Springs helps renters, landlords, sellers, buyers, and property owners get an empty space ready for the next person.",
      "This service is useful when furniture is out and cabinets, appliances, floors, bathrooms, baseboards, and hidden areas can be reached more easily.",
      "It is also a good fit for rental turnovers, empty homes, lake properties, and homes that need a stronger cleaning before a new owner, tenant, or guest arrives.",
    ],
    "airbnb-cleaning": [
      "Airbnb and vacation rental cleaning is one of the highest-priority services around Hot Springs because guest-ready spaces have to be cleaned quickly and consistently between stays.",
      "Turnover cleaning can help with bathrooms, kitchens, floors, trash, guest-area resets, basic restock if supplies are provided, and linen reset if the process is agreed on ahead of time.",
      "This is a strong fit for Hot Springs hosts, Lake Hamilton rentals, Lake Catherine properties, cabin owners, lake-house owners, and property owners who cannot always be there between check-out and check-in.",
    ],
    "professional-building-cleaning": [
      "Professional building cleaning in Hot Springs helps small offices, waiting areas, bathrooms, breakrooms, and customer-facing spaces stay clean for daily use.",
      "This service is built more for small local business spaces than large industrial janitorial contracts.",
      "It can be scheduled around the needs of the building, the amount of foot traffic, and which areas need the most consistent attention.",
    ],
  },
};

export function getServiceImages(serviceSlug: string) {
  return serviceImageMap[serviceSlug] ?? serviceImageMap["standard-cleaning"];
}

export function getLocalServiceDetails(locationSlug: string, serviceSlug: string) {
  const custom = localServiceDetails[locationSlug]?.[serviceSlug];
  if (custom?.length) return custom;

  const location = locations.find((item) => item.slug === locationSlug);
  const service = services.find((item) => item.slug === serviceSlug);

  if (!location || !service) return [];

  return [
    `${service.title} in ${location.city} is built around ${location.pageFocus}. Every property is a little different, so the cleaning is quoted around the space, condition, and type of job needed.`,
    location.localAngle,
    `${service.title} can be a good fit for ${location.city} homes, rentals, local properties, and nearby areas including ${location.nearbyAreas.join(", ")}.`,
  ];
}

export function getLocalServiceFaq(locationSlug: string, serviceSlug: string) {
  const location = locations.find((item) => item.slug === locationSlug);
  const service = services.find((item) => item.slug === serviceSlug);

  if (!location || !service) return [];

  const lowerService = service.title.toLowerCase();

  if (locationSlug === "hot-springs-ar" && serviceSlug === "airbnb-cleaning") {
    return [
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
  }

  return [
    {
      q: `Do you offer ${lowerService} in ${location.city}, ${location.state}?`,
      a: `Yes. Lyn & Lili’s offers ${lowerService} in ${location.city}, ${location.state} and nearby areas.`,
    },
    {
      q: `How much does ${lowerService} cost in ${location.city}?`,
      a: "Pricing depends on the size, condition, type of space, travel distance, and what needs to be cleaned. We give a clear quote before getting started.",
    },
    {
      q: `Can I book a one-time ${lowerService}?`,
      a: "Yes. Many customers book one-time cleaning for deep cleans, move-outs, rental resets, or when they need help getting caught up.",
    },
  ];
}

export function getLocalServiceMeta(locationSlug: string, serviceSlug: string) {
  const location = locations.find((item) => item.slug === locationSlug);
  const service = services.find((item) => item.slug === serviceSlug);

  if (!location || !service) {
    return {
      title: "Cleaning Services | Lyn & Lili’s",
      description: "Local cleaning services for homes, rentals, and small businesses.",
    };
  }

  const cityState = `${location.city}, ${location.state}`;

  if (locationSlug === "hot-springs-ar" && serviceSlug === "airbnb-cleaning") {
    return {
      title: "Airbnb Cleaning in Hot Springs, AR | Vacation Rental Turnovers",
      description:
        "Airbnb cleaning, vacation rental cleaning, and rental turnover cleaning in Hot Springs, Arkansas, Lake Hamilton, Lake Catherine, and nearby areas.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "deep-cleaning") {
    return {
      title: "Deep Cleaning Services in Hot Springs, AR | Lyn & Lili’s",
      description:
        "Detailed deep cleaning services in Hot Springs, Arkansas for homes, lake houses, rentals, vacation properties, move-ins, and one-time cleaning resets.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "move-in-move-out-cleaning") {
    return {
      title: "Move-Out Cleaning in Hot Springs, AR | Move-In Cleaning",
      description:
        "Move-in and move-out cleaning in Hot Springs, Arkansas for renters, landlords, sellers, homeowners, rental properties, and empty homes.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "standard-cleaning") {
    return {
      title: "House Cleaning in Hot Springs, AR | Standard Cleaning",
      description:
        "Routine house cleaning in Hot Springs, Arkansas for full-time homes, lake-area homes, families, and regular weekly or biweekly upkeep.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "professional-building-cleaning") {
    return {
      title: "Office Cleaning in Hot Springs, AR | Professional Building Cleaning",
      description:
        "Office cleaning and professional building cleaning in Hot Springs, Arkansas for small offices, bathrooms, breakrooms, waiting areas, and customer-facing spaces.",
    };
  }

  return {
    title: `${service.title} in ${cityState} | Lyn & Lili’s`,
    description: `${service.title} for homes, rentals, and properties in ${cityState}. Local cleaning help for ${location.pageFocus}.`,
  };
}
