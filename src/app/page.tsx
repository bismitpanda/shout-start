import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StepsSection } from "@/components/steps-section";
import { StatsSection } from "@/components/stats-section";
import { TargetAudienceSection } from "@/components/target-audience-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <StepsSection />
      <StatsSection />
      <TargetAudienceSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
