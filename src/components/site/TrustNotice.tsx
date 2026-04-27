import { AlertTriangle } from "lucide-react";

export function TrustNotice() {
  return (
    <aside className="rounded-2xl border border-destructive/30 bg-destructive/5 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-destructive text-destructive-foreground">
          <AlertTriangle className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-bold">Belangrijk: deze casino's hebben geen KSA-vergunning</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Wij beoordelen offshore-casino's (Anjouan, Curaçao, MGA) die Nederlandse spelers
            accepteren. Deze operators zijn <strong>niet aangesloten op CRUKS</strong>. Sta je in
            CRUKS? Speel dan <strong>niet</strong> bij deze casino's. Iedere operator hier wordt
            beoordeeld op transparantie van de licentiehouder, klachtenafhandeling en
            uitbetaaltrack-record. Twijfel je over je speelgedrag? Bel{" "}
            <a className="underline" href="tel:0900-2177721">AGOG via 0900-2177721</a> of bezoek{" "}
            <a className="underline" href="https://www.loketkansspel.nl" target="_blank" rel="noopener noreferrer">loketkansspel.nl</a>.
          </p>
        </div>
      </div>
    </aside>
  );
}
