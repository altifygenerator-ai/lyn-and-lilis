import { locations } from "@/data/locations";
import { services } from "@/data/services";

export const serviceImageMap: Record<string, { src: string; alt: string }[]> = {
  "standard-cleaning": [
    { src: "/images/after-3.png", alt: "Clean living room after routine house cleaning" },
    { src: "/images/latest-work/window-sill-after.webp", alt: "Clean window sill after detailed routine cleaning" },
    { src: "/images/latest-work/wall-spot-after.webp", alt: "Clean wall and doorway detail after house cleaning" },
  ],
  "deep-cleaning": [
    { src: "/images/latest-work/bathroom-sink-after.webp", alt: "Clean bathroom sink and vanity after detailed deep cleaning" },
    { src: "/images/latest-work/toilet-base-after.webp", alt: "Clean toilet base after detailed bathroom cleaning" },
    { src: "/images/latest-work/window-sill-after.webp", alt: "Clean window sill after deep cleaning detail work" },
  ],
  "move-in-move-out-cleaning": [
    { src: "/images/latest-work/kitchen-sink-after.webp", alt: "Clean kitchen sink after move-in or move-out cleaning" },
    { src: "/images/latest-work/bathroom-sink-after.webp", alt: "Clean bathroom sink after empty-home detail cleaning" },
    { src: "/images/fridge-open-clean.jpeg", alt: "Clean refrigerator interior after move-in or move-out cleaning" },
  ],
  "airbnb-cleaning": [
    { src: "/images/latest-work/toilet-lid-after.webp", alt: "Clean bathroom toilet ready for rental guests" },
    { src: "/images/latest-work/bathroom-sink-after.webp", alt: "Fresh bathroom sink and vanity after vacation rental cleaning" },
    { src: "/images/latest-work/window-sill-after.webp", alt: "Clean window sill detail in a guest-ready home" },
  ],
  "professional-building-cleaning": [
    { src: "/images/after-1.png", alt: "Clean kitchen or break area after professional cleaning" },
    { src: "/images/clean-sink.jpeg", alt: "Clean sink and counter detail after building cleaning" },
    { src: "/images/top-of-fridge-clean.jpeg", alt: "Clean high-dust surface after detail cleaning" },
  ],
  "home-organization": [
    { src: "/images/latest-work/closet-declutter-after.webp", alt: "Organized walk-in closet after decluttering and home organization" },
    { src: "/images/latest-work/kids-closet-after.webp", alt: "Kids closet after toys and everyday items were organized" },
    { src: "/images/lazy-susan-clean2.jpeg", alt: "Organized kitchen cabinet after a home organization reset" },
  ],
  "senior-home-help": [
    { src: "/images/livingroom-2.png", alt: "Comfortable clean living room after senior home cleaning" },
    { src: "/images/latest-work/toilet-lid-after.webp", alt: "Clean bathroom after dependable household help" },
    { src: "/images/latest-work/bathroom-sink-after.webp", alt: "Clean sink and vanity after light household cleaning" },
  ],
  "holiday-special-occasion-cleaning": [
    { src: "/images/after-3.png", alt: "Clean living area ready for holiday guests" },
    { src: "/images/stove-clean.jpeg", alt: "Clean kitchen stove after holiday or party cleanup" },
    { src: "/images/after-2.png", alt: "Fresh bathroom ready for guests and special occasions" },
  ],
  "tobacco-residue-wall-cleaning": [
    {
      src: "/images/tobacco-wall-cleaning/wall-after-cleaning.webp",
      alt: "Clean white wall after tobacco residue and nicotine-stain washing",
    },
    {
      src: "/images/tobacco-wall-cleaning/doorway-before.webp",
      alt: "Yellow tobacco residue visible above a doorway before cleaning",
    },
    {
      src: "/images/tobacco-wall-cleaning/doorway-after.webp",
      alt: "Doorway and trim after hands-on tobacco residue cleaning",
    },
  ],
};

export const localServiceDetails: Record<string, Record<string, string[]>> = {
  "hot-springs-ar": {
    "standard-cleaning": [
      "Recurring house cleaning in Hot Springs is built for homeowners who want dependable weekly, biweekly, or routine upkeep instead of waiting until the whole home needs another deep clean.",
      "Regular visits can focus on bathrooms, kitchens, floors, dusting, trash, and the main living areas that get used every day, with the exact priorities agreed on before service.",
      "For homes near Lake Hamilton, Lake Catherine, Oaklawn, Central Avenue, Rockwell, Piney, and nearby communities, recurring cleaning can help keep outdoor traffic, pollen, pet hair, and everyday mess from piling up between deeper resets.",
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
    "tobacco-residue-wall-cleaning": [
      "Tobacco residue wall cleaning in Hot Springs is useful for rental turnovers, inherited homes, investment properties, and houses being prepared for sale or repainting.",
      "We focus on the visible yellow film and sticky buildup left on washable walls, trim, doors, and other hard surfaces. Whole-home pricing is based on the affected rooms, ceiling height, surface condition, and whether ceilings, cabinets, or detailed trim are included.",
      "This is hands-on surface cleaning rather than full smoke-damage restoration. Homes with odor trapped in HVAC systems, carpet, insulation, or drywall may still need additional work from painters or restoration specialists.",
    ],
  },
  "glenwood-ar": {
    "tobacco-residue-wall-cleaning": [
      "In Glenwood and nearby lake communities, this service is a practical option for older homes, rentals, inherited properties, and houses that need wall washing before new paint.",
      "Our crew cleans visible tobacco film from washable walls, trim, doors, and hard surfaces using hands-on washing and repeated rinse water rather than specialized restoration equipment.",
      "Photos or a walkthrough help us quote the job honestly, especially when ceilings, cabinets, crown molding, or long-term heavy staining are involved.",
    ],
  },
  "arkadelphia-ar": {
    "tobacco-residue-wall-cleaning": [
      "Arkadelphia landlords, rental owners, sellers, and families may need tobacco residue cleaning after a tenant moves out or before an older home is painted and listed.",
      "The service focuses on visible residue across washable walls, doors, trim, and other hard surfaces. It can be combined with move-out cleaning when the rest of the empty property also needs attention.",
      "We quote each project from photos or a walkthrough because apartment layouts, older paint, ceiling height, and years of indoor smoking can change the labor considerably.",
    ],
  },
  "amity-ar": {
    "tobacco-residue-wall-cleaning": [
      "Around Amity, tobacco-stained wall cleaning can help with family homes, inherited houses, rentals, and properties being prepared for repairs or repainting.",
      "The work is done by hand with a three-person cleaning crew, careful surface testing, wall mops, cloths, buckets, and fresh rinse water as the residue is lifted away.",
      "We keep the quote practical, but heavy ceilings, cabinets, detailed trim, and long-term buildup are priced separately from a basic wall-only project.",
    ],
  },
  "malvern-ar": {
    "tobacco-residue-wall-cleaning": [
      "Malvern homeowners, landlords, buyers, and investors can use this service when visible tobacco film needs to be cleaned from a house before move-in, resale, rental, or painting.",
      "We clean suitable walls and hard surfaces manually and explain upfront when old paint, damaged finishes, or deeply embedded odor may require primer, repainting, or restoration work instead.",
      "A smaller area starts at $250, while full-home quotes are based on the number of rooms, severity, surfaces included, and how many cleaning passes are likely to be needed.",
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

  if (serviceSlug === "standard-cleaning") {
    return [
      {
        q: `Do you offer weekly or biweekly house cleaning in ${location.city}?`,
        a: `Yes. Lyn & Lili’s offers recurring weekly, biweekly, and routine house cleaning in ${location.city}, ${location.state} and nearby areas when scheduling allows.`,
      },
      {
        q: `What is included in recurring cleaning in ${location.city}?`,
        a: "Recurring cleaning usually focuses on bathrooms, kitchen wipe-downs, dusting, floors, trash, high-touch surfaces, and main living areas. The exact priorities are agreed on before service.",
      },
      {
        q: "Should I start with a deep clean before recurring service?",
        a: "If the home has heavy buildup or has not been professionally cleaned in a while, a deep clean is often the better first visit. Homes already in manageable condition can usually start with routine cleaning.",
      },
      {
        q: "Can I schedule cleaning every other week?",
        a: "Yes. Biweekly cleaning is a common option for households that want consistent help without booking every week.",
      },
    ];
  }

  if (serviceSlug === "tobacco-residue-wall-cleaning") {
    return [
      {
        q: `Do you clean nicotine-stained walls in ${location.city}?`,
        a: `Yes. We clean visible tobacco residue and yellow staining from suitable washable walls, trim, doors, and hard surfaces in ${location.city} and nearby areas.`,
      },
      {
        q: "How is tobacco residue wall cleaning priced?",
        a: "Smaller areas start at $250. Most 3-bedroom, 2-bath wall-cleaning projects fall around $900 to $1,500, with heavy buildup, ceilings, cabinets, and detailed trim quoted higher after photos or a walkthrough.",
      },
      {
        q: "Does the service guarantee all smoke odor will be gone?",
        a: "No. Surface washing removes visible residue and can improve the smell, but odor may remain in drywall, flooring, furniture, insulation, carpet, and HVAC systems.",
      },
      {
        q: "Can you clean the walls before a painter starts?",
        a: "Yes. Cleaning visible residue before stain-blocking primer and paint is one of the main reasons people book this service. Painting and primer are not included.",
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
      title: "Cleaning Services",
      description: "Local cleaning services for homes, rentals, and small businesses.",
    };
  }

  const cityState = `${location.city}, ${location.state}`;

  if (serviceSlug === "tobacco-residue-wall-cleaning") {
    return {
      title: `Nicotine-Stained Wall Cleaning in ${cityState}`,
      description: `Tobacco residue and smoke-stained wall cleaning in ${cityState} for rentals, inherited homes, property turnovers, and pre-paint surface washing.`,
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "airbnb-cleaning") {
    return {
      title: "Airbnb Cleaning in Hot Springs, AR | Vacation Rental Turnovers",
      description:
        "Airbnb cleaning, vacation rental cleaning, and rental turnover cleaning in Hot Springs, Arkansas, Lake Hamilton, Lake Catherine, and nearby areas.",
    };
  }

  if (locationSlug === "hot-springs-ar" && serviceSlug === "deep-cleaning") {
    return {
      title: "Deep Cleaning Services in Hot Springs, AR",
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

  if (serviceSlug === "standard-cleaning") {
    return {
      title: `Recurring House Cleaning in ${cityState}`,
      description: `Weekly, biweekly, and routine recurring house cleaning in ${cityState} for bathrooms, kitchens, floors, dusting, and regular home upkeep.`,
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
    title: `${service.title} in ${cityState}`,
    description: `${service.title} for homes, rentals, and properties in ${cityState}. Local cleaning help for ${location.pageFocus}.`,
  };
}
