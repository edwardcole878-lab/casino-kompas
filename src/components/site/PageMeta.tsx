import { Calendar, ShieldCheck } from "lucide-react";

export function PageMeta({ updated = "April 2026", author = "Redactie Buitenlandse Casino" }: { updated?: string; author?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Laatst bijgewerkt: {updated}</span>
      <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Door {author}</span>
    </div>
  );
}
