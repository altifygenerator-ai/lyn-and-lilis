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
      "Routine cleaning to keep your home fresh, tidy, and easy to manage.",
    metaTitle: "Standard Cleaning Services | Lyn & Lili’s",
    metaDescription:
      "Standard home cleaning services for Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",
    heroText:
      "Routine home cleaning for people who want their house to feel fresh without trying to keep up with everything alone.",
    intro:
      "Our standard cleaning service is made for regular upkeep. It is a good fit for busy families, older homeowners, working parents, and anyone who just wants the house to feel caught up again.",
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
      "Detailed deep cleaning services for homes in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby areas.",
    heroText:
      "A deeper reset for homes that need more than a quick wipe-down.",
    intro:
      "Deep cleaning is for spaces that need extra time and attention. It is a good starting point before recurring cleaning, after a busy season, or when the house has simply gotten behind.",
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
    ],
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    price: "Starting around $250–$450",
    icon: FaHouseChimney,
    description:
      "Detailed empty-home cleaning for renters, landlords, sellers, and new homeowners.",
    metaTitle: "Move-In & Move-Out Cleaning | Lyn & Lili’s",
    metaDescription:
      "Move-in and move-out cleaning for renters, landlords, sellers, and homeowners around Amity, Glenwood, Arkadelphia, and Hot Springs.",
    heroText:
      "Empty-home cleaning for moving, renting, selling, or getting a place ready for the next person.",
    intro:
      "Moving is already stressful enough. Our move-in and move-out cleaning helps get the home feeling fresh, presentable, and ready for whatever comes next.",
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
      "Airbnb and short-term rental turnover cleaning around Amity, Glenwood, Arkadelphia, Hot Springs, and nearby Arkansas areas.",
    heroText:
      "Reliable rental turnover cleaning for hosts who need the place guest-ready.",
    intro:
      "Short-term rentals need consistency. Our Airbnb and rental turnover cleaning helps hosts keep their property clean, stocked, and ready for the next guest.",
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
      "Linen reset if provided",
    ],
  },
  {
    slug: "professional-building-cleaning",
    title: "Professional Building Cleaning",
    price: "Custom quote",
    icon: FaBuilding,
    description:
      "Cleaning for offices, small businesses, common areas, and professional spaces.",
    metaTitle: "Professional Building Cleaning | Lyn & Lili’s",
    metaDescription:
      "Professional building and small office cleaning services in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby areas.",
    heroText:
      "Simple, dependable cleaning for offices, small businesses, and professional spaces.",
    intro:
      "Your building does not need to be fancy to need regular care. We help small offices and professional spaces stay clean, comfortable, and ready for customers or staff.",
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
    ],
  },
];

export type Service = (typeof services)[number];