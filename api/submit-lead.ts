import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const roadmapAnswersSchema = z.object({
  companySize: z.string().min(1),
  role: z.string().min(1),
  primaryChallenge: z.string().min(1),
  timeline: z.string().min(1),
});

const submitLeadRequestSchema = z.object({
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

function getWebhookUrl(): string | undefined {
  return process.env.N8N_WEBOOK_URL ?? process.env.N8N_WEBHOOK_URL;
}

function getAllowedOrigin(req: VercelRequest): string {
  const configured = process.env.ALLOWED_ORIGIN;
  if (configured) return configured;
  const origin = req.headers.origin;
  if (origin) return origin;
  return "*";
}

function setCorsHeaders(req: VercelRequest, res: VercelResponse): void {
  res.setHeader("Access-Control-Allow-Origin", getAllowedOrigin(req));
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(req, res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const rawBody = req.body;
  if (rawBody?.honeypot) {
    return res.status(200).json({ ok: true });
  }

  const parsed = submitLeadRequestSchema.safeParse(rawBody);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: "Invalid request" });
  }

  const webhookUrl = getWebhookUrl();
  if (!webhookUrl) {
    console.error("N8N_WEBOOK_URL is not configured");
    return res.status(502).json({
      ok: false,
      error: "Unable to submit right now. Please try again or email us.",
    });
  }

  const { honeypot: _honeypot, ...payload } = parsed.data;
  const n8nPayload = {
    ...payload,
    email: payload.email.toLowerCase(),
    metadata: {
      source: payload.metadata?.source ?? "action-call-booking",
      submittedAt: payload.metadata?.submittedAt ?? new Date().toISOString(),
      pageUrl: payload.metadata?.pageUrl,
      userAgent: req.headers["user-agent"],
    },
  };

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.N8N_WEBHOOK_SECRET) {
    headers["X-Webhook-Secret"] = process.env.N8N_WEBHOOK_SECRET;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(n8nPayload),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!upstream.ok) {
      console.error("n8n webhook returned", upstream.status);
      return res.status(502).json({
        ok: false,
        error: "Unable to submit right now. Please try again or email us.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("n8n webhook request failed", error);
    return res.status(502).json({
      ok: false,
      error: "Unable to submit right now. Please try again or email us.",
    });
  }
}
