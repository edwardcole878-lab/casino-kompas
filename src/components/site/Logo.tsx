import { Compass } from "lucide-react";

/**
 * Brand mark — Compass + W monogram with gold accent.
 * Use `condensed` for the sticky/scrolled header variant.
 */
export function Logo({ condensed = false }: { condensed?: boolean }) {
  return (
    <span className="flex items-center gap-2 font-bold">
      <span
        className={`relative grid place-items-center rounded-lg gradient-gold shadow-gold ${
          condensed ? "h-8 w-8" : "h-9 w-9"
        }`}
        aria-hidden
      >
        <Compass className={`text-gold-foreground ${condensed ? "h-4 w-4" : "h-[18px] w-[18px]"}`} strokeWidth={2.5} />
        <span
          className={`absolute -bottom-0.5 -right-0.5 grid place-items-center rounded-md bg-foreground text-background font-extrabold leading-none ${
            condensed ? "h-3.5 w-3.5 text-[8px]" : "h-4 w-4 text-[9px]"
          }`}
        >
          W
        </span>
      </span>
      <span className={condensed ? "text-base" : "text-lg"}>
        Casino<span className="text-gold">Wijzer</span>
      </span>
    </span>
  );
}