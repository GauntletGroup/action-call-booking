import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import { bookingEmail } from "@/lib/booking";

const Privacy = () => (
  <>
    <SiteHeader />
    <main className="min-h-screen px-6 py-16 text-foreground">
      <article className="prose prose-invert mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary not-prose">
          Legal
        </p>
        <h1 className="mb-6 text-4xl font-bold not-prose">Privacy Policy</h1>
        <p className="text-muted-foreground not-prose mb-8">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <section className="space-y-4 text-muted-foreground not-prose">
          <h2 className="text-xl font-semibold text-foreground">Who we are</h2>
          <p>
            Action Call (&quot;we&quot;, &quot;us&quot;) provides AI advisory and implementation services.
            You can contact us at{" "}
            <a href={`mailto:${bookingEmail}`} className="text-primary hover:underline">
              {bookingEmail}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground">What we collect</h2>
          <p>When you request a roadmap or discovery call, we collect:</p>
          <ul className="list-disc space-y-1 pl-6">
            <li>First and last name</li>
            <li>Email address</li>
            <li>Your answers to our fit-check questionnaire (team size, role, challenges, timeline)</li>
            <li>Technical metadata such as submission time, page URL, and browser user agent</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Why we collect it</h2>
          <p>
            We use this information to assess fit, prepare for a discovery call, send follow-up
            communication, and improve our services. Our lawful basis under GDPR is your consent
            (given via the checkbox on the form) and our legitimate interest in responding to
            business enquiries.
          </p>

          <h2 className="text-xl font-semibold text-foreground">How we process data</h2>
          <p>
            Form submissions are sent securely from our website to our automation platform (n8n),
            which routes your data to our internal tools (such as email notifications or CRM
            systems). We do not sell your personal data.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Retention</h2>
          <p>
            We keep enquiry data only as long as needed to follow up on your request and maintain
            a record of our business relationship, typically up to 24 months unless a longer
            period is required by law or an ongoing engagement.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
          <p>
            If you are in the EEA or UK, you have the right to access, rectify, erase, restrict,
            or object to processing of your personal data, and to withdraw consent at any time.
            To exercise these rights, email{" "}
            <a href={`mailto:${bookingEmail}`} className="text-primary hover:underline">
              {bookingEmail}
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
          <p>
            This site does not use analytics or advertising cookies. Essential browser storage may
            be used for basic site functionality.
          </p>
        </section>

        <div className="mt-12 not-prose">
          <Button asChild variant="outline">
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </article>
    </main>
  </>
);

export default Privacy;
