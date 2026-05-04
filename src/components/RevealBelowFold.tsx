import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealState = "pass" | "pre" | "play";

type RevealBelowFoldProps = {
  children: ReactNode;
  className?: string;
};

const RevealBelowFold = ({ children, className }: RevealBelowFoldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("pass");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const top = el.getBoundingClientRect().top;
    const belowFold = top > window.innerHeight * 0.92;
    if (belowFold) {
      setState("pre");
    }
  }, []);

  useEffect(() => {
    if (state !== "pre") return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setState("play");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [state]);

  return (
    <div
      ref={ref}
      className={cn(
        state === "pre" && "reveal-bf-pre",
        state === "play" && "reveal-bf-play",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default RevealBelowFold;
