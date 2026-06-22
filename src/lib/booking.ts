export const bookingEmail = "hello@example.com";

export const bookingAnchor = "#book";
export const primaryCtaLabel = "Book a Discovery Call";
export const roadmapSubmitLabel = "Get My Roadmap";

/** Rollback fallback — not used by primary CTAs */
const bookingSubject = "Discovery call request";
const bookingBody = [
  "Hi Action Call,",
  "",
  "I'd like to book a discovery call.",
  "",
  "Company:",
  "Role:",
  "Team size:",
  "Main challenge:",
  "Preferred timezone:",
].join("\n");

export const bookingMailto = `mailto:${bookingEmail}?subject=${encodeURIComponent(bookingSubject)}&body=${encodeURIComponent(bookingBody)}`;
