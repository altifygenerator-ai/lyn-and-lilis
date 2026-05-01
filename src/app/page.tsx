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
export default function Home() {
  return (
    <>
      <Header />
      <main>
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