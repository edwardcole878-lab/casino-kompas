import { Wallet, PlayCircle, Timer, Headphones } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Eigen storting",
    desc: "We storten zelf via iDEAL — geen demo, geen reviewaccount.",
  },
  {
    icon: PlayCircle,
    title: "Speeltest 2 weken",
    desc: "Minimaal 14 dagen actief spelen om de echte ervaring te beoordelen.",
  },
  {
    icon: Timer,
    title: "Uitbetaling getimed",
    desc: "We klokken iedere uitbetaling, ook 's avonds en in het weekend.",
  },
  {
    icon: Headphones,
    title: "Support getest",
    desc: "Live chat en e-mail meermaals contact, ook met lastige vragen.",
  },
];

export function Methodology() {
  return (
    <section className="rounded-2xl border bg-card p-6 md:p-8 shadow-soft">
      <div className="mb-6">
        <div className="text-[11px] font-bold uppercase tracking-widest text-trust">Onze methodiek</div>
        <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">Hoe wij testen</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Iedere positie in onze ranking is gebaseerd op deze vier stappen — niet op commissie.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border bg-background p-4">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-gold/25 to-gold/5 text-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <div className="mt-3 text-sm font-bold">{title}</div>
            <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}