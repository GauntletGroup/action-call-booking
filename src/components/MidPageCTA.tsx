import { Button } from "@/components/ui/button";
import { bookingMailto, primaryCtaLabel } from "@/lib/booking";

const MidPageCTA = () => {
  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 text-center sm:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
          Ready for a fit check?
        </p>
        <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
          Bring the problem. We will help you scope the next move.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground sm:text-base">
          A short discovery call is enough to identify whether an audit, implementation sprint,
          or internal handoff makes the most sense.
        </p>
        <Button asChild size="lg" className="rounded-lg px-8 py-6 text-base font-semibold">
          <a href={bookingMailto}>{primaryCtaLabel}</a>
        </Button>
      </div>
    </section>
  );
};

export default MidPageCTA;
