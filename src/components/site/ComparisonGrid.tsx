import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { ExternalLink, Gift, Clock, Wallet, Percent } from "lucide-react";

const TH_CLASS = "text-[11px] font-bold uppercase tracking-wider text-muted-foreground";

export function ComparisonGrid({ casinos }: { casinos: Casino[] }) {
  const sorted = casinos;

  return (
    <div className="rounded-2xl border bg-card shadow-soft">
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
                  width={36}
                  height={36}
                  loading="lazy"
                  decoding="async"
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
              <th className={`px-4 py-3 text-left ${TH_CLASS}`}>Casino</th>
              <th className={`px-3 py-3 text-left ${TH_CLASS}`}>Score</th>
              <th className={`px-3 py-3 text-left ${TH_CLASS}`}>Welkomstbonus</th>
              <th className={`px-3 py-3 text-left ${TH_CLASS}`}>Wagering</th>
              <th className={`px-3 py-3 text-left ${TH_CLASS}`}>iDEAL uitbet.</th>
              <th className={`px-3 py-3 text-left ${TH_CLASS}`}>Min. storting</th>
              <th className={`px-3 py-3 text-right ${TH_CLASS}`}>Actie</th>
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
                        width={36}
                        height={36}
                        loading="lazy"
                        decoding="async"
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