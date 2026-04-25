import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Veelgestelde vragen" }: { items: FAQItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="rounded-2xl border bg-card p-6 md:p-10 shadow-card">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <Accordion type="single" collapsible className="mt-6">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
