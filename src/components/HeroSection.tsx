import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingMailto, primaryCtaLabel } from "@/lib/booking";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center px-6 py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute bottom-[12%] left-1/2 h-48 w-[min(90vw,28rem)] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl lg:hidden"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="hero-enter hero-enter-1 mb-6 text-sm font-medium uppercase tracking-widest text-primary">
            AI Strategy &amp; Implementation
          </p>
          <h1 className="hero-enter hero-enter-2 mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-gradient-primary">Cut operational costs.</span>
            <br />
            Ship faster with AI.
          </h1>
          <p className="hero-enter hero-enter-3 mx-auto mb-4 max-w-2xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
            Advisory and hands-on implementation for operations and engineering leaders at B2B SaaS
            companies ready to automate.
          </p>
          <p className="hero-enter hero-enter-4 mx-auto mb-10 max-w-2xl text-sm text-muted-foreground/70 lg:mx-0">
            For teams of 50–500 evaluating AI automation — not exploring it.
          </p>
          <div className="hero-enter hero-enter-5 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              asChild
              size="lg"
              className="btn-glow-primary text-base rounded-xl px-8 py-6 font-semibold"
            >
              <a href={bookingMailto}>{primaryCtaLabel}</a>
            </Button>
            <a
              href="#services"
              className="flex items-center gap-1.5 rounded-sm px-1 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See Use Cases
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[320px] lg:block" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]" />
          <div className="absolute right-0 top-[8%] h-56 w-56 rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/20 to-transparent shadow-[0_0_60px_-12px_hsl(var(--primary)/0.5)]" />
          <div className="absolute bottom-[6%] left-[6%] h-44 w-44 rounded-full border border-border bg-card/80 shadow-xl backdrop-blur-sm" />
          <div className="absolute left-[12%] top-[22%] flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-sm font-semibold text-primary">
            AI
          </div>
          <div className="absolute bottom-[18%] right-[8%] h-32 max-w-[200px] rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur-sm">
            <div className="mb-2 h-2 w-3/4 rounded-full bg-primary/40" />
            <div className="mb-1.5 h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-5/6 rounded-full bg-muted" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
