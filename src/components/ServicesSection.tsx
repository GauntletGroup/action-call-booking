import { Button } from "@/components/ui/button";
import { BadgeCheck, Database, Radar, Workflow } from "lucide-react";
import { bookingAnchor, primaryCtaLabel } from "@/lib/booking";
import { cn } from "@/lib/utils";

const services = [
  {
    name: "Ops Automation Audit",
    outcome: "Identify the 3 highest-ROI automation targets in your current workflows",
    delivery: "Remote Advisory",
    length: "2-week sprint",
    slots: "3 slots this month",
    icon: Radar,
  },
  {
    name: "AI Workflow Deployment",
    outcome: "End-to-end build and deployment of automated pipelines into your stack",
    delivery: "Embedded Implementation",
    length: "4–8 week engagement",
    slots: "2 slots this month",
    icon: Workflow,
    flagship: true,
  },
  {
    name: "Data Pipeline Architecture",
    outcome: "Design and ship production-grade data infrastructure for ML workloads",
    delivery: "Embedded Implementation",
    length: "6–12 week engagement",
    slots: "1 slot this month",
    icon: Database,
  },
  {
    name: "AI Strategy Retainer",
    outcome: "Ongoing advisory for roadmap prioritisation, vendor evaluation, and build-vs-buy",
    delivery: "Remote Advisory",
    length: "Ongoing retainer",
    slots: "2 slots this month",
    icon: BadgeCheck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          What we deliver
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Scoped engagements with clear outcomes. No open-ended retainers unless
          you want one.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.name}
              className={cn(
                "card-energy flex flex-col rounded-xl border border-border bg-card p-6",
                s.flagship && "border-primary/35 bg-gradient-to-br from-primary/10 to-card",
              )}
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex items-start gap-3">
                  <span
                    className={[
                      "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background",
                      s.flagship ? "border-primary/30 bg-primary/10" : "",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                    {s.flagship ? (
                      <p className="text-xs text-muted-foreground">Most popular for teams ready to ship</p>
                    ) : null}
                  </div>
                </div>
                <span className="text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {s.slots}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6 flex-1">{s.outcome}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-5">
                <span className="border border-border rounded-md px-2.5 py-1">
                  {s.delivery}
                </span>
                <span className="border border-border rounded-md px-2.5 py-1">
                  {s.length}
                </span>
              </div>
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={bookingAnchor}>{primaryCtaLabel}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;