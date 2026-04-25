import { Link } from "@tanstack/react-router";
import type { Casino } from "@/data/casinos";
import { CasinoLogo } from "./CasinoLogo";
import { CasinoBadge } from "./Badge";
import { Rating } from "./Rating";
import { PaymentIcons } from "./PaymentIcons";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ShieldCheck, Clock, Gift } from "lucide-react";

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
      className={`relative overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-elegant ${
        isFeatured
          ? "ring-2 ring-gold shadow-gold p-5 md:p-7 bg-gradient-to-br from-card to-accent/30"
          : "shadow-card p-5 md:p-6"
      }`}
    >
      {isFeatured && (
        <div className="absolute left-0 top-0 rounded-br-xl gradient-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
          ⭐ #{casino.rank} Beste Keuze
        </div>
      )}
      <div className={`grid gap-5 md:items-center ${isFeatured ? "mt-6 md:grid-cols-[auto_1fr_280px]" : "md:grid-cols-[auto_1fr_auto]"}`}>
        <div className="flex items-center gap-4">
          <span className={`hidden h-10 w-10 items-center justify-center rounded-full border bg-secondary text-base font-bold text-muted-foreground md:flex ${isFeatured ? "hidden md:hidden" : ""}`}>
            {casino.rank}
          </span>
          <CasinoLogo name={casino.name} brandColor={casino.brandColor} size={isFeatured ? "lg" : "lg"} />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`font-bold ${isFeatured ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>{casino.name}</h3>
            <Rating value={casino.rating} />
            {casino.badges?.map((b) => <CasinoBadge key={b} variant={b} />)}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{casino.tagline}</p>

          {/* BONUS BOX — primary visual focus per heatmap */}
          <div className={`mt-3 rounded-xl gradient-gold text-gold-foreground shadow-gold ${isFeatured ? "p-4" : "px-4 py-2.5"}`}>
            <div className="flex items-center gap-2">
              <Gift className={`shrink-0 ${isFeatured ? "h-6 w-6" : "h-4 w-4"}`} />
              <div className="min-w-0 flex-1">
                <div className={`font-extrabold leading-tight ${isFeatured ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>
                  {casino.bonusHeadline}
                </div>
                {isFeatured && (
                  <div className="mt-0.5 text-xs font-medium opacity-80">{casino.bonusDetail}</div>
                )}
              </div>
            </div>
          </div>

          <ul className="mt-3 grid gap-1.5 text-sm md:grid-cols-2">
            {casino.benefits.map((b) => (
              <li key={b} className="flex items-start gap-1.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <PaymentIcons methods={casino.payments} />
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
              <Clock className="h-3 w-3" /> {casino.payoutTime}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-trust">
              <ShieldCheck className="h-3 w-3" /> KSA
            </span>
          </div>
        </div>
        <div className={`flex flex-row gap-2 md:flex-col md:items-stretch md:gap-2 ${isFeatured ? "md:min-w-[260px]" : "md:min-w-[180px]"}`}>
          <Button asChild size="lg" className={`bg-gold text-gold-foreground hover:bg-gold/90 font-extrabold shadow-gold ${isFeatured ? "md:py-7 md:text-lg" : ""}`}>
            <a href={`/go/${casino.slug}`} rel="sponsored nofollow">
              {cta} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size={isFeatured ? "default" : "sm"}>
            <Link to="/review/$slug" params={{ slug: casino.slug }}>{secondaryCta}</Link>
          </Button>
          <p className="hidden text-center text-[10px] text-muted-foreground md:block">
            18+ | Voorwaarden gelden<br />
            <span className="text-success">✓ Direct toegang · 100% veilig</span>
          </p>
        </div>
      </div>
    </article>
  );
}
