import { Zap, Gift, Percent, Wallet, Tv, Smartphone, X } from "lucide-react";

export type HomeFilterId =
  | "fastest"
  | "highest-bonus"
  | "lowest-wagering"
  | "ideal-only"
  | "live-casino"
  | "mobile";

const chips: { id: HomeFilterId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "fastest", label: "Snelste uitbetaling", icon: Zap },
  { id: "highest-bonus", label: "Hoogste bonus", icon: Gift },
  { id: "lowest-wagering", label: "Laagste wagering", icon: Percent },
  { id: "ideal-only", label: "iDEAL only", icon: Wallet },
  { id: "live-casino", label: "Live casino", icon: Tv },
  { id: "mobile", label: "Mobiel", icon: Smartphone },
];

export function HomeFilters({
  active,
  onToggle,
  onClear,
}: {
  active: HomeFilterId | null;
  onToggle: (id: HomeFilterId) => void;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Filter:
      </span>
      {chips.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => onToggle(id)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
              isActive
                ? "border-gold bg-gold text-gold-foreground shadow-gold"
                : "border-border bg-card hover:border-gold/40 hover:bg-accent"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        );
      })}
      {active && (
        <button
          onClick={onClear}
          className="ml-1 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:bg-accent"
        >
          <X className="h-3 w-3" /> Reset
        </button>
      )}
    </div>
  );
}

import type { Casino } from "@/data/casinos";

export function applyHomeFilter(list: Casino[], f: HomeFilterId | null): Casino[] {
  if (!f) return list;
  switch (f) {
    case "fastest":
      return [...list].sort((a, b) => payoutMinutes(a.payoutTime) - payoutMinutes(b.payoutTime));
    case "highest-bonus":
      return [...list].sort((a, b) => b.maxBonus - a.maxBonus);
    case "lowest-wagering":
      return [...list].sort((a, b) => wageringValue(a.wagering) - wageringValue(b.wagering));
    case "ideal-only":
      return list.filter((c) => c.payments.includes("iDEAL"));
    case "live-casino":
      return [...list].sort((a, b) => b.games.live - a.games.live);
    case "mobile":
      return list.filter((c) => c.angle === "mobile-experience" || c.badges?.includes("mobiel"));
  }
}

export function payoutMinutes(s: string): number {
  const m = s.match(/(\d+)\s*min/i);
  if (m) return parseInt(m[1], 10);
  const h = s.match(/(\d+)\s*uur/i);
  if (h) return parseInt(h[1], 10) * 60;
  return 999;
}

export function wageringValue(s: string): number {
  const m = s.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
}