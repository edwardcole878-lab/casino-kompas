import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 bg-nl-ink text-white/70 pb-24 md:pb-0">
      <div className="h-1.5 w-full bg-nl-flag" aria-hidden />
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-heading text-2xl uppercase tracking-wide text-white">Buitenlandse <span className="text-nl-orange">Casino&apos;s</span></div>
            <p className="mt-3 text-sm text-white/60">
              Onafhankelijk vergelijkingsplatform voor buitenlandse online casino's, gericht op Nederlandse spelers.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wide text-white">Casino's</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/beste-online-casinos" className="hover:text-nl-orange">Beste online casino's</Link></li>
              <li><Link to="/snelle-uitbetaling-ideal-casinos" className="hover:text-nl-orange">Buitenlandse casino's</Link></li>
              <li><Link to="/casinos-zonder-cruks" className="hover:text-nl-orange">Casino's zonder Cruks</Link></li>
              <li><Link to="/nieuwe-online-casinos" className="hover:text-nl-orange">Nieuwe casino's</Link></li>
              <li><Link to="/betrouwbare-online-casinos" className="hover:text-nl-orange">Betrouwbare casino's</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wide text-white">Bonussen & Betalingen</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/welkomstbonus-casino" className="hover:text-nl-orange">Welkomstbonus</Link></li>
              <li><Link to="/no-deposit-bonus" className="hover:text-nl-orange">No deposit bonus</Link></li>
              <li><Link to="/free-spins-casino" className="hover:text-nl-orange">Free spins</Link></li>
              <li><Link to="/ideal-casinos" className="hover:text-nl-orange">iDEAL casino's</Link></li>
              <li><Link to="/snelle-uitbetaling-casino" className="hover:text-nl-orange">Snelle uitbetaling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg uppercase tracking-wide text-white">Over ons</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><Link to="/over-ons" className="hover:text-nl-orange">Over ons</Link></li>
              <li><Link to="/auteur/$slug" params={{ slug: "mark-de-vries" }} className="hover:text-nl-orange">Onze redactie</Link></li>
              <li><Link to="/redactiebeleid" className="hover:text-nl-orange">Redactiebeleid</Link></li>
              <li><Link to="/verantwoord-spelen" className="hover:text-nl-orange">Verantwoord spelen</Link></li>
              <li><Link to="/blog" className="hover:text-nl-orange">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-end">
          <div className="text-right">
            <p className="text-xs font-medium text-white/70">
              Laatst gecontroleerd door redactie: 18 april 2026
            </p>
            <p className="mt-0.5 text-xs text-white/50">
              © {new Date().getFullYear()} Buitenlandse Casino's. Onafhankelijk vergelijkingsplatform voor buitenlandse online casino's.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
