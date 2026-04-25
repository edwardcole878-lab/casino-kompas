import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sparkles, ChevronDown } from "lucide-react";

type NavLink = { to: string; label: string; desc?: string };
type NavGroup = { label: string; items: NavLink[] };

const groups: NavGroup[] = [
  {
    label: "Beste Casino's",
    items: [
      { to: "/beste-online-casinos", label: "Top 10 Casino's", desc: "De algehele ranking" },
      { to: "/nieuwe-online-casinos", label: "Nieuwe Casino's", desc: "Recent gelanceerd in NL" },
      { to: "/betrouwbare-online-casinos", label: "Betrouwbare Casino's", desc: "KSA & Cruks-compliant" },
    ],
  },
  {
    label: "Bonussen",
    items: [
      { to: "/casino-bonussen", label: "Alle Bonussen", desc: "Vergelijk welkomstaanbod" },
      { to: "/free-spins-casino", label: "Free Spins", desc: "Gratis spins zonder storting" },
      { to: "/no-deposit-bonus", label: "No Deposit", desc: "Spelen zonder storting" },
      { to: "/welkomstbonus-casino", label: "Welkomstbonus", desc: "Beste eerste-storting bonussen" },
    ],
  },
  {
    label: "Betaalmethoden",
    items: [
      { to: "/ideal-casinos", label: "iDEAL", desc: "Direct storten in NL" },
      { to: "/crypto-casino", label: "Crypto", desc: "Bitcoin & altcoins" },
      { to: "/snelle-uitbetaling-casino", label: "Snelle Uitbetaling", desc: "< 1 uur op je rekening" },
    ],
  },
  {
    label: "Spellen",
    items: [
      { to: "/online-slots", label: "Slots", desc: "Online gokkasten" },
      { to: "/live-casino", label: "Live Casino", desc: "Met echte dealer" },
      { to: "/blackjack-online", label: "Blackjack", desc: "Strategie en tafels" },
      { to: "/roulette-online", label: "Roulette", desc: "Klassiek en live" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-gold shadow-gold">
            <Sparkles className="h-5 w-5 text-gold-foreground" />
          </span>
          <span>
            Casino<span className="text-gold">Wijzer</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {groups.map((g) => (
            <div key={g.label} className="group relative">
              <button className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                {g.label} <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 rounded-2xl border bg-popover p-2 opacity-0 shadow-lift transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {g.items.map((it) => (
                  <Link key={it.to} to={it.to} className="flex flex-col rounded-xl px-3 py-2.5 transition-colors hover:bg-accent">
                    <span className="text-sm font-semibold text-foreground">{it.label}</span>
                    {it.desc && <span className="text-xs text-muted-foreground">{it.desc}</span>}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden rounded-md p-2 hover:bg-accent"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
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
          </nav>
        </div>
      )}
    </header>
  );
}
