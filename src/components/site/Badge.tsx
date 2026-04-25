type Variant = "populair" | "redactie" | "snel" | "nieuw" | "mobiel";
const map: Record<Variant, { text: string; cls: string }> = {
  populair: { text: "Populair", cls: "bg-destructive/10 text-destructive border-destructive/20" },
  redactie: { text: "Keuze v/d redactie", cls: "bg-gold/15 text-gold-foreground border-gold/30" },
  snel: { text: "Snelle uitbetaling", cls: "bg-success/15 text-success border-success/30" },
  nieuw: { text: "Nieuw 2026", cls: "bg-trust/15 text-trust border-trust/30" },
  mobiel: { text: "Mobiel top", cls: "bg-accent text-accent-foreground border-accent" },
};
export function CasinoBadge({ variant }: { variant: Variant }) {
  const v = map[variant];
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${v.cls}`}>
      {v.text}
    </span>
  );
}
