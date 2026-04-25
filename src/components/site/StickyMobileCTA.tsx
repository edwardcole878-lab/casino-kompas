import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA({ slug, label = "Speel Nu", bonus }: { slug: string; label?: string; bonus?: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 p-3 shadow-elegant backdrop-blur md:hidden">
      <div className="flex items-center gap-3">
        {bonus && (
          <div className="min-w-0 flex-1">
            <div className="text-[10px] font-semibold uppercase text-muted-foreground">Bonus</div>
            <div className="truncate text-sm font-bold text-gold">{bonus}</div>
          </div>
        )}
        <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold">
          <a href={`/go/${slug}`} rel="sponsored nofollow">
            {label} <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}