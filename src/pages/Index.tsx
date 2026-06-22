import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import CredibilityStrip from "@/components/CredibilityStrip";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import SocialProofSection from "@/components/SocialProofSection";
import MidPageCTA from "@/components/MidPageCTA";
import LogisticsSection from "@/components/LogisticsSection";
import RoadmapSection from "@/components/RoadmapSection";
import RevealBelowFold from "@/components/RevealBelowFold";
import { bookingEmail } from "@/lib/booking";

const Index = () => (
  <>
    <SiteHeader />
    <main
      id="main-content"
      className="relative isolate min-h-screen overflow-x-hidden bg-transparent text-foreground"
    >
      <div
        className="app-atmosphere app-atmosphere--motion pointer-events-none absolute inset-0 -z-10 min-h-full"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <HeroSection />
        <CredibilityStrip />
        <RevealBelowFold>
          <ServicesSection />
        </RevealBelowFold>
        <RevealBelowFold>
          <TrustSection />
        </RevealBelowFold>
        <RevealBelowFold>
          <SocialProofSection />
        </RevealBelowFold>
        <RevealBelowFold>
          <MidPageCTA />
        </RevealBelowFold>
        <RevealBelowFold>
          <LogisticsSection />
        </RevealBelowFold>
        <RevealBelowFold>
          <RoadmapSection />
        </RevealBelowFold>
        <footer className="border-t border-border px-6 py-8 text-xs text-muted-foreground">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>© {new Date().getFullYear()} Action Call. All rights reserved.</p>
            <nav className="flex items-center justify-center gap-4 sm:justify-end" aria-label="Footer">
              <a
                href={`mailto:${bookingEmail}`}
                className="rounded-sm px-1 py-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm px-1 py-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                LinkedIn
              </a>
              <a
                href="/privacy"
                className="rounded-sm px-1 py-0.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Privacy
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  </>
);

export default Index;
