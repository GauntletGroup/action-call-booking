import { Button } from "@/components/ui/button";
import { bookingMailto, primaryCtaLabel } from "@/lib/booking";

const BookingCTA = () => {
  return (
    <section id="book" className="scroll-mt-20 px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Ready to talk?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          30 minutes. No pitch deck. We'll assess fit, scope the problem, and
          outline next steps — or tell you we're not the right partner.
        </p>
        <Button asChild size="lg" className="text-base px-10 py-6 rounded-lg font-semibold">
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