import { Quote } from "lucide-react";
import remoteCollabImg from "@/assets/remote-collab.jpg";

const testimonials = [
  {
    quote: "Reduced our ops processing time by 40% in the first sprint. No fluff, just results.",
    name: "James K.",
    title: "VP Operations",
    company: "Series B FinTech, 120 employees",
  },
  {
    quote: "First external consultant who actually shipped production code alongside our team.",
    name: "Priya M.",
    title: "Head of Engineering",
    company: "B2B SaaS, 200 employees",
  },
  {
    quote: "Helped us avoid a £300k vendor lock-in by building the right pipeline in-house.",
    name: "Tom R.",
    title: "CTO",
    company: "Logistics Platform, 85 employees",
  },
];

const SocialProofSection = () => {
  return (
    <section id="results" className="scroll-mt-20 px-6 py-24 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
          Results
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12">
          What clients say
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-border rounded-xl p-6 bg-card"
            >
              <Quote className="w-5 h-5 text-primary/40 mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="text-foreground text-sm font-medium">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.title}</p>
                <p className="text-muted-foreground/60 text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
        <img
          src={remoteCollabImg}
          alt="Remote team collaboration workspace with async tools and project management"
          className="rounded-xl border border-border w-full max-w-3xl mx-auto"
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>
    </section>
  );
};

export default SocialProofSection;