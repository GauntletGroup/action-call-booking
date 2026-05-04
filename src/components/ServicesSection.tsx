import { Button } from "@/components/ui/button";
import { Clock, Globe, Zap } from "lucide-react";

const services = [
  {
    name: "Ops Automation Audit",
    outcome: "Identify the 3 highest-ROI automation targets in your current workflows",
    delivery: "Remote Advisory",
    length: "2-week sprint",
    slots: "3 slots this month",
    icon: Zap,
  },
  {
    name: "AI Workflow Deployment",
    outcome: "End-to-end build and deployment of automated pipelines into your stack",
    delivery: "Embedded Implementation",
    length: "4–8 week engagement",
    slots: "2 slots this month",
    icon: Globe,
  },
  {
    name: "Data Pipeline Architecture",
    outcome: "Design and ship production-grade data infrastructure for ML workloads",
    delivery: "Embedded Implementation",
    length: "6–12 week engagement",
    slots: "1 slot this month",
    icon: Clock,
  },
  {
    name: "AI Strategy Retainer",
    outcome: "Ongoing advisory for roadmap prioritisation, vendor evaluation, and build-vs-buy",
    delivery: "Remote Advisory",
    length: "Ongoing retainer",
    slots: "2 slots this month",
    icon: Zap,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 py-24">
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
              className="border border-border rounded-xl p-6 bg-card hover:border-primary/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
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
                <a href="#book">Book Call</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;