import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import AddOnsSection from "@/components/AddOnsSection";
import GallerySection from "@/components/GallerySection";
import ServiceAreas from "@/components/ServiceAreas";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ReviewsSection from "@/components/ReviewsSection";
import SeniorPricingSection from "@/components/SeniorPricingSection";
import TobaccoWallCleaningFeature from "@/components/TobaccoWallCleaningFeature";
import BookingPaymentSection from "@/components/BookingPaymentSection";
import SeoJsonLd from "@/components/SeoJsonLd";
import { localBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <SeoJsonLd data={localBusinessSchema()} />

        <Hero />
        <TrustBar />
        <ServicesSection />
        <TobaccoWallCleaningFeature />
        <AddOnsSection />
        <SeniorPricingSection />
        <GallerySection />
        <BeforeAfterSection />
        <ReviewsSection />
        <AboutPreview />
        <ServiceAreas />
        <BookingPaymentSection />
        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}
