import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users } from "lucide-react";

const CredibilityStrip = () => {
  return (
    <section className="px-6 pb-10" aria-labelledby="credibility-heading">
      <h2 id="credibility-heading" className="sr-only">
        At a glance
      </h2>
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-gradient-to-r from-primary/50 via-primary/20 to-violet-500/40 p-px shadow-[0_16px_50px_-28px_hsl(var(--primary)/0.35)]">
          <div className="flex flex-col gap-5 rounded-[calc(1rem-1px)] bg-card/95 px-5 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant="secondary"
                className="gap-1 border border-primary/20 bg-primary/10 py-1 pl-2 pr-2.5 text-foreground hover:bg-primary/15"
              >
                <TrendingUp className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                12+ years applied AI
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 border border-primary/20 bg-primary/10 py-1 pl-2 pr-2.5 text-foreground hover:bg-primary/15"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                60+ production deployments
              </Badge>
              <Badge
                variant="secondary"
                className="gap-1 border border-primary/20 bg-primary/10 py-1 pl-2 pr-2.5 text-foreground hover:bg-primary/15"
              >
                <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                EU &amp; North America teams
              </Badge>
            </div>
            <p className="max-w-md text-sm text-muted-foreground sm:text-right">
              Built for ops &amp; engineering leaders who need measurable outcomes, not prototypes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
