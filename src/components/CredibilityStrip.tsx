import { Badge } from "@/components/ui/badge";

const CredibilityStrip = () => {
  return (
    <section className="px-6 pb-10" aria-labelledby="credibility-heading">
      <h2 id="credibility-heading" className="sr-only">
        At a glance
      </h2>
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">12+ years applied AI</Badge>
            <Badge variant="secondary">60+ production deployments</Badge>
            <Badge variant="secondary">EU &amp; North America teams</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Built for ops &amp; engineering leaders who need measurable outcomes, not prototypes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;
