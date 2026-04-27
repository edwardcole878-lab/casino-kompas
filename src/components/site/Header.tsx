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
import { Logo } from "./Logo";

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
      className={`sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
      style={{ borderColor: "rgba(0,0,0,0.06)" }}
    >
      {/* Layer 1 — Utility bar */}
      <div className={`hidden md:block border-b transition-all ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-11 opacity-100"}`} style={{ borderColor: "rgba(0,0,0,0.05)" }}>
        <div className="container mx-auto flex h-11 max-w-[1240px] items-center justify-end gap-6 px-6">
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <Link
              to="/redactiebeleid"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-trust" />
              Onafhankelijk getest · April 2026
            </Link>
          </div>
        </div>
      </div>

      {/* Layer 2 — Main navigation */}
      <div className={`container relative mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 md:px-6 transition-all ${scrolled ? "h-14" : "h-16 md:h-[68px]"}`}>
        <Link
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center"
        >
          <Logo condensed={scrolled} />
        </Link>

        <nav className={`hidden items-center gap-1 md:flex ${scrolled ? "md:hidden" : ""}`}>
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">
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
            className="hidden md:inline-flex h-11 gradient-cta cta-glow rounded-xl px-5 text-sm font-extrabold text-gold-foreground shadow-gold"
          >
            <Link to="/beste-online-casinos">
              Vergelijk Casino's <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <button
            aria-label="Menu"
            className="md:hidden rounded-md p-2 hover:bg-accent"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            <div className="relative mb-2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Zoek casino of bonus…"
                className="h-10 w-full rounded-xl border bg-card pl-10 pr-3 text-sm shadow-soft outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
              />
            </div>
            {groups.map((g) => {
              const expanded = mobileGroup === g.label;
              return (
                <div key={g.label} className="rounded-lg">
                  <button
                    onClick={() => setMobileGroup(expanded ? null : g.label)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-accent"
                  >
                    {g.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  {expanded && (
                    <div className="ml-2 border-l pl-2">
                      {g.items.map((it) => (
                        <Link
                          key={it.to}
                          to={it.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
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
              className="mt-2 h-11 w-full gradient-cta cta-glow rounded-xl text-sm font-extrabold text-gold-foreground shadow-gold"
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
