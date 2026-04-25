import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { CasinoBadge } from "./Badge";
import { Rating } from "./Rating";
import { PaymentIcons } from "./PaymentIcons";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Clock, Gift, BadgeCheck, Trophy, X, CalendarCheck } from "lucide-react";

const dateNL = (iso: string) =>
  new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });

export function CasinoCard({
  casino,
  cta,
  secondaryCta = "Lees review",
  featured = false,
}: {
  casino: Casino;
  cta?: string;
  secondaryCta?: string;
  featured?: boolean;
}) {
  const isFeatured = featured || casino.highlight;
  const ctaLabel = cta ?? casino.ctaLabel ?? `Claim €${casino.maxBonus} Bonus`;
  const logo = casino.logoUrl ?? casino.image;
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-card hover-lift ${
        isFeatured
          ? "border-gold/60 shadow-glow-gold p-6 pt-11 md:p-8 md:pt-11 md:scale-[1.02] bg-gradient-to-br from-card via-card to-accent/40"
          : "shadow-soft p-5 pt-9 md:p-6 md:pt-9"
      }`}
      style={isFeatured ? { borderWidth: "1.5px" } : undefined}
    >
      {/* Rank badge — top left */}
      <div className={`absolute left-0 top-0 inline-flex items-center gap-1.5 rounded-br-2xl px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider ${
        isFeatured ? "gradient-gold text-gold-foreground shadow-gold" : "bg-secondary text-foreground/70 border-r border-b"
      }`}>
        {isFeatured ? <Trophy className="h-3.5 w-3.5" /> : null}
        #{casino.rank}{isFeatured ? " Beste Keuze" : ""}
      </div>
      {/* Last tested — top right */}
      <div className="absolute right-3 top-2 inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
        <CalendarCheck className="h-3 w-3" /> Laatst getest: {dateNL(casino.lastTested)}
      </div>

      <div className={`grid gap-4 md:gap-6 md:items-center ${isFeatured ? "md:grid-cols-[auto_1fr_280px]" : "md:grid-cols-[auto_1fr_220px]"}`}>
        <div className="flex items-center gap-4">
          {logo ? (
            <img
              src={logo}
              alt={`${casino.name} logo`}
              className={`overflow-hidden rounded-xl bg-white object-contain p-1 text-[0] shadow-card ${isFeatured ? "h-16 w-16" : "h-12 w-12"}`}
              loading="lazy"
            />
          ) : (
            <CasinoLogo name={casino.name} brandColor={casino.brandColor} size={isFeatured ? "lg" : "md"} />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 className={`font-extrabold tracking-tight ${isFeatured ? "text-2xl md:text-[28px]" : "text-lg md:text-xl"}`}>{casino.name}</h3>
            <Rating value={casino.rating} />
          </div>
          <p className="mt-1 text-[13px] text-muted-foreground">{casino.tagline}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-trust/30 bg-trust/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-trust">
              <BadgeCheck className="h-3 w-3" /> Geverifieerd
            </span>
            {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
          </div>

          {/* BONUS BOX — DOMINANT visual element */}
          <div className={`mt-4 relative overflow-hidden rounded-xl gradient-bonus border-2 border-gold/40 ${isFeatured ? "p-5 min-h-[80px]" : "p-4 min-h-[68px]"}`}>
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <span className={`grid shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold ${isFeatured ? "h-11 w-11" : "h-10 w-10"}`}>
                <Gift className={isFeatured ? "h-5 w-5" : "h-4 w-4"} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">Welkomstbonus</div>
                <div className={`font-black leading-tight text-foreground ${isFeatured ? "text-xl md:text-2xl" : "text-base md:text-[18px]"}`}>
                  {casino.bonusHeadline}
                </div>
                <div className="mt-1 text-[13px] font-medium text-foreground/70">{casino.bonusDetail}</div>
              </div>
            </div>
          </div>

          {/* Pros / Cons */}
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-success/20 bg-success/5 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-success">Voordelen</div>
              <ul className="mt-1.5 space-y-1 text-[13px]">
                {casino.pros.slice(0, 3).map((p) => (
                  <li key={p} className="flex items-start gap-1.5">
                    <Check className="mt-0.5 h-3 w-3 shrink-0 text-success" />
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-destructive">Nadelen</div>
              <ul className="mt-1.5 space-y-1 text-[13px]">
                {casino.cons.slice(0, 2).map((p) => (
                  <li key={p} className="flex items-start gap-1.5">
                    <X className="mt-0.5 h-3 w-3 shrink-0 text-destructive" />
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Standardised data block */}
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-lg border bg-secondary/40 p-3 text-[12px] sm:grid-cols-3 md:grid-cols-5">
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Wagering</dt>
              <dd className="font-bold tabular-nums">{casino.wagering}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Max bonus</dt>
              <dd className="font-bold tabular-nums">€{casino.maxBonus}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Min. storting</dt>
              <dd className="font-bold tabular-nums">{casino.minDeposit}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Uitbetaling</dt>
              <dd className="font-bold tabular-nums">{casino.payoutTime}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Licentie</dt>
              <dd className="font-bold">KSA</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t pt-3">
            <PaymentIcons methods={casino.payments} />
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
              <Clock className="h-3 w-3" /> {casino.payoutTime}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-trust">
              <ShieldCheck className="h-3 w-3" /> KSA
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <Button asChild size="lg" className={`gradient-cta cta-glow text-gold-foreground font-extrabold shadow-gold w-full ${isFeatured ? "h-14 text-lg md:h-[56px] md:text-xl" : "h-12 text-base md:h-[52px]"}`}>
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">
              {ctaLabel} <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Link to="/review/$slug" params={{ slug: casino.slug }} className="text-center text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors">
            {secondaryCta} →
          </Link>
          <div className="mt-1 text-center text-[10px] leading-snug text-muted-foreground">
            {isFeatured && (
              <div className="font-semibold text-success">✓ Direct toegang · binnen 1 minuut</div>
            )}
            <div className="mt-0.5">18+ · Voorwaarden gelden · Speel bewust</div>
          </div>
        </div>
      </div>
    </article>
  );
}
