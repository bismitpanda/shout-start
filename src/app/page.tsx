import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { ServicesOffered } from "@/components/services-offer-section";
import { StatsSection } from "@/components/stats-section";
import { AuthorsSection } from "@/components/authors-section";
import { FoundersSection } from "@/components/founders-section";
import { EBSection } from "@/components/eb-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { PublishingPartners } from "@/components/publishing-partners-section";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <ServicesOffered />
        <StatsSection />
        <PublishingPartners />
        <AuthorsSection />
        <FoundersSection />
        <EBSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
