export const bookingEmail = "hello@example.com";

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

export const primaryCtaLabel = "Book a Discovery Call";
export const bookingMailto = `mailto:${bookingEmail}?subject=${encodeURIComponent(bookingSubject)}&body=${encodeURIComponent(bookingBody)}`;
