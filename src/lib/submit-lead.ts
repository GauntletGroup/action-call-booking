import type { ContactFormValues, RoadmapAnswers, SubmitLeadRequest } from "@/lib/lead-schema";

export type SubmitLeadPayload = Omit<SubmitLeadRequest, "metadata"> & {
  metadata?: SubmitLeadRequest["metadata"];
};

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

export async function submitLead(
  contact: ContactFormValues,
  answers: RoadmapAnswers,
  honeypot = "",
): Promise<SubmitLeadResult> {
  const payload: SubmitLeadPayload = {
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    gdprConsent: true,
    answers,
    honeypot,
    metadata: {
      source: "action-call-booking",
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    },
  };

  let response: Response;
  try {
    response = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    return {
      ok: false,
      status: 0,
      error: "Unable to submit right now. Please try again or email us.",
    };
  }

  let body: { ok?: boolean; error?: string } = {};
  try {
    body = await response.json();
  } catch {
    // ignore non-JSON responses
  }

  if (response.ok && body.ok) {
    return { ok: true };
  }

  return {
    ok: false,
    status: response.status,
    error:
      body.error ??
      "Unable to submit right now. Please try again or email us.",
  };
}
