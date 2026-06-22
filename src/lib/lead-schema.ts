import { z } from "zod";

export const roadmapQuestions = [
  {
    id: "companySize" as const,
    title: "How large is your team?",
    description: "Helps us tailor recommendations to your scale.",
    options: [
      { value: "1-49", label: "1–49 employees" },
      { value: "50-200", label: "50–200 employees" },
      { value: "201-500", label: "201–500 employees" },
      { value: "500+", label: "500+ employees" },
    ],
  },
  {
    id: "role" as const,
    title: "What best describes your role?",
    description: "So we know who we're speaking with.",
    options: [
      { value: "ops-leader", label: "Operations / transformation leader" },
      { value: "engineering-leader", label: "Engineering / product leader" },
      { value: "founder", label: "Founder / C-suite" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "primaryChallenge" as const,
    title: "What's your main challenge right now?",
    description: "Pick the closest match — we'll dig deeper on the call.",
    options: [
      { value: "manual-ops", label: "Too much manual, repetitive ops work" },
      { value: "slow-delivery", label: "Engineering delivery is too slow" },
      { value: "data-pipelines", label: "Data / ML pipelines aren't production-ready" },
      { value: "ai-strategy", label: "Need help prioritising AI initiatives" },
    ],
  },
  {
    id: "timeline" as const,
    title: "When do you want to move?",
    description: "Helps us understand urgency and fit.",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3-months", label: "Within 1–3 months" },
      { value: "3-6-months", label: "3–6 months out" },
      { value: "exploring", label: "Just exploring for now" },
    ],
  },
] as const;

export type RoadmapAnswerKey = (typeof roadmapQuestions)[number]["id"];

export const roadmapAnswersSchema = z.object({
  companySize: z.string().min(1),
  role: z.string().min(1),
  primaryChallenge: z.string().min(1),
  timeline: z.string().min(1),
});

export type RoadmapAnswers = z.infer<typeof roadmapAnswersSchema>;

export const submitLeadRequestSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(254),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" }),
  }),
  answers: roadmapAnswersSchema,
  metadata: z
    .object({
      source: z.string(),
      submittedAt: z.string(),
      pageUrl: z.string().optional(),
    })
    .optional(),
  honeypot: z.string().optional(),
});

export type SubmitLeadRequest = z.infer<typeof submitLeadRequestSchema>;

export const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(254),
  gdprConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const emptyRoadmapAnswers = (): RoadmapAnswers => ({
  companySize: "",
  role: "",
  primaryChallenge: "",
  timeline: "",
});

export function isRoadmapAnswersComplete(answers: RoadmapAnswers): boolean {
  return roadmapAnswersSchema.safeParse(answers).success;
}
