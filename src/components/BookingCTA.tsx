import { Button } from "@/components/ui/button";

const BookingCTA = () => {
  return (
    <section id="book" className="px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Ready to talk?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          30 minutes. No pitch deck. We'll assess fit, scope the problem, and
          outline next steps — or tell you we're not the right partner.
        </p>
        <Button
          size="lg"
          className="text-base px-10 py-6 rounded-lg font-semibold"
          onClick={() => alert("Booking placeholder — connect your Calendly or Cal.com link here.")}
        >
          Book Your Discovery Call
        </Button>
        <p className="text-muted-foreground/50 text-xs mt-6">
          Typically responds within 24 hours. EU timezone.
        </p>
      </div>
    </section>
  );
};

export default BookingCTA;