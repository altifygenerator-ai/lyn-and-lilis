import { locations } from "@/data/locations";
import { services } from "@/data/services";

export const serviceImageMap: Record<string, { src: string; alt: string }[]> = {
  "standard-cleaning": [
    { src: "/images/after-3.png", alt: "Clean living room after routine house cleaning" },
    { src: "/images/livingroom-1.png", alt: "Fresh living room after regular cleaning" },
    { src: "/images/livingroom-2.png", alt: "Cleaned living area in an Arkansas home" },
  ],
  "deep-cleaning": [
    { src: "/images/shower-clean.jpeg", alt: "Clean shower after detailed deep cleaning" },
    { src: "/images/clean-tub.jpeg", alt: "Clean bathtub after detailed bathroom cleaning" },
    { src: "/images/lazy-susan-clean.jpeg", alt: "Cleaned cabinet area after deep cleaning" },
  ],
  "move-in-move-out-cleaning": [
    { src: "/images/stove-clean.jpeg", alt: "Clean stove after move-in or move-out cleaning" },
    { src: "/images/clean-shiney-dishwasher.jpeg", alt: "Clean appliance surface after empty-home cleaning" },
    { src: "/images/fridge-open-clean.jpeg", alt: "Clean refrigerator interior after move-in or move-out cleaning" },
  ],
  "airbnb-cleaning": [
    { src: "/images/after-2.png", alt: "Clean bathroom ready for guests" },
    { src: "/images/shiney-clean-bathroom.jpeg", alt: "Fresh bathroom after vacation rental cleaning" },
    { src: "/images/clean-sink.jpeg", alt: "Clean sink detail for a guest-ready rental" },
  ],
  "professional-building-cleaning": [
    { src: "/images/after-1.png", alt: "Clean kitchen or break area after professional cleaning" },
    { src: "/images/clean-sink.jpeg", alt: "Clean sink and counter detail after building cleaning" },
    { src: "/images/top-of-fridge-clean.jpeg", alt: "Clean high-dust surface after detail cleaning" },
  ],
  "home-organization": [
    { src: "/images/lazy-susan-clean2.jpeg", alt: "Organized kitchen cabinet after a home organization reset" },
    { src: "/images/cupboard-clean.jpeg", alt: "Clean and organized cupboard shelves" },
    { src: "/images/fridge-open-clean.jpeg", alt: "Clean organized refrigerator and food storage area" },
  ],
  "senior-home-help": [
    { src: "/images/livingroom-2.png", alt: "Comfortable clean living room after senior home cleaning" },
    { src: "/images/shiney-clean-bathroom.jpeg", alt: "Clean bathroom after dependable household help" },
    { src: "/images/clean-sink.jpeg", alt: "Clean kitchen sink after light household cleaning" },
  ],
  "holiday-special-occasion-cleaning": [
    { src: "/images/after-3.png", alt: "Clean living area ready for holiday guests" },
    { src: "/images/stove-clean.jpeg", alt: "Clean kitchen stove after holiday or party cleanup" },
    { src: "/images/after-2.png", alt: "Fresh bathroom ready for guests and special occasions" },
  ],
};

export const localServiceDetails: Record<string, Record<string, string[]>> = {
  "hot-springs-ar": {
    "standard-cleaning": [
      "House cleaning in Hot Springs is a good fit for full-time homes, lake-area houses, apartments, and busy households that need help keeping bathrooms, kitchens, floors, dusting, and main living areas under control.",
      "This service gives Hot Springs homeowners a dependable upkeep option without jumping straight into a full deep clean every visit.",
      "For homes near Lake Hamilton, Lake Catherine, Oaklawn, Central Avenue, Rockwell, Piney, and nearby communities, routine cleaning can help keep outdoor traffic, pollen, pet hair, and everyday mess from piling up between heavier resets.",
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
    "home-organization": [
      "Home organization in Hot Springs is a good fit for busy households, lake homes, seniors, and families who need help getting closets, pantries, cabinets, or laundry rooms back under control.",
      "The work can include sorting, shelf cleaning, donation grouping, and setting the space back up in a way that is practical for the people who use it every day.",
      "Hot Springs and Hot Springs Village also have many homeowners simplifying, downsizing, or maintaining part-time properties, which can make one-room organization projects especially useful.",
      "A pantry or closet reset can be handled as its own project, while larger kitchens, walk-in closets, multi-room decluttering, or move-related organization may need more than one visit.",
      "The goal is not to make a home look staged for a picture. It is to create a setup that makes daily routines easier and gives the customer a realistic way to keep the space in order afterward.",
    ],
    "senior-home-help": [
      "Senior home cleaning in Hot Springs gives older adults practical help with bathrooms, kitchens, floors, laundry, bedding, trash, and light organization while keeping the service focused on the home rather than personal care.",
      "This can be especially helpful for families arranging local household support for a parent in Hot Springs, Hot Springs Village, Lake Hamilton, or a nearby community.",
      "Visits can be built around regular cleaning, a one-time reset, or the specific household tasks that have become harder to keep up with safely.",
      "Some families need a dependable local team because they live outside Garland County and cannot be there every week. Clear priorities and steady communication can help everyone know what was handled during the visit.",
      "This remains a non-medical household service. It is meant to help the home stay cleaner and more manageable without presenting the work as personal care, home healthcare, or transportation assistance.",
    ],
    "holiday-special-occasion-cleaning": [
      "Holiday and special occasion cleaning in Hot Springs is useful before family arrives, after a lake-house gathering, following a birthday or graduation party, or when the home needs to be guest-ready by a specific date.",
      "Before-event cleaning can focus on kitchens, bathrooms, guest rooms, floors, and main living areas. After-event cleaning can focus on trash, kitchen surfaces, bathrooms, floors, bedding, and getting the household back to normal.",
      "Because Hot Springs homes and lake properties often get busier around weekends, holidays, reunions, and events, booking early gives the best chance of securing the needed time.",
      "The service can be a one-time guest-ready clean, a cleanup after the gathering, or a two-visit package when the schedule allows. The quote is based on the home, timing, expected use, and the rooms that matter most.",
      "Private homes and lake houses are the main fit for this service. Large venue teardown, outdoor grounds cleanup, catering breakdown, and heavy hauling would need separate discussion before being accepted.",
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

  if (locationSlug === "hot-springs-ar" && serviceSlug === "home-organization") {
    return [
      {
        q: "Do you organize closets and pantries in Hot Springs?",
        a: "Yes. We help organize closets, pantries, cabinets, laundry rooms, and other everyday spaces in Hot Springs and nearby areas.",
      },
      {
        q: "Can you clean while organizing the space?",
        a: "Yes. Shelf wipe-downs and light cleaning are often part of the reset, and deeper cleaning can be added depending on the space.",
      },
      {
        q: "Do you help with downsizing or donation sorting?",
        a: "We can help sort items into keep, donate, relocate, and discard groups. Final decisions stay with the customer or family unless clear instructions are provided.",
      },
      {
        q: "Do you serve Hot Springs Village for organizing projects?",
        a: "Yes, depending on scheduling and travel. We serve Hot Springs and nearby communities including Hot Springs Village, Lake Hamilton, and surrounding areas.",
      },
    ];
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "senior-home-help") {
    return [
      {
        q: "Do you provide senior home cleaning in Hot Springs?",
        a: "Yes. We provide non-medical home cleaning and light household help for seniors in Hot Springs and nearby areas.",
      },
      {
        q: "Can a family member arrange service for a parent?",
        a: "Yes. Family members can help arrange the service, share priorities, and stay involved in scheduling and communication.",
      },
      {
        q: "What household tasks can be included?",
        a: "Depending on the home, visits can include bathrooms, kitchens, dusting, floors, laundry, bedding changes, trash removal, and light organization.",
      },
      {
        q: "Is this home healthcare or personal care?",
        a: "No. This is non-medical household help focused on cleaning and the home. We do not provide bathing, medication help, transportation, lifting, or medical care.",
      },
    ];
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "holiday-special-occasion-cleaning") {
    return [
      {
        q: "Do you offer holiday cleaning in Hot Springs?",
        a: "Yes. We offer guest-ready cleaning before holidays and gatherings, post-holiday resets, and after-party household cleanup depending on availability.",
      },
      {
        q: "Can I book cleaning before and after the same event?",
        a: "Yes, when scheduling allows. You can request one visit before the gathering and another after it is over.",
      },
      {
        q: "Do you clean lake houses after family gatherings?",
        a: "Yes. We can quote cleanup for lake houses and private homes around Hot Springs, Lake Hamilton, Lake Catherine, and nearby areas.",
      },
      {
        q: "How early should I schedule holiday cleaning?",
        a: "Holiday and event dates fill faster because the work must happen in a specific window, so earlier booking is recommended.",
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

  if (locationSlug === "hot-springs-ar" && serviceSlug === "home-organization") {
    return {
      title: "Home Organization in Hot Springs, AR | Closets & Pantries",
      description:
        "Home organization and decluttering in Hot Springs, Arkansas for closets, pantries, cabinets, laundry rooms, downsizing, and practical household resets.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "senior-home-help") {
    return {
      title: "Senior Home Cleaning in Hot Springs, AR | Household Help",
      description:
        "Non-medical senior home cleaning and household help in Hot Springs, Arkansas including laundry, bedding, light organization, bathrooms, kitchens, and floors.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "holiday-special-occasion-cleaning") {
    return {
      title: "Holiday & Post-Party Cleaning in Hot Springs, AR",
      description:
        "Holiday cleaning, guest-ready cleaning, after-party cleanup, and post-holiday home resets in Hot Springs, Lake Hamilton, Lake Catherine, and nearby areas.",
    };
  }

  return {
    title: `${service.title} in ${cityState} | Lyn & Lili’s`,
    description: `${service.title} for homes, rentals, and properties in ${cityState}. Local cleaning help for ${location.pageFocus}.`,
  };
}
