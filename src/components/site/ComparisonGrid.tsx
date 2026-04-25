import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { ArrowUpDown, ArrowDown, ArrowUp, ExternalLink } from "lucide-react";
import { payoutMinutes, wageringValue } from "./HomeFilters";

type SortKey = "rank" | "rating" | "bonus" | "wagering" | "payout" | "minDeposit";
type SortDir = "asc" | "desc";

const minDepositValue = (s: string) => {
  const m = s.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 999;
};

export function ComparisonGrid({ casinos }: { casinos: Casino[] }) {
  const [sort, setSort] = useState<{ key: SortKey; dir: SortDir }>({ key: "rank", dir: "asc" });

  const sorted = [...casinos].sort((a, b) => {
    const dir = sort.dir === "asc" ? 1 : -1;
    switch (sort.key) {
      case "rank":
        return (a.rank - b.rank) * dir;
      case "rating":
        return (a.rating - b.rating) * dir;
      case "bonus":
        return (a.maxBonus - b.maxBonus) * dir;
      case "wagering":
        return (wageringValue(a.wagering) - wageringValue(b.wagering)) * dir;
      case "payout":
        return (payoutMinutes(a.payoutTime) - payoutMinutes(b.payoutTime)) * dir;
      case "minDeposit":
        return (minDepositValue(a.minDeposit) - minDepositValue(b.minDeposit)) * dir;
    }
  });

  const handleSort = (key: SortKey) => {
    setSort((s) => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));
  };

  const Header = ({ k, label, className = "" }: { k: SortKey; label: string; className?: string }) => {
    const active = sort.key === k;
    const Icon = active ? (sort.dir === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;
    return (
      <button
        onClick={() => handleSort(k)}
        className={`inline-flex items-center gap-1 text-left text-[11px] font-bold uppercase tracking-wider transition-colors ${
          active ? "text-gold" : "text-muted-foreground hover:text-foreground"
        } ${className}`}
      >
        {label} <Icon className="h-3 w-3" />
      </button>
    );
  };

  return (
    <div className="rounded-2xl border bg-card shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <thead>
            <tr className="border-b bg-secondary/40">
              <th className="sticky left-0 z-10 bg-secondary/95 px-4 py-3 text-left backdrop-blur md:static md:bg-transparent">
                <Header k="rank" label="Casino" />
              </th>
              <th className="px-3 py-3 text-left"><Header k="rating" label="Score" /></th>
              <th className="px-3 py-3 text-left"><Header k="bonus" label="Welkomstbonus" /></th>
              <th className="px-3 py-3 text-left"><Header k="wagering" label="Wagering" /></th>
              <th className="px-3 py-3 text-left"><Header k="payout" label="iDEAL uitbet." /></th>
              <th className="px-3 py-3 text-left"><Header k="minDeposit" label="Min. storting" /></th>
              <th className="px-3 py-3 text-right text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Actie</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.slug} className="border-b last:border-b-0 transition-colors hover:bg-accent/40">
                <td className="sticky left-0 z-10 bg-card px-4 py-3 backdrop-blur md:static">
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                      {c.rank}
                    </span>
                    {c.image ? (
                      <img src={c.image} alt={`${c.name} logo`} className="h-9 w-9 rounded-lg object-cover" />
                    ) : (
                      <CasinoLogo name={c.name} brandColor={c.brandColor} size="sm" />
                    )}
                    <Link
                      to="/review/$slug"
                      params={{ slug: c.slug }}
                      className="font-bold text-foreground hover:text-gold"
                    >
                      {c.name}
                    </Link>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-xs font-extrabold text-gold-foreground">
                    ★ {c.rating.toFixed(1)}
                  </span>
                </td>
                <td className="px-3 py-3 text-[13px] font-semibold">{c.bonusHeadline}</td>
                <td className="px-3 py-3 text-[13px] tabular-nums">{c.wagering}</td>
                <td className="px-3 py-3 text-[13px] tabular-nums">{c.payoutTime}</td>
                <td className="px-3 py-3 text-[13px] tabular-nums">{c.minDeposit}</td>
                <td className="px-3 py-3 text-right">
                  <a
                    href={`/go/${c.slug}`}
                    rel="sponsored nofollow"
                    className="inline-flex items-center gap-1 rounded-lg gradient-cta px-3 py-2 text-xs font-extrabold text-gold-foreground shadow-gold"
                  >
                    Bezoek <ExternalLink className="h-3 w-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}