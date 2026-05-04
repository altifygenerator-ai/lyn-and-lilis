import {
  FaBroom,
  FaSprayCanSparkles,
  FaHouseChimney,
  FaKey,
  FaBuilding,
} from "react-icons/fa6";

export const services = [
  {
    slug: "standard-cleaning",
    title: "Standard Cleaning",
    price: "Starting around $100–$140",
    icon: FaBroom,

    description:
      "Routine cleaning to keep your home fresh, tidy, and easier to manage.",

    metaTitle: "Standard House Cleaning Services | Lyn & Lili’s",
    metaDescription:
      "Routine house cleaning for homes in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",

    heroText:
      "Routine house cleaning for people who want their home to feel fresh without trying to keep up with everything alone.",

    pageFocus: "regular home upkeep, kitchens, bathrooms, floors, and dusting",

    intro:
      "Standard cleaning is made for regular upkeep. It is a good fit for busy families, working parents, older homeowners, and anyone who wants the house to feel caught up again without needing a full deep clean every time.",

    uniqueSectionTitle: "Regular cleaning that keeps the house manageable",
    uniqueSectionBody:
      "Most standard cleaning jobs focus on the areas people use every day: kitchens, bathrooms, floors, dusting, trash, and main living spaces. It is not meant to replace a full deep clean, but it helps keep the home from getting overwhelming between busier seasons.",

    bestFor: [
      "Weekly or biweekly cleaning",
      "Busy family homes",
      "Light maintenance cleaning",
      "Keeping kitchens, bathrooms, and floors under control",
    ],

    includes: [
      "Dusting",
      "Kitchen wipe-down",
      "Bathrooms",
      "Floors",
      "Trash removal",
      "Main living areas",
    ],

    details: [
      "Standard cleaning works best when a home is already in decent shape but needs regular help staying clean.",
      "This service is usually focused on visible areas, commonly used rooms, and routine mess rather than heavy buildup.",
      "It is a good option for homeowners who want help staying consistent without paying for a deep clean every visit.",
    ],

    notUsuallyIncluded: [
      "Heavy buildup removal",
      "Inside appliances",
      "Inside cabinets",
      "Post-construction cleanup",
      "Major organization",
    ],

    relatedLocationAnchors: [
      { text: "standard cleaning in Amity", href: "/locations/amity-ar" },
      { text: "house cleaning in Glenwood", href: "/locations/glenwood-ar" },
      { text: "routine cleaning in Arkadelphia", href: "/locations/arkadelphia-ar" },
    ],

    relatedServiceSlugs: ["deep-cleaning", "move-in-move-out-cleaning"],

    localKeywords: [
      "standard house cleaning",
      "routine cleaning service",
      "weekly house cleaning",
      "biweekly house cleaning",
    ],

    layoutOrder: ["unique", "includes", "details", "bestFor", "links", "faq"],

    faq: [
      {
        q: "What is included in standard cleaning?",
        a: "Standard cleaning usually includes bathrooms, kitchen wipe-downs, dusting, floors, trash removal, and main living areas.",
      },
      {
        q: "How often should I schedule standard cleaning?",
        a: "Most homes do well with weekly or biweekly cleaning, but occasional cleaning can also help when things start getting behind.",
      },
      {
        q: "Is standard cleaning the same as deep cleaning?",
        a: "No. Standard cleaning is regular upkeep. Deep cleaning is more detailed and focuses on buildup, baseboards, detailed bathrooms, and areas that need extra time.",
      },
    ],
  },

  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    price: "Starting around $220–$350",
    icon: FaSprayCanSparkles,

    description:
      "A more detailed reset for homes that need extra time and attention.",

    metaTitle: "Deep Cleaning Services | Lyn & Lili’s",
    metaDescription:
      "Detailed deep cleaning for homes in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",

    heroText:
      "A deeper reset for homes that need more than a quick wipe-down.",

    pageFocus: "buildup, baseboards, detailed bathrooms, kitchens, and reset cleans",

    intro:
      "Deep cleaning is for homes that need extra time and detail. It is often used before starting regular cleaning, after a busy season, before guests arrive, or when the house has simply gotten behind.",

    uniqueSectionTitle: "A stronger reset when regular cleaning is not enough",
    uniqueSectionBody:
      "Deep cleaning focuses on areas that usually need more time than a standard cleaning allows. That can include buildup in bathrooms, kitchen detail, baseboards, floors, corners, and spots that get skipped during normal upkeep.",

    bestFor: [
      "First-time cleanings",
      "Seasonal resets",
      "Homes that need extra detail",
      "Bathrooms, kitchens, baseboards, and buildup",
    ],

    includes: [
      "Baseboards",
      "Detailed bathrooms",
      "Kitchen detail",
      "Build-up removal",
      "Floors",
      "High-touch surfaces",
    ],

    details: [
      "Deep cleaning is usually the better choice when a home has not been professionally cleaned in a while.",
      "It is also a smart starting point before moving into weekly or biweekly cleaning because it gets the house back to a more manageable level.",
      "Pricing depends heavily on the condition of the home because deep cleaning can vary more than regular upkeep.",
    ],

    notUsuallyIncluded: [
      "Hoarding cleanup",
      "Mold remediation",
      "Biohazard cleanup",
      "Large junk removal",
      "Exterior pressure washing",
    ],

    relatedLocationAnchors: [
      { text: "deep cleaning in Amity", href: "/locations/amity-ar" },
      { text: "deep cleaning in Glenwood", href: "/locations/glenwood-ar" },
      { text: "deep cleaning in Hot Springs", href: "/locations/hot-springs-ar" },
    ],

    relatedServiceSlugs: ["standard-cleaning", "move-in-move-out-cleaning"],

    localKeywords: [
      "deep cleaning service",
      "home deep cleaning",
      "one time deep clean",
      "detailed house cleaning",
    ],

    layoutOrder: ["unique", "details", "includes", "bestFor", "faq", "links"],

    faq: [
      {
        q: "When should I book a deep cleaning?",
        a: "Deep cleaning is best when the home needs more than routine upkeep, such as before guests, after a busy season, before recurring cleaning, or when buildup has collected.",
      },
      {
        q: "Does deep cleaning cost more than standard cleaning?",
        a: "Yes. Deep cleaning usually costs more because it takes more time and detail than a routine cleaning.",
      },
      {
        q: "Can I book deep cleaning one time?",
        a: "Yes. Many customers book a one-time deep clean, then decide later if they want ongoing cleaning.",
      },
    ],
  },

  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    price: "Starting around $250–$450",
    icon: FaHouseChimney,

    description:
      "Detailed empty-home cleaning for renters, landlords, sellers, and new homeowners.",

    metaTitle: "Move-In & Move-Out Cleaning Services | Lyn & Lili’s",
    metaDescription:
      "Move-in and move-out cleaning for renters, landlords, sellers, and homeowners in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",

    heroText:
      "Empty-home cleaning for moving, renting, selling, or getting a place ready for the next person.",

    pageFocus: "empty homes, rentals, landlords, sellers, and tenant turnovers",

    intro:
      "Move-in and move-out cleaning helps get a home ready before someone arrives or after someone leaves. It is a good fit for renters, landlords, sellers, property owners, and new homeowners who want the space cleaned before the next step.",

    uniqueSectionTitle: "Cleaning for empty homes, rentals, and next tenants",
    uniqueSectionBody:
      "Move-out cleaning is different from regular house cleaning because the home is usually empty or mostly empty. That makes it easier to reach cabinets, appliances, floors, bathrooms, and surfaces that may have been hidden by furniture or everyday use.",

    bestFor: [
      "Renters moving out",
      "Landlords between tenants",
      "Homes being listed for sale",
      "New homeowners before moving in",
    ],

    includes: [
      "Cabinets",
      "Appliances",
      "Bathrooms",
      "Floors",
      "Surfaces",
      "Trash removal",
    ],

    details: [
      "Move-out cleaning is commonly used by landlords and renters when a property needs to be cleaned before a new tenant moves in.",
      "Move-in cleaning helps new homeowners or renters feel better about bringing their things into a fresh space.",
      "This service usually takes more time than a standard clean because empty homes often show dust, buildup, and missed areas more clearly.",
    ],

    notUsuallyIncluded: [
      "Carpet shampooing",
      "Painting or repairs",
      "Large junk hauling",
      "Pest cleanup",
      "Exterior cleanup",
    ],

    relatedLocationAnchors: [
      { text: "move-out cleaning in Amity", href: "/locations/amity-ar" },
      { text: "move-out cleaning in Arkadelphia", href: "/locations/arkadelphia-ar" },
      { text: "move-in cleaning in Hot Springs", href: "/locations/hot-springs-ar" },
    ],

    relatedServiceSlugs: ["deep-cleaning", "standard-cleaning"],

    localKeywords: [
      "move out cleaning",
      "move in cleaning",
      "rental turnover cleaning",
      "empty house cleaning",
    ],

    layoutOrder: ["unique", "bestFor", "details", "includes", "links", "faq"],

    faq: [
      {
        q: "Do you clean empty homes after someone moves out?",
        a: "Yes. We clean empty homes, apartments, and rentals after move-out or before the next person moves in.",
      },
      {
        q: "Is move-out cleaning more detailed than standard cleaning?",
        a: "Usually, yes. Move-out cleaning often includes more detailed work because cabinets, appliances, floors, and hidden areas are easier to access.",
      },
      {
        q: "Do you clean for landlords and rental owners?",
        a: "Yes. We work with landlords, renters, sellers, and property owners who need a space cleaned between occupants.",
      },
    ],
  },

  {
    slug: "airbnb-cleaning",
    title: "Airbnb & Rental Turnovers",
    price: "Custom quote",
    icon: FaKey,

    description:
      "Reliable turnover cleaning between guests for short-term rentals and vacation stays.",

    metaTitle: "Airbnb Cleaning & Rental Turnovers | Lyn & Lili’s",
    metaDescription:
      "Airbnb cleaning and rental turnover cleaning for short-term rentals in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",

    heroText:
      "Reliable rental turnover cleaning for hosts who need the place guest-ready.",

    pageFocus: "Airbnb hosts, vacation rentals, guest resets, and short-term stays",

    intro:
      "Airbnb and rental turnover cleaning is built around consistency. Hosts need the property cleaned between stays, reset for the next guest, and handled on a schedule that works with check-in and check-out times.",

    uniqueSectionTitle: "Guest-ready cleaning for short-term rentals",
    uniqueSectionBody:
      "Rental turnover cleaning is not just about making a place look clean. It is about helping the next guest walk into a space that feels fresh, ready, and cared for. That usually means bathrooms, kitchens, floors, trash, linens if provided, basic restock, and a final check of the main guest areas.",

    bestFor: [
      "Airbnb hosts",
      "Vacation rentals",
      "Short-term stays",
      "Rental resets between guests",
    ],

    includes: [
      "Guest reset",
      "Trash removal",
      "Basic restock",
      "Bathrooms",
      "Kitchen reset",
      "Linen reset if provided",
    ],

    details: [
      "Airbnb cleaning works best when expectations are clear before the first turnover, including what gets cleaned, what gets restocked, and what needs to be checked.",
      "This service is especially useful around Hot Springs, Glenwood, lake-area properties, and short-term rentals that need a dependable cleaning process.",
      "Turnover pricing depends on property size, guest use, timing, laundry needs, and how detailed the reset needs to be.",
    ],

    notUsuallyIncluded: [
      "Guest messaging",
      "Major damage repair",
      "Large restock purchasing",
      "Carpet shampooing",
      "Emergency maintenance",
    ],

    relatedLocationAnchors: [
      { text: "Airbnb cleaning in Hot Springs", href: "/locations/hot-springs-ar" },
      { text: "Airbnb cleaning in Glenwood", href: "/locations/glenwood-ar" },
      { text: "rental cleaning near Amity", href: "/locations/amity-ar" },
    ],

    relatedServiceSlugs: ["deep-cleaning", "move-in-move-out-cleaning"],

    localKeywords: [
      "Airbnb cleaning",
      "rental turnover cleaning",
      "vacation rental cleaning",
      "short term rental cleaning",
    ],

    layoutOrder: ["unique", "details", "includes", "bestFor", "faq", "links"],

    faq: [
      {
        q: "Do you clean Airbnbs between guests?",
        a: "Yes. We clean short-term rentals between guest stays and help reset the space for the next booking.",
      },
      {
        q: "Can you restock supplies?",
        a: "We can do basic restock if supplies are provided and expectations are agreed on ahead of time.",
      },
      {
        q: "Do you handle linens?",
        a: "We can reset linens if they are provided and the process is clear. Laundry details can be discussed during quoting.",
      },
    ],
  },

  {
    slug: "professional-building-cleaning",
    title: "Professional Building Cleaning",
    price: "Custom quote",
    icon: FaBuilding,

    description:
      "Cleaning for offices, small businesses, common areas, and professional spaces.",

    metaTitle: "Office & Professional Building Cleaning | Lyn & Lili’s",
    metaDescription:
      "Office cleaning and professional building cleaning for small businesses in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",

    heroText:
      "Simple, dependable cleaning for offices, small businesses, and professional spaces.",

    pageFocus: "small offices, waiting areas, bathrooms, breakrooms, and common spaces",

    intro:
      "Professional building cleaning is for small offices, shops, workspaces, and local businesses that need to stay clean for customers, staff, and daily use without hiring a full-time cleaner.",

    uniqueSectionTitle: "Cleaning for small offices and customer-facing spaces",
    uniqueSectionBody:
      "A clean business space helps people feel more comfortable walking in. We focus on practical cleaning for offices, waiting areas, bathrooms, breakrooms, floors, trash, and common areas so the building feels cared for without overcomplicating the service.",

    bestFor: [
      "Small offices",
      "Professional buildings",
      "Waiting areas",
      "Bathrooms and breakrooms",
    ],

    includes: [
      "Offices",
      "Bathrooms",
      "Breakrooms",
      "Trash",
      "Common areas",
      "Floors",
    ],

    details: [
      "This service works well for small local businesses that need regular or occasional cleaning.",
      "Common focus areas include bathrooms, floors, trash, desks, counters, waiting areas, and employee spaces.",
      "Professional building cleaning can be quoted based on size, frequency, traffic, and what areas need attention.",
    ],

    notUsuallyIncluded: [
      "Industrial cleaning",
      "Medical-grade sanitation",
      "Large warehouse cleaning",
      "Biohazard cleanup",
      "Exterior maintenance",
    ],

    relatedLocationAnchors: [
      { text: "office cleaning in Arkadelphia", href: "/locations/arkadelphia-ar" },
      { text: "building cleaning in Hot Springs", href: "/locations/hot-springs-ar" },
      { text: "small business cleaning in Glenwood", href: "/locations/glenwood-ar" },
    ],

    relatedServiceSlugs: ["standard-cleaning", "deep-cleaning"],

    localKeywords: [
      "office cleaning",
      "professional building cleaning",
      "small business cleaning",
      "commercial cleaning for small offices",
    ],

    layoutOrder: ["unique", "includes", "details", "bestFor", "links", "faq"],

    faq: [
      {
        q: "Do you clean small offices?",
        a: "Yes. We clean small offices, professional spaces, waiting areas, bathrooms, breakrooms, and common areas.",
      },
      {
        q: "Can building cleaning be scheduled regularly?",
        a: "Yes. Depending on the space, cleaning can be one-time, occasional, weekly, or on another agreed schedule.",
      },
      {
        q: "Do you offer commercial cleaning?",
        a: "We focus on smaller professional buildings, offices, and local business spaces rather than large industrial cleaning.",
      },
    ],
  },
];

export type Service = (typeof services)[number];