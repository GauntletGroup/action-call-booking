import dashboardImg from "@/assets/dashboard-workflow.jpg";
import pipelineImg from "@/assets/data-pipeline.jpg";
import { CheckCircle } from "lucide-react";

const bullets = [
  "12+ years in applied AI/ML across fintech, logistics, and B2B SaaS",
  "60+ production deployments — workflow automation, NLP pipelines, predictive ops",
  "Trusted by Series A to Series D teams across EU and North America",
];

const TrustSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Who you'll work with
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Your lead consultant
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Profile */}
          <div>
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted mb-6">
              <img
                src="/consultant-portrait.svg"
                alt="Stylized portrait graphic for Action Call principal consultant"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-1">
              Principal consultant
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Founding advisor — Action Call
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          {/* System visuals */}
          <div className="space-y-4">
            <img
              src={dashboardImg}
              alt="AI-driven workflow automation dashboard showing operational KPIs and pipeline status"
              className="rounded-xl border border-border w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
            <img
              src={pipelineImg}
              alt="Automated data pipeline architecture with ETL nodes and system integrations"
              className="rounded-xl border border-border w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;