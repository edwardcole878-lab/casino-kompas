import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { ArrowUpDown, ArrowDown, ArrowUp, ExternalLink, Gift, Clock, Wallet, Percent } from "lucide-react";
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

  const MobileSortChip = ({ k, label }: { k: SortKey; label: string }) => {
    const active = sort.key === k;
    const Icon = active ? (sort.dir === "asc" ? ArrowUp : ArrowDown) : ArrowUpDown;
    return (
      <button
        onClick={() => handleSort(k)}
        className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
          active
            ? "border-gold bg-gold/15 text-gold-foreground"
            : "border-border bg-card text-muted-foreground hover:text-foreground"
        }`}
      >
        {label} <Icon className="h-3 w-3" />
      </button>
    );
  };

  return (
    <div className="rounded-2xl border bg-card shadow-soft">
      {/* Mobile sort chips (hidden on md+) */}
      <div className="border-b p-3 md:hidden">
        <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Sorteer op
        </div>
        <div className="flex flex-wrap gap-1.5">
          <MobileSortChip k="rank" label="Ranking" />
          <MobileSortChip k="rating" label="Score" />
          <MobileSortChip k="bonus" label="Bonus" />
          <MobileSortChip k="payout" label="Uitbet." />
          <MobileSortChip k="wagering" label="Wagering" />
          <MobileSortChip k="minDeposit" label="Min." />
        </div>
      </div>

      {/* Mobile stacked rows */}
      <ul className="divide-y md:hidden">
        {sorted.map((c) => (
          <li key={c.slug} className="p-3">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                {c.rank}
              </span>
              {(c.logoUrl ?? c.image) ? (
                <img
                  src={c.logoUrl ?? c.image}
                  alt={`${c.name} logo`}
                  className="h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white object-contain p-0.5 text-[0]"
                />
              ) : (
                <CasinoLogo name={c.name} brandColor={c.brandColor} size="sm" />
              )}
              <div className="min-w-0 flex-1">
                <Link
                  to="/review/$slug"
                  params={{ slug: c.slug }}
                  className="block truncate text-sm font-bold text-foreground hover:text-gold"
                >
                  {c.name}
                </Link>
                <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-gold/15 px-1.5 py-0.5 text-[10px] font-extrabold text-gold-foreground">
                  ★ {c.rating.toFixed(1)}
                </div>
              </div>
              <a
                href={`/go/${c.slug}`}
                rel="sponsored nofollow"
                className="inline-flex shrink-0 items-center gap-1 rounded-lg gradient-cta px-3 py-2 text-xs font-extrabold text-gold-foreground shadow-gold"
              >
                Speel Nu <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 rounded-lg border bg-secondary/40 p-2.5 text-[11px]">
              <div className="flex items-center gap-1.5">
                <Gift className="h-3 w-3 shrink-0 text-gold" />
                <div className="min-w-0">
                  <dt className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Bonus</dt>
                  <dd className="truncate font-semibold">{c.bonusHeadline}</dd>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 shrink-0 text-trust" />
                <div className="min-w-0">
                  <dt className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Uitbet.</dt>
                  <dd className="truncate font-semibold tabular-nums">{c.payoutTime}</dd>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Percent className="h-3 w-3 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Wagering</dt>
                  <dd className="font-semibold tabular-nums">{c.wagering}</dd>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="h-3 w-3 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <dt className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Min. storting</dt>
                  <dd className="font-semibold tabular-nums">{c.minDeposit}</dd>
                </div>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      {/* Desktop table (md+) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b bg-secondary/40">
              <th className="px-4 py-3 text-left">
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
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold text-muted-foreground">
                      {c.rank}
                    </span>
                    {(c.logoUrl ?? c.image) ? (
                      <img
                        src={c.logoUrl ?? c.image}
                        alt={`${c.name} logo`}
                        className="h-9 w-9 overflow-hidden rounded-lg bg-white object-contain p-0.5 text-[0]"
                      />
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
                    Speel Nu <ExternalLink className="h-3 w-3" />
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