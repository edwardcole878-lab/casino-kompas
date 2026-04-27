import { createFileRoute } from "@tanstack/react-router";
import { TaxonomyHub } from "@/components/site/TaxonomyHub";
import { paymentTerms, casinosByPayment } from "@/data/taxonomies";
import type { PaymentMethod } from "@/data/casinos";

const SITE = "https://buitenlandsecasino.com";

export const Route = createFileRoute("/betaalmethoden")({
  head: () => ({
    meta: [
      { title: "Casino Betaalmethoden Nederland 2026 | Vergelijk per methode" },
      { name: "description", content: "Vind het beste online casino per betaalmethode: iDEAL, Trustly, Bancontact, PayPal, Visa, Mastercard, Crypto en meer. KSA-vergund." },
      { property: "og:title", content: "Casino Betaalmethoden Nederland 2026" },
      { property: "og:description", content: "Vergelijk casino's per betaalmethode: iDEAL, Trustly, Crypto en meer." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BetaalmethodenHub,
});

function BetaalmethodenHub() {
  const items = (Object.entries(paymentTerms) as [PaymentMethod, typeof paymentTerms[PaymentMethod]][])
    .map(([method, term]) => ({
      term,
      to: `/betaalmethode/${term.slug}`,
      count: casinosByPayment(method).length,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <TaxonomyHub
      title="Casino's per betaalmethode"
      kicker="Betaalmethoden"
      intro="Kies je favoriete betaalmethode en bekijk welke KSA-vergunde casino's deze ondersteunen — met snelheid, kosten en uitbetaaltijden."
      items={items}
      pageUrl={`${SITE}/betaalmethoden`}
      countLabel="casino's"
      faq={[
        { q: "Welke betaalmethode heeft de snelste uitbetaling?", a: "Trustly en iDEAL zijn doorgaans het snelst — vaak binnen een uur op je rekening bij de beste casino's." },
        { q: "Zijn alle betaalmethoden gratis?", a: "Bij KSA-casino's worden meestal geen kosten in rekening gebracht. Bij creditcards (Visa/Mastercard) kan je eigen bank wel kosten rekenen." },
        { q: "Welke methode is het veiligst?", a: "iDEAL en Trustly werken via je eigen bank-app — geen kaartgegevens nodig, dus minimaal datalek-risico." },
      ]}
    />
  );
}