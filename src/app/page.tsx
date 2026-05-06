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
import { faqs } from "@/data/faqs";
export default function Home() {
  return (
    <>
      <Header />
      <main>


<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "CleaningService",
        name: "Lyn & Lili’s Tidy House Home Services",
        url: "https://www.lynandlilistidyhouse.com/",
        telephone: "8702604536",
        areaServed: [
          "Amity, Arkansas",
          "Glenwood, Arkansas",
          "Arkadelphia, Arkansas",
          "Hot Springs, Arkansas",
          "Southwest Arkansas",
        ],
        serviceType: [
          "House Cleaning",
          "Deep Cleaning",
          "Move-Out Cleaning",
          "Move-In Cleaning",
          "Airbnb Turnover Cleaning",
          "Residential Cleaning",
          "Professional Building Cleaning",
        ],
        description:
          "Home cleaning, deep cleaning, move-in and move-out cleaning, Airbnb turnover cleaning, and small business cleaning services in Amity, Glenwood, Arkadelphia, Hot Springs, and nearby southwest Arkansas areas.",
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ]),
  }}
/>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <AddOnsSection />
        <GallerySection />
        <AboutPreview />
        <ServiceAreas />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}