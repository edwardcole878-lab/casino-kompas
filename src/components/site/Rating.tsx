import { Star } from "lucide-react";

export function Rating({ value, showText = true }: { value: number; showText?: boolean }) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <Star className="h-4 w-4 fill-gold text-gold" />
      <span className="font-bold tabular-nums">{value.toFixed(1)}</span>
      {showText && <span className="text-xs text-muted-foreground">/10</span>}
    </div>
  );
}
