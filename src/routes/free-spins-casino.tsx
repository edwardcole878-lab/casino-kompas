import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/free-spins-casino")({
  head: () => ({
    meta: [
      { title: "Free Spins Casino — Gratis Spins op Slots 2026" },
      { name: "description", content: "Casino's met de meeste en eerlijkste free spins. Per slot en per provider — inclusief winst-cap en wagering." },
      { property: "og:title", content: "Beste Free Spins Casino's Nederland" },
      { property: "og:description", content: "Gratis spins op slots — vergeleken op netto-waarde." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/casino-bonussen", label: "Bonussen" }, { label: "Free spins" }]}
      h1="Free spins casino — gratis spins die écht iets opleveren"
      intro={
        <>
          <p>
            Free spins zijn een prettige bonusvorm omdat je direct ziet wat je krijgt: een aantal gratis draaien op een specifieke slot, met een vaste inzet per spin. Veel transparanter dan een bonusbedrag met complexe wagering. Maar — er zijn addertjes onder het gras.
          </p>
          <p>
            Wat je vooral moet checken: is er een <strong>maximum opneembaar bedrag</strong> uit de free spins? Worden ze in één keer gegeven of verspreid over meerdere dagen? Op welke slot en met welke RTP? Al die zaken nemen we per casino mee.
          </p>
        </>
      }
      casinos={casinos.filter((c) => c.bonusHeadline.toLowerCase().includes("spin"))}
      rankingTitle="Beste free spin aanbiedingen"
      primaryCta="Speel Nu"
      faqs={[
        { q: "Op welke slots krijg ik free spins?", a: "Meestal op de populairste slots zoals Book of Dead, Starburst of Big Bass Bonanza. Het casino kiest, jij niet." },
        { q: "Wat is de inzet per free spin waard?", a: "Doorgaans €0,10 tot €0,20 per spin. Tel uit wat je totaal aan inzetwaarde krijgt." },
        { q: "Vervallen free spins?", a: "Ja, meestal binnen 24-72 uur na claim of na elke daily-batch. Niet gebruikt = verloren." },
        { q: "Mag ik winst uit free spins direct opnemen?", a: "Pas na de wagering. Bij sommige aanbiedingen is winst direct opneembaar, dat is dan een groot voordeel." },
        { q: "Tellen free spins als deposit-vrije bonus?", a: "Soms ja (no deposit free spins), vaker als onderdeel van een welkomstpakket na een storting." },
      ]}
      related={[
        { to: "/welkomstbonus-casino", label: "Welkomstbonus" },
        { to: "/no-deposit-bonus", label: "No deposit bonus" },
        { to: "/online-slots", label: "Beste slot-casino's" },
        { to: "/casino-bonussen", label: "Alle bonussen" },
        { to: "/beste-online-casinos", label: "Top 10 casino's" },
        { to: "/blog", label: "Blog" },
      ]}
    />
  );
}
