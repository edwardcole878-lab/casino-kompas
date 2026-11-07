import {
  Zap,
  Star,
  Trophy,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { listingCasinos, type ListingCasino } from "@/data/listing";

export type Casino = ListingCasino;
const casinos = listingCasinos;


export { listingCasinos };

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < full
              ? "fill-nl-orange text-nl-orange"
              : i === full && half
                ? "fill-nl-orange/50 text-nl-orange"
                : "text-nl-blue/25"
          }
        />
      ))}
      <span className="ml-1.5 font-heading text-lg leading-none tracking-wide text-nl-blue">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function AffiliateLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a href={href} target="_blank" rel="nofollow sponsored noopener" aria-label={ariaLabel} className={className}>
      {children}
    </a>
  );
}

function CasinoRow({ c }: { c: Casino }) {
  const isTop = c.rank === 1;
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-card transition-colors ${isTop ? "casino-spotlight" : ""} ${
        isTop
          ? "border-nl-green shadow-row ring-2 ring-nl-green/30"
          : "border-nl-blue/35 shadow-row hover:border-nl-blue/60"
      }`}
    >
      {isTop && (
        <div className="casino-spotlight-mobile flex h-full flex-col gap-4 p-4 font-body lg:hidden">
          <div className="flex items-center justify-center gap-2 text-spotlight-accent">
            <Zap size={22} className="fill-current" />
            <span className="text-base font-bold">Snelste keuze van 2026</span>
          </div>
          <div className="flex h-24 items-center justify-center rounded-md bg-spotlight-logo px-5 py-3">
            <img src={c.logo} alt={`${c.name} logo`} loading="eager" fetchPriority="high" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase">Welkomstbonus</div>
              <div className="mt-1 text-[26px] font-extrabold leading-tight">{c.bonus}</div>
              <div className="mt-1 text-xl font-bold leading-tight text-spotlight-accent">+ {c.freeSpins}</div>
            </div>
            <div className="border-l border-spotlight-foreground/35 pl-3 text-center">
              <div className="flex items-center justify-center gap-1">
                <Zap size={20} className="shrink-0 fill-current text-spotlight-accent" />
                <span className="whitespace-nowrap text-xl font-bold">{c.payoutSpeed}</span>
              </div>
              <div className="mt-1 text-[10px] uppercase">Uitbetaling</div>
            </div>
          </div>
          <ul className="space-y-2">
            {c.pros.slice(1).map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-sm leading-snug">
                <Check size={18} className="shrink-0 text-spotlight-accent" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Button asChild size="lg" className="h-12 w-full rounded-md bg-spotlight-accent font-body text-xl font-bold text-spotlight-accent-foreground shadow-none hover:bg-spotlight-accent/90">
              <AffiliateLink href={`/go/${c.slug}`} ariaLabel={`Speel nu bij ${c.name}`}>
                Speel nu <ArrowRight size={20} />
              </AffiliateLink>
            </Button>
            <Link to="/review/$slug" params={{ slug: c.slug }} className="mt-3 block text-center text-sm font-semibold underline underline-offset-4">
              Lees review
            </Link>
          </div>
        </div>
      )}
      {isTop ? (
        <div className="hidden h-8 shrink-0 items-center justify-center gap-2 bg-nl-green px-4 font-heading text-sm uppercase tracking-[0.2em] text-white lg:flex lg:justify-start">
          <Trophy size={14} /> Snelste keuze van 2026
        </div>
      ) : (
        <div className="h-8 shrink-0 bg-nl-blue/5" aria-hidden />
      )}

      <div className={`${isTop ? "hidden lg:grid" : "grid"} flex-1 grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-3 p-3 text-center sm:p-5 lg:grid-cols-[auto_minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,210px)] lg:items-center lg:gap-4 lg:p-3 lg:text-left`}>
        {/* Rank + logo */}
        <div className="col-span-2 flex items-center justify-center lg:col-span-1">
          <div className="flex h-24 w-full items-center justify-center overflow-hidden rounded-md border border-nl-blue/10 bg-white p-1.5 lg:h-20 lg:w-24 lg:shrink-0">
            <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* Name, rating, pros */}
        <div className="min-w-0 self-center">
          <h3 className="hidden font-heading text-2xl uppercase leading-none tracking-wide text-nl-blue lg:block lg:text-2xl">{c.name}</h3>
          <div className="flex justify-center lg:mt-1 lg:justify-start">
            <Stars rating={c.rating} />
          </div>
          <ul className="mt-2 min-h-[54px] space-y-1 lg:mt-1.5 lg:min-h-[52px] lg:space-y-0.5">
            {c.pros.map((p) => (
              <li
                key={p}
                className="flex items-start justify-center gap-1 text-[11px] leading-tight text-muted-foreground lg:justify-start lg:text-[13px]"
              >
                <Check size={12} className="mt-[3px] shrink-0 text-nl-orange lg:mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bonus + facts */}
        <div
          className={`self-center rounded-lg border px-2.5 py-3 lg:rounded-xl lg:px-3.5 lg:py-2.5 ${
            isTop ? "border-nl-green/45 bg-nl-green/10" : "border-nl-orange/30 bg-nl-orange/5"
          }`}
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nl-red">Welkomstbonus</div>
          <div className="mt-1 font-heading text-[28px] leading-[0.95] tracking-wide text-nl-ink lg:text-[28px]">{c.bonus}</div>
          <div className="mt-1.5 text-[13px] font-semibold text-nl-orange lg:mt-1 lg:text-sm">+ {c.freeSpins}</div>
        </div>

        {/* Payout + CTA */}
        <div className="col-span-2 lg:col-span-1 lg:text-right">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-nl-blue/8 px-3 py-1 text-nl-blue">
            <Zap size={14} className="text-nl-orange" />
            <span className="font-heading text-lg leading-none tracking-wide lg:text-base">{c.payoutSpeed}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">uitbetaling</span>
          </div>
          <Button
            asChild
            size="lg"
            className={`mt-2 h-11 w-full rounded-md font-heading text-lg uppercase tracking-widest text-white shadow-orange lg:mt-2 lg:h-10 lg:text-base ${
              isTop ? "bg-nl-green hover:bg-nl-green/90" : "bg-nl-orange hover:bg-nl-orange/90"
            }`}
          >
            <AffiliateLink href={`/go/${c.slug}`} ariaLabel={`Speel nu bij ${c.name}`}>
              Speel nu <ArrowRight size={18} className="ml-1" />
            </AffiliateLink>
          </Button>
          <Link
            to="/review/$slug"
            params={{ slug: c.slug }}
            className="mt-1.5 block w-full rounded-md border border-nl-blue/30 py-1.5 text-center text-[12px] font-semibold uppercase tracking-widest text-nl-blue transition-colors hover:border-nl-blue hover:bg-nl-blue/5"
          >
            Lees review
          </Link>
        </div>
      </div>
    </article>
  );
}


/** The one canonical casino listing used on every page of the site. */
export function CasinoListing() {
  return (
    <div className="grid auto-rows-fr gap-4 font-body text-nl-ink">
      {casinos.map((c) => (
        <CasinoRow key={c.slug} c={c} />
      ))}
    </div>
  );
}
