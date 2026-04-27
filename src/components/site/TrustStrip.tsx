import { ShieldCheck, Lock, BadgeCheck, FlaskConical } from "lucide-react";

export function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "KSA-vergund", sub: "Kansspelautoriteit" },
    { icon: BadgeCheck, label: "Cruks-koppeling", sub: "Spelersbescherming" },
    { icon: Lock, label: "SSL-versleuteld", sub: "256-bit encryptie" },
    { icon: FlaskConical, label: "Onafhankelijk getest", sub: "Eigen testronde 2026" },
  ];
  return (
    <div className="rounded-2xl border bg-card/60 p-4 backdrop-blur md:p-5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-trust/10 text-trust">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="text-sm font-bold leading-tight">{label}</div>
              <div className="text-[11px] text-muted-foreground">{sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}