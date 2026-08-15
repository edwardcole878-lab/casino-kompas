import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  ChevronDown,
  Search,
  ShieldCheck,
  ArrowRight,
  Trophy,
  Sparkle,
  ShieldQuestion,
  Gift,
  Zap,
  Wallet,
  Bitcoin,
  Clock,
  Dice5,
  Tv,
  Spade,
  CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = { to: string; label: string; desc?: string; icon?: React.ComponentType<{ className?: string }> };
type NavGroup = { label: string; items: NavLink[] };

const groups: NavGroup[] = [
  {
    label: "Beste Casino's",
    items: [
      { to: "/beste-online-casinos", label: "Top 10 Casino's", desc: "De algehele ranking", icon: Trophy },
      { to: "/nieuwe-online-casinos", label: "Nieuwe Casino's", desc: "Recent gelanceerd in NL", icon: Sparkle },
      { to: "/betrouwbare-online-casinos", label: "Betrouwbare Casino's", desc: "Getest op uitbetaling & support", icon: ShieldQuestion },
      { to: "/online-slots", label: "Online Slots", desc: "Duizenden gokkasten", icon: Dice5 },
      { to: "/live-casino", label: "Live Casino", desc: "Met echte dealer", icon: Tv },
      { to: "/blackjack-online", label: "Blackjack", desc: "Strategie en tafels", icon: Spade },
      { to: "/roulette-online", label: "Roulette", desc: "Klassiek en live", icon: CircleDot },
    ],
  },
  {
    label: "Bonussen",
    items: [
      { to: "/bonussen", label: "Alle Bonussen", desc: "Vergelijk welkomstaanbod", icon: Gift },
      { to: "/free-spins-casino", label: "Free Spins", desc: "Gratis spins zonder storting", icon: Sparkles },
      { to: "/no-deposit-bonus", label: "No Deposit", desc: "Spelen zonder storting", icon: Zap },
      { to: "/welkomstbonus-casino", label: "Welkomstbonus", desc: "Beste eerste-storting bonussen", icon: Trophy },
    ],
  },
  {
    label: "Betaalmethoden",
    items: [
      { to: "/betaalmethoden", label: "Alle betaalmethoden", desc: "Overzicht & vergelijking", icon: Wallet },
      { to: "/betaalmethode/ideal", label: "iDEAL", desc: "Direct storten in NL", icon: Wallet },
      { to: "/betaalmethode/trustly", label: "Trustly", desc: "Pay-N-Play", icon: Wallet },
      { to: "/betaalmethode/crypto", label: "Crypto", desc: "Bitcoin & altcoins", icon: Bitcoin },
      { to: "/snelle-uitbetaling-casino", label: "Snelle Uitbetaling", desc: "< 1 uur op je rekening", icon: Clock },
    ],
  },
  {
    label: "Meer",
    items: [
      { to: "/providers", label: "Game Providers", desc: "NetEnt, Pragmatic & meer", icon: Sparkles },
      { to: "/licenties", label: "Licenties", desc: "Anjouan, Curaçao, MGA", icon: ShieldCheck },
      { to: "/bonus-types", label: "Bonus Types", desc: "Welkomst, free spins, VIP", icon: Gift },
      { to: "/slots", label: "Slot Reviews", desc: "RTP & volatiliteit", icon: Dice5 },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-nl-hero text-white transition-shadow ${
        scrolled ? "shadow-row" : ""
      }`}
    >
      <div className="h-1.5 w-full bg-nl-flag" aria-hidden />
      {/* Layer 2 — Main navigation */}
      <div className={`container relative mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 md:px-6 transition-all ${scrolled ? "h-14" : "h-16 md:h-[68px]"}`}>
        <nav className={`hidden flex-1 items-center justify-center gap-1 md:flex ${scrolled ? "md:hidden" : ""}`}>
          <Link
            to="/"
            className="rounded-md px-3 py-2 font-heading text-lg uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="inline-flex items-center gap-1 rounded-md px-3 py-2 font-heading text-lg uppercase tracking-wide text-white/85 transition-colors hover:bg-white/10 hover:text-white">
                {g.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              {/* Mega menu */}
              <div className="invisible absolute left-0 top-full z-50 w-[420px] translate-y-1 pt-2 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-2xl border bg-popover p-3 shadow-lift">
                  <div className="grid grid-cols-2 gap-2">
                    {g.items.map((it) => {
                      const Icon = it.icon ?? Sparkles;
                      return (
                        <Link
                          key={it.to}
                          to={it.to}
                          className="group/card flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all hover:-translate-y-0.5 hover:border-border hover:bg-accent hover:shadow-soft"
                        >
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 text-gold-foreground">
                            <Icon className="h-4 w-4 text-foreground/80" />
                          </span>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-foreground">{it.label}</div>
                            {it.desc && <div className="mt-0.5 text-xs text-muted-foreground">{it.desc}</div>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden md:inline-flex h-11 rounded-md bg-nl-orange px-5 font-heading text-lg uppercase tracking-widest text-white shadow-orange hover:bg-nl-orange/90"
          >
            <Link to="/beste-online-casinos">
              Vergelijk Casino's <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <button
            aria-label="Menu"
            className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-nl-ink md:hidden">
          <nav className="container mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <div className="relative mb-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Zoek casino of bonus…"
                className="h-10 w-full rounded-md border border-white/15 bg-white/10 pl-10 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-nl-orange/60"
              />
            </div>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 font-heading text-lg uppercase tracking-wide text-white hover:bg-white/10"
            >
              Home
            </Link>
            {groups.map((g) => {
              const expanded = mobileGroup === g.label;
              return (
                <div key={g.label} className="rounded-lg">
                  <button
                    onClick={() => setMobileGroup(expanded ? null : g.label)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 font-heading text-lg uppercase tracking-wide text-white hover:bg-white/10"
                  >
                    {g.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="ml-2 border-l border-white/15 pl-2">
                      {g.items.map((it) => (
                        <Link
                          key={it.to}
                          to={it.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white"
                        >
                          {it.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Button
              asChild
              className="mt-2 h-11 w-full rounded-md bg-nl-orange font-heading text-lg uppercase tracking-widest text-white shadow-orange hover:bg-nl-orange/90"
            >
              <Link to="/beste-online-casinos" onClick={() => setOpen(false)}>
                Vergelijk Casino's <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
