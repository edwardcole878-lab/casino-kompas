import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { CasinoLogo } from "./CasinoLogo";

export function StickyMobileCTA({
  slug,
  name,
  brandColor,
  image,
  label = "Speel Nu →",
  bonus,
}: {
  slug: string;
  name?: string;
  brandColor?: string;
  image?: string;
  label?: string;
  bonus?: string;
}) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("smc-dismissed") === "1") setDismissed(true);
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 p-3 shadow-elegant backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        {image ? (
          <img src={image} alt={`${name} logo`} width={40} height={40} loading="lazy" decoding="async" className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white object-contain p-0.5 text-[0]" />
        ) : name && brandColor ? (
          <CasinoLogo name={name} brandColor={brandColor} size="sm" />
        ) : null}
        {bonus && (
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase text-muted-foreground">
              {name ? `#1 · ${name}` : "Bonus"}
            </div>
            <div className="truncate text-sm font-bold text-gold">{bonus}</div>
          </div>
        )}
        <Button asChild size="sm" className="h-11 bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold">
          <a href={`/go/${slug}`} rel="sponsored nofollow">
            {label} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
        <button
          onClick={() => {
            sessionStorage.setItem("smc-dismissed", "1");
            setDismissed(true);
          }}
          aria-label="Verberg"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-muted-foreground hover:bg-accent"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}