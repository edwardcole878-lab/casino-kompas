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
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(800px_400px_at_70%_-100px,oklch(0.78_0.14_80/0.4),transparent),radial-gradient(600px_300px_at_10%_120%,oklch(0.55_0.14_240/0.3),transparent)]" />
      <div className="container relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> {eyebrow}
          </div>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80 md:text-xl">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-gold">
            <a href={primaryCta.to}>{primaryCta.label}</a>
          </Button>
          {secondary && (
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          )}
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
