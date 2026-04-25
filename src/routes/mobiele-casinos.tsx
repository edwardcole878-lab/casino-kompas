import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/site/CategoryPage";
import { casinos } from "@/data/casinos";

export const Route = createFileRoute("/mobiele-casinos")({
  head: () => ({
    meta: [
      { title: "Mobiele Casino's — Beste Casino Apps Nederland 2026" },
      { name: "description", content: "Speel onderweg: getest op iOS en Android. App-kwaliteit, mobiele iDEAL en touch-geoptimaliseerde slots." },
      { property: "og:title", content: "Beste Mobiele Casino's Nederland 2026" },
      { property: "og:description", content: "Mobiele casino-apps en mobile-first sites uitgebreid getest." },
    ],
  }),
  component: Page,
});

function Page() {
  const mobile = [...casinos].sort((a, b) => (a.angle === "mobile-experience" ? -1 : b.angle === "mobile-experience" ? 1 : 0));
  return (
    <CategoryPage
      breadcrumbs={[{ to: "/beste-online-casinos", label: "Casino's" }, { label: "Mobiele casino's" }]}
      h1="Mobiele casino's voor iPhone en Android"
      intro={
        <>
          <p>
            Meer dan 70% van de Nederlandse casino-spellen wordt op telefoon gespeeld. Toch behandelen veel casino's mobiel nog als bijzaak: ze nemen hun desktopsite, schalen 'm naar 360 pixels en noemen het 'responsive'. Het verschil met een echte mobile-first ervaring is enorm.
          </p>
          <p>
            We testen mobiele casino's op vier punten: <strong>app-kwaliteit (native of webapp)</strong>, <strong>iDEAL deeplink-flow</strong>, <strong>touch-targets en leesbaarheid</strong> en <strong>laadtijd op 4G</strong>. De ranking hieronder weerspiegelt die testen.
          </p>
        </>
      }
      casinos={mobile}
      rankingTitle="Beste mobiele casino-ervaring"
      rankingDescription="Native app krijgt voorrang, gevolgd door optimale PWA-implementaties."
      primaryCta="Bekijk Casino"
      faqs={[
        { q: "Heb ik een aparte app nodig?", a: "Niet altijd — een goede mobile site werkt prima. Maar een native app is doorgaans sneller, ondersteunt biometrische login en heeft betere notificaties." },
        { q: "Werkt iDEAL goed in casino-apps?", a: "Bij goede apps perfect: deeplink naar je banking-app en weer terug, alles zonder accounts opnieuw invoeren. Bij slechte implementaties moet je extra inloggegevens noteren." },
        { q: "Verbruikt mobiel spelen veel data?", a: "Slots gemiddeld 10-50MB per uur. Live casino kan oplopen tot 500MB per uur door video-streams. Op WiFi spelen scheelt." },
        { q: "Kan ik via 4G/5G live casino spelen?", a: "Ja, mits je bereik stabiel is. Live Arena en Delta Casino schaalden tijdens onze test goed terug naar lagere kwaliteit bij verminderde verbinding." },
        { q: "Werken de apps op oudere telefoons?", a: "De besten ondersteunen iOS 13+ en Android 9+. Zeer oude toestellen kunnen problemen geven met live casino streams." },
      ]}
      related={[
        { to: "/ideal-casinos", label: "iDEAL casino's" },
        { to: "/online-slots", label: "Mobiele slots" },
        { to: "/live-casino", label: "Live casino" },
        { to: "/beste-online-casinos", label: "Top 10 algemeen" },
        { to: "/snelle-uitbetaling-casino", label: "Snel uitbetalen" },
        { to: "/blog", label: "Blog" },
      ]}
    />
  );
}
