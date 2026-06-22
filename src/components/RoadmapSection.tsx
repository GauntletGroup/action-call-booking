import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { bookingEmail, primaryCtaLabel, roadmapSubmitLabel } from "@/lib/booking";
import {
  contactFormSchema,
  emptyRoadmapAnswers,
  isRoadmapAnswersComplete,
  roadmapQuestions,
  type ContactFormValues,
  type RoadmapAnswers,
} from "@/lib/lead-schema";
import { submitLead } from "@/lib/submit-lead";
import { cn } from "@/lib/utils";

const RoadmapSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<RoadmapAnswers>(emptyRoadmapAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gdprConsent: false,
    },
  });

  const totalSteps = roadmapQuestions.length + 1;
  const isContactStep = step === roadmapQuestions.length;
  const currentQuestion = roadmapQuestions[step];

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : "";
  const canAdvanceQuestion = Boolean(currentAnswer);

  const handleNext = () => {
    if (isContactStep) return;
    if (!canAdvanceQuestion) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 0 || isSuccess) return;
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (values: ContactFormValues) => {
    if (!isRoadmapAnswersComplete(answers)) {
      toast.error("Please complete all questions before submitting.");
      setStep(0);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    const honeypot =
      (document.getElementById("company_website") as HTMLInputElement | null)?.value ?? "";

    const result = await submitLead(values, answers, honeypot);

    setIsSubmitting(false);

    if (result.ok) {
      setIsSuccess(true);
      setStatusMessage(
        "Thank you — your responses are in. We'll reply within 24 hours with next steps and time options for a discovery call.",
      );
      toast.success("Request submitted");
      return;
    }

    setStatusMessage(result.error);
    toast.error(result.error);
  };

  if (isSuccess) {
    return (
      <section id="book" className="scroll-mt-20 px-6 py-32">
        <div
          id="roadmap"
          className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-b from-card/90 to-card/40 px-6 py-12 text-center shadow-[0_24px_70px_-30px_hsl(var(--primary)/0.25)] backdrop-blur-sm sm:px-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            You&apos;re all set
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Thank you</h2>
          <p className="mx-auto mb-6 max-w-lg text-muted-foreground" aria-live="polite">
            {statusMessage}
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Typical calls run 30 minutes. EU timezone.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="scroll-mt-20 px-6 py-32">
      <div
        id="roadmap"
        className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-to-b from-card/90 to-card/40 px-6 py-12 shadow-[0_24px_70px_-30px_hsl(var(--primary)/0.25)] backdrop-blur-sm sm:px-10"
      >
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            {isContactStep ? "Almost there" : "Quick fit check"}
          </p>
          <h2 className="mb-3 text-3xl font-bold text-foreground sm:text-4xl">
            {isContactStep ? "Get your roadmap" : currentQuestion.title}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            {isContactStep
              ? "Share your details and we'll follow up within 24 hours with a tailored roadmap and discovery call options."
              : currentQuestion.description}
          </p>
        </div>

        <div
          className="mb-8 flex justify-center gap-2"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-valuenow={step + 1}
          aria-label={`Step ${step + 1} of ${totalSteps}`}
        >
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-1.5 w-8 rounded-full transition-colors",
                index <= step ? "bg-primary" : "bg-muted",
              )}
            />
          ))}
        </div>

        {!isContactStep && currentQuestion && (
          <div className="mb-8">
            <RadioGroup
              value={currentAnswer}
              onValueChange={(value) =>
                setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
              }
              className="gap-3"
            >
              {currentQuestion.options.map((option) => (
                <div
                  key={option.value}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border border-border px-4 py-3 transition-colors",
                    currentAnswer === option.value && "border-primary/50 bg-primary/5",
                  )}
                >
                  <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${option.value}`} />
                  <Label
                    htmlFor={`${currentQuestion.id}-${option.value}`}
                    className="flex-1 cursor-pointer font-normal leading-snug"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}

        {isContactStep && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mb-8 space-y-5 text-left">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input autoComplete="given-name" placeholder="Jane" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input autoComplete="family-name" placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gdprConsent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0 rounded-xl border border-border px-4 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={(checked) => field.onChange(checked === true)}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="cursor-pointer font-normal leading-snug">
                        I agree to the{" "}
                        <Link
                          to="/privacy"
                          className="text-primary underline-offset-4 hover:underline"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and consent to being contacted about my request.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Honeypot — hidden from users, visible to bots */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company_website">Company website</label>
                <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
              </div>

              {statusMessage && (
                <p className="text-sm text-destructive" role="alert" aria-live="assertive">
                  {statusMessage}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="btn-glow-primary w-full rounded-xl py-6 text-base font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  roadmapSubmitLabel
                )}
              </Button>
            </form>
          </Form>
        )}

        {!isContactStep && (
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={step === 0}
              className="rounded-xl"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={!canAdvanceQuestion}
              className="btn-glow-primary rounded-xl px-8 font-semibold"
            >
              {step === roadmapQuestions.length - 1 ? "Continue to details" : "Next"}
            </Button>
          </div>
        )}

        {isContactStep && (
          <div className="flex justify-start">
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
              className="rounded-xl"
            >
              Back
            </Button>
          </div>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground/70">
          {primaryCtaLabel} · 30 minutes · No pitch deck · Or email{" "}
          <a
            href={`mailto:${bookingEmail}`}
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            {bookingEmail}
          </a>
        </p>
      </div>
    </section>
  );
};

export default RoadmapSection;
