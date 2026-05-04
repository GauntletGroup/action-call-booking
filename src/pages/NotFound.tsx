import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-10 text-center">
        <p className="mb-3 text-sm uppercase tracking-widest text-primary">Page Not Found</p>
        <h1 className="mb-3 text-4xl font-bold">404</h1>
        <p className="mb-8 text-muted-foreground">
          The page you are looking for does not exist. You can return to the homepage or jump
          straight to the booking section.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
          <Button asChild variant="outline">
            <a href="/#book">Go to Booking</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
