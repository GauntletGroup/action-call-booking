import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import LogisticsSection from "@/components/LogisticsSection";
import BookingCTA from "@/components/BookingCTA";

const Index = () => (
  <>
    <SiteHeader />
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <HeroSection />
    <ServicesSection />
    <TrustSection />
    <SocialProofSection />
    <LogisticsSection />
    <BookingCTA />
    <footer className="border-t border-border py-8 px-6 text-center text-muted-foreground text-xs">
      © {new Date().getFullYear()} Action Call. All rights reserved.
    </footer>
    </main>
  </>
);

export default Index;
