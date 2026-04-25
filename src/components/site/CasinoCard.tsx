import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { CasinoBadge } from "./Badge";
import { Rating } from "./Rating";
import { PaymentIcons } from "./PaymentIcons";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Clock, Gift, BadgeCheck, Trophy } from "lucide-react";

export function CasinoCard({
  casino,
  cta = "Speel Nu",
  secondaryCta = "Lees review",
  featured = false,
}: {
  casino: Casino;
  cta?: string;
  secondaryCta?: string;
  featured?: boolean;
}) {
  const isFeatured = featured || casino.highlight;
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-card hover-lift ${
        isFeatured
          ? "ring-2 ring-gold shadow-gold p-5 pt-10 md:p-8 md:pt-10 bg-gradient-to-br from-card via-card to-accent/40"
          : "shadow-card p-5 pt-8 md:p-7 md:pt-8"
      }`}
    >
      {/* Rank badge — top left */}
      <div className={`absolute left-0 top-0 inline-flex items-center gap-1.5 rounded-br-2xl px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider ${
        isFeatured ? "gradient-gold text-gold-foreground shadow-gold" : "bg-secondary text-foreground/70 border-r border-b"
      }`}>
        {isFeatured ? <Trophy className="h-3.5 w-3.5" /> : null}
        #{casino.rank}{isFeatured ? " Beste Keuze" : ""}
      </div>

      <div className={`grid gap-5 md:items-center ${isFeatured ? "md:grid-cols-[auto_1fr_300px]" : "md:grid-cols-[auto_1fr_220px]"}`}>
        <div className="flex items-center gap-4">
          <CasinoLogo name={casino.name} brandColor={casino.brandColor} size="lg" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`font-extrabold tracking-tight ${isFeatured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>{casino.name}</h3>
            <Rating value={casino.rating} />
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{casino.tagline}</p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-trust/30 bg-trust/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-trust">
              <BadgeCheck className="h-3 w-3" /> Geverifieerd
            </span>
            {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
          </div>

          {/* BONUS BOX — DOMINANT visual element */}
          <div className={`mt-4 relative overflow-hidden rounded-2xl gradient-bonus border-2 border-gold/40 ${isFeatured ? "p-5" : "p-4"}`}>
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-gold text-gold-foreground shadow-gold">
                <Gift className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gold-foreground/70">Welkomstbonus</div>
                <div className={`font-black leading-tight text-foreground ${isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                  {casino.bonusHeadline}
                </div>
                <div className="mt-0.5 text-xs font-medium text-foreground/70">{casino.bonusDetail}</div>
              </div>
            </div>
          </div>

          <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            {casino.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-success/15">
                  <Check className="h-3 w-3 text-success" />
                </span>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>

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
          <Button asChild size="lg" className={`gradient-cta text-gold-foreground hover:opacity-95 font-extrabold shadow-gold w-full ${isFeatured ? "h-14 text-lg md:h-16 md:text-xl" : "h-12 text-base"}`}>
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">
              {cta} <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" className="w-full font-semibold">
            <Link to="/review/$slug" params={{ slug: casino.slug }}>{secondaryCta}</Link>
          </Button>
          <div className="text-center text-[10px] leading-snug text-muted-foreground">
            <div className="font-semibold text-success">✓ Direct toegang · binnen 1 minuut</div>
            <div className="mt-0.5">18+ · Voorwaarden gelden · Speel bewust</div>
          </div>
        </div>
      </div>
    </article>
  );
}
