import { useState } from "react";
import type { Casino, PaymentMethod } from "@/data/casinos";
import { SlidersHorizontal, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const active = value.minRating > 0 || value.payment !== "all" || value.fastPayout;
  const payments: (PaymentMethod | "all")[] = ["all", "iDEAL", "Bancontact", "Trustly", "Crypto", "PayPal"];
  return (
    <div className="rounded-2xl border bg-card p-3 shadow-card md:p-4">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setOpen((o) => !o)}
          className="inline-flex items-center gap-2 rounded-lg border bg-secondary px-3 py-2 text-sm font-semibold hover:bg-accent md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
        </button>
        <div className={`flex-1 flex-wrap items-center gap-3 md:flex ${open ? "flex" : "hidden"}`}>
          <label className="inline-flex items-center gap-2 text-sm">
            <span className="font-medium text-muted-foreground">Min. rating:</span>
            <select
              value={value.minRating}
              onChange={(e) => onChange({ ...value, minRating: Number(e.target.value) })}
              className="rounded-md border bg-background px-2 py-1.5 text-sm font-semibold"
            >
              <option value={0}>Alles</option>
              <option value={8}>8.0+</option>
              <option value={8.5}>8.5+</option>
              <option value={9}>9.0+</option>
            </select>
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <span className="font-medium text-muted-foreground">Betaalmethode:</span>
            <select
              value={value.payment}
              onChange={(e) => onChange({ ...value, payment: e.target.value as PaymentMethod | "all" })}
              className="rounded-md border bg-background px-2 py-1.5 text-sm font-semibold"
            >
              {payments.map((p) => (
                <option key={p} value={p}>{p === "all" ? "Alle" : p}</option>
              ))}
            </select>
          </label>
          <label className="inline-flex items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={value.fastPayout}
              onChange={(e) => onChange({ ...value, fastPayout: e.target.checked })}
              className="h-4 w-4 accent-gold"
            />
            Alleen snelle uitbetaling
          </label>
          {active && (
            <button
              onClick={() => onChange(defaults)}
              className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" /> Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export const defaultFilterState = defaults;