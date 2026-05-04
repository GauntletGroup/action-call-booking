import { Globe, Clock, Video, CheckCircle, XCircle } from "lucide-react";

const details = [
  { icon: Globe, label: "Location", value: "Remote-first, EU timezone (CET)" },
  { icon: Video, label: "Meetings", value: "Zoom, Slack, or your stack — on-site available for EU clients" },
  { icon: Clock, label: "Typical length", value: "2 weeks (audit) to 12 weeks (implementation)" },
];

const bringItems = [
  "A defined operational problem or bottleneck",
  "Access to relevant data or systems",
  "A decision-maker in the room for the first call",
];

const goodFit = [
  "B2B SaaS teams (50–500) with existing data infrastructure",
  "Operations or engineering leaders with budget and authority",
  "Companies already evaluating AI — not exploring the concept",
];

const notFit = [
  "Early-stage teams with no data pipeline or production users",
  "Looking for a chatbot demo or proof-of-concept only",
];

const LogisticsSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Logistics
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          How it works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {details.map((d) => (
            <div key={d.label} className="border border-border rounded-xl p-6 bg-card">
              <d.icon className="w-5 h-5 text-primary mb-3" />
              <p className="text-foreground font-medium text-sm mb-1">{d.label}</p>
              <p className="text-muted-foreground text-sm">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* What to bring */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              What to bring to the call
            </h3>
            <ul className="space-y-3">
              {bringItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Fit / not fit */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Is this for you?
            </h3>
            <ul className="space-y-3 mb-6">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-destructive/70">
                  <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;