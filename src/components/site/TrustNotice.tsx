import { ShieldCheck } from "lucide-react";

export function TrustNotice() {
  return (
    <aside className="rounded-2xl border border-trust/30 bg-trust/5 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-trust text-trust-foreground">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-bold">Veilig spelen — onze beoordeling</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Wij beoordelen uitsluitend casino's met een geldige vergunning van de Kansspelautoriteit (KSA). Alle vermelde operators zijn aangesloten op Cruks en bieden tools voor verantwoord spelen, zoals stort- en speellimieten.
          </p>
        </div>
      </div>
    </aside>
  );
}
