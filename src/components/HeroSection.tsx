import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-6">
          AI Strategy &amp; Implementation
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
          Cut operational costs.
          <br />
          Ship faster with AI.
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-4">
          Advisory and hands-on implementation for operations and engineering
          leaders at B2B SaaS companies ready to automate.
        </p>
        <p className="text-muted-foreground/70 text-sm mb-10">
          For teams of 50–500 evaluating AI automation — not exploring it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="text-base px-8 py-6 rounded-lg font-semibold"
          >
            <a href="#book">Book a Discovery Call</a>
          </Button>
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1.5"
          >
            See Use Cases
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;