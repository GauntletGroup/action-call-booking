import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1 py-1 -mx-1";

const SiteHeader = () => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-primary/15 shadow-[0_8px_30px_-12px_hsl(var(--primary)/0.12)]",
        "bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-3">
        <Link
          to="/"
          className="rounded-sm text-base font-semibold tracking-tight text-foreground drop-shadow-[0_0_14px_hsl(var(--primary)/0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Action Call
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8" aria-label="Primary">
          <a href="#services" className={navLinkClass}>
            Services
          </a>
          <a href="#results" className={navLinkClass}>
            Results
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-lg font-semibold shadow-[0_0_20px_-4px_hsl(var(--primary)/0.45)]"
          >
            <a href="#book">Book</a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
