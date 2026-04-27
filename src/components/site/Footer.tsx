import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/40 pb-24 md:pb-0">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="text-lg font-bold">Casino<span className="text-gold">Wijzer</span></div>
            <p className="mt-3 text-sm text-muted-foreground">
              Onafhankelijk vergelijkingsplatform voor online casino's met een Nederlandse KSA-vergunning.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Casino's</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/beste-online-casinos" className="hover:text-foreground">Beste online casino's</Link></li>
              <li><Link to="/nieuwe-online-casinos" className="hover:text-foreground">Nieuwe casino's</Link></li>
              <li><Link to="/betrouwbare-online-casinos" className="hover:text-foreground">Betrouwbare casino's</Link></li>
              <li><Link to="/mobiele-casinos" className="hover:text-foreground">Mobiele casino's</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Bonussen & Betalingen</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/welkomstbonus-casino" className="hover:text-foreground">Welkomstbonus</Link></li>
              <li><Link to="/no-deposit-bonus" className="hover:text-foreground">No deposit bonus</Link></li>
              <li><Link to="/free-spins-casino" className="hover:text-foreground">Free spins</Link></li>
              <li><Link to="/ideal-casinos" className="hover:text-foreground">iDEAL casino's</Link></li>
              <li><Link to="/snelle-uitbetaling-casino" className="hover:text-foreground">Snelle uitbetaling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Over ons</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/redactiebeleid" className="hover:text-foreground">Redactiebeleid</Link></li>
              <li><Link to="/verantwoord-spelen" className="hover:text-foreground">Verantwoord spelen</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-trust text-trust-foreground text-xs font-bold">18+</span>
            <ShieldCheck className="h-4 w-4 text-trust" />
            <span>Speel verantwoord — Dit is een vergelijkingswebsite. Hulp nodig? Bel <a className="underline" href="tel:0900-2177721">Loket Kansspel</a>.</span>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-foreground/70">
              Laatst gecontroleerd door redactie: 18 april 2026
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Buitenlandse Casino. Onafhankelijk vergelijkingsplatform.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
