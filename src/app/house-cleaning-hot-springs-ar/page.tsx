import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "hot-springs-ar");

export const metadata: Metadata = {
  title: "House Cleaning Services in Hot Springs, AR | Lyn & Lili’s",
  description:
    "House cleaning, deep cleaning, move-out cleaning, Airbnb turnover cleaning, vacation rental cleaning, and small office cleaning in Hot Springs, Lake Hamilton, Lake Catherine, and nearby Arkansas areas.",
  alternates: {
    canonical: "/house-cleaning-hot-springs-ar",
  },
};

export default function HotSpringsCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}