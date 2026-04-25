import type { Casino, PaymentMethod } from "@/data/casinos";
import { SlidersHorizontal, X, Star, Zap } from "lucide-react";

export type FilterState = {
  minRating: number;
  payment: PaymentMethod | "all";
  fastPayout: boolean;
};

const defaults: FilterState = { minRating: 0, payment: "all", fastPayout: false };

export function applyFilters(casinos: Casino[], f: FilterState) {
  return casinos.filter((c) => {
    if (c.rating < f.minRating) return false;
    if (f.payment !== "all" && !c.payments.includes(f.payment)) return false;
    if (f.fastPayout && !/min|0-2|1 uur|< 1/i.test(c.payoutTime)) return false;
    return true;
  });
}

export function FilterBar({ value, onChange }: { value: FilterState; onChange: (f: FilterState) => void }) {
  const active = value.minRating > 0 || value.payment !== "all" || value.fastPayout;
  const payments: (PaymentMethod | "all")[] = ["all", "iDEAL", "Bancontact", "Trustly", "Crypto", "PayPal"];
  const ratings: { v: number; l: string }[] = [
    { v: 0, l: "Alles" },
    { v: 8, l: "8.0+" },
    { v: 8.5, l: "8.5+" },
    { v: 9, l: "9.0+" },
  ];
  return (
    <div className="rounded-2xl border bg-card p-4 shadow-card">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <SlidersHorizontal className="h-4 w-4 text-gold" /> Filter resultaten
        {active && (
          <button onClick={() => onChange(defaults)} className="ml-auto inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
            <X className="h-3 w-3" /> Reset
          </button>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 text-muted-foreground" />
          {ratings.map((r) => (
            <button
              key={r.v}
              onClick={() => onChange({ ...value, minRating: r.v })}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${value.minRating === r.v ? "border-gold bg-gold text-gold-foreground shadow-gold" : "bg-background hover:bg-accent"}`}
            >
              {r.l}
            </button>
          ))}
        </div>
        <span className="mx-1 hidden h-6 w-px bg-border md:inline-block" />
        <div className="flex flex-wrap items-center gap-1.5">
          {payments.map((p) => (
            <button
              key={p}
              onClick={() => onChange({ ...value, payment: p })}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${value.payment === p ? "border-trust bg-trust text-trust-foreground" : "bg-background hover:bg-accent"}`}
            >
              {p === "all" ? "Alle methoden" : p}
            </button>
          ))}
        </div>
        <span className="mx-1 hidden h-6 w-px bg-border md:inline-block" />
        <button
          onClick={() => onChange({ ...value, fastPayout: !value.fastPayout })}
          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${value.fastPayout ? "border-success bg-success text-success-foreground" : "bg-background hover:bg-accent"}`}
        >
          <Zap className="h-3 w-3" /> Snelle uitbetaling
        </button>
      </div>
    </div>
  );
}

export const defaultFilterState = defaults;