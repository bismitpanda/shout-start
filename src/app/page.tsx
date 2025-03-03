import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { PublicationsOffer } from "@/components/publications-offer";
import { StatsSection } from "@/components/stats-section";
import { RecentPublications } from "@/components/recent-publications";
import { AuthorsSection } from "@/components/authors-section";
import { MarketersSection } from "@/components/marketers-section";
import { EBSection } from "@/components/eb-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureCards />
        <PublicationsOffer />
        <StatsSection />
        <RecentPublications />
        <AuthorsSection />
        <MarketersSection />
        <EBSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
