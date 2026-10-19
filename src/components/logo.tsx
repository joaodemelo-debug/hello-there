import { cn } from "@/lib/utils";

/** The Just Minimal symbol: a thin ring crossed by a single vertical line. */
export function JustMinimalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="square"
      aria-hidden="true"
      className={cn("text-foreground", className)}
    >
      <circle cx="24" cy="24" r="13.5" />
      <line x1="24" y1="3" x2="24" y2="45" />
    </svg>
  );
}

/** Full lockup: mark, wordmark, hairline, foundation line. */
export function JustMinimalLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center gap-7", className)}>
      <JustMinimalMark className="h-14 w-14 sm:h-20 sm:w-20" />
      <div className="flex flex-col items-center gap-4">
        <span className="font-sans text-[30px] font-medium uppercase leading-none tracking-[0.38em] [text-indent:0.38em] sm:text-[44px]">
          Just Minimal
        </span>
        <span aria-hidden className="h-px w-16 bg-border" />
        <span className="text-[10px] uppercase tracking-[0.52em] [text-indent:0.52em] text-muted-foreground">
          Est. MMXXVI
        </span>
      </div>
    </div>
  );
}
