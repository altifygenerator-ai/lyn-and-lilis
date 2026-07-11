import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import { locations } from "@/data/locations";

const location = locations.find((item) => item.slug === "hot-springs-ar");

export const metadata: Metadata = {
  title: "Cleaning & Home Services in Hot Springs, AR",
  description:
    "House cleaning, home organization, senior household help, holiday and post-party cleaning, Airbnb turnovers, and small office cleaning in Hot Springs and nearby lake areas.",
  alternates: {
    canonical: "/house-cleaning-hot-springs-ar",
  },
};

export default function HotSpringsCleaningPage() {
  if (!location) notFound();

  return <LocationLandingPage location={location} />;
}