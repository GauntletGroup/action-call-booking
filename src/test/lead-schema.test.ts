import { describe, it, expect } from "vitest";
import {
  emptyRoadmapAnswers,
  isRoadmapAnswersComplete,
  submitLeadRequestSchema,
} from "@/lib/lead-schema";

describe("submitLeadRequestSchema", () => {
  const validPayload = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@company.com",
    gdprConsent: true as const,
    answers: {
      companySize: "50-200",
      role: "ops-leader",
      primaryChallenge: "manual-ops",
      timeline: "asap",
    },
    metadata: {
      source: "action-call-booking",
      submittedAt: new Date().toISOString(),
    },
    honeypot: "",
  };

  it("accepts a valid payload", () => {
    expect(submitLeadRequestSchema.safeParse(validPayload).success).toBe(true);
  });

  it("rejects missing GDPR consent", () => {
    const result = submitLeadRequestSchema.safeParse({
      ...validPayload,
      gdprConsent: false,
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = submitLeadRequestSchema.safeParse({
      ...validPayload,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects incomplete answers", () => {
    const result = submitLeadRequestSchema.safeParse({
      ...validPayload,
      answers: { ...validPayload.answers, timeline: "" },
    });
    expect(result.success).toBe(false);
  });
});

describe("isRoadmapAnswersComplete", () => {
  it("returns false for empty answers", () => {
    expect(isRoadmapAnswersComplete(emptyRoadmapAnswers())).toBe(false);
  });

  it("returns true when all questions are answered", () => {
    expect(
      isRoadmapAnswersComplete({
        companySize: "50-200",
        role: "ops-leader",
        primaryChallenge: "manual-ops",
        timeline: "asap",
      }),
    ).toBe(true);
  });
});
