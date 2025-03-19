import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { ServicesOffered } from "@/components/services-offer-section";
import { MetricsSection } from "@/components/metrics-section";
import { AuthorsSection } from "@/components/authors-section";
import { FoundersSection } from "@/components/founders-section";
import { TalentVisaSection } from "@/components/talent-visa-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { PublishingPartners } from "@/components/publishing-partners-section";

export default function Page() {
  return (
    <main className="flex-grow bg-white">
      <HeroSection />
      <FeatureCards />
      <ServicesOffered />
      <MetricsSection />
      <PublishingPartners />
      <AuthorsSection />
      <FoundersSection />
      <TalentVisaSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
