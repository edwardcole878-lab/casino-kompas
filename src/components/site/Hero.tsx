import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingUp, Sparkles } from "lucide-react";

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta = { label: "Bekijk top 10", to: "#top10" },
  secondary,
  meta,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondary?: { label: string; to: string };
  meta?: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(900px_500px_at_75%_-120px,oklch(0.82_0.16_85/0.5),transparent),radial-gradient(700px_350px_at_5%_120%,oklch(0.6_0.16_245/0.35),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background/10" />
      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {eyebrow && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-12 gradient-cta px-8 text-base text-gold-foreground hover:opacity-95 font-extrabold shadow-gold">
            <a href={primaryCta.to}>{primaryCta.label}</a>
          </Button>
          {secondary && (
            <Button asChild size="lg" variant="outline" className="h-12 border-white/30 bg-white/5 px-6 text-white hover:bg-white/15 hover:text-white">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          )}
          <span className="text-xs font-medium text-white/70">⚡ Direct toegang · geen registratie nodig</span>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Alleen KSA-vergunde casino's</span>
          <span className="inline-flex items-center gap-2"><TrendingUp className="h-4 w-4 text-gold" /> Onafhankelijk getest</span>
          <span className="inline-flex items-center gap-2">🇳🇱 Speciaal voor Nederland</span>
          {meta && <span className="text-white/60">{meta}</span>}
        </div>
      </div>
    </section>
  );
}
