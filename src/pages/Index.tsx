import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import MidPageCTA from "@/components/MidPageCTA";
import LogisticsSection from "@/components/LogisticsSection";
import BookingCTA from "@/components/BookingCTA";

const Index = () => (
  <>
    <SiteHeader />
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <CredibilityStrip />
      <ServicesSection />
      <TrustSection />
      <SocialProofSection />
      <MidPageCTA />
      <LogisticsSection />
      <BookingCTA />
      <footer className="border-t border-border px-6 py-8 text-xs text-muted-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} Action Call. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
              Email
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </main>
  </>
);

export default Index;
