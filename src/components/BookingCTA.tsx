import { Button } from "@/components/ui/button";
import { bookingMailto, primaryCtaLabel } from "@/lib/booking";

const BookingCTA = () => {
  return (
    <section id="book" className="scroll-mt-20 px-6 py-32">
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-b from-card/90 to-card/40 px-6 py-12 text-center shadow-[0_24px_70px_-30px_hsl(var(--primary)/0.25)] backdrop-blur-sm sm:px-10">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Ready to talk?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-muted-foreground">
          30 minutes. No pitch deck. We'll assess fit, scope the problem, and
          outline next steps — or tell you we're not the right partner.
        </p>
        <Button
          asChild
          size="lg"
          className="btn-glow-primary rounded-xl px-10 py-6 text-base font-semibold"
        >
          <a href={bookingMailto}>{primaryCtaLabel}</a>
        </Button>
        <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
          After you reach out, you will get a reply within 24 hours with next-step questions and
          a few time options for a 30-minute call.
        </p>
        <p className="text-muted-foreground/50 text-xs mt-3">
          Typical calls run 30 minutes. EU timezone.
        </p>
      </div>
    </section>
  );
};

export default BookingCTA;