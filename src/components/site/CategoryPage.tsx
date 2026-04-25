import { Layout } from "./Layout";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { ComparisonTable } from "./ComparisonTable";
import { FAQ, type FAQItem } from "./FAQ";
import { RelatedLinks } from "./RelatedLinks";
import { PageMeta } from "./PageMeta";
import { TrustNotice } from "./TrustNotice";
import type { Casino } from "@/data/casinos";

export type CategoryPageProps = {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  h1: string;
  intro: React.ReactNode;
  casinos: Casino[];
  primaryCta?: string;
  rankingTitle?: string;
  rankingDescription?: string;
  extraSection?: React.ReactNode;
  faqs: FAQItem[];
  related: { to: string; label: string; description?: string }[];
};

export function CategoryPage({
  breadcrumbs,
  h1,
  intro,
  casinos,
  primaryCta = "Speel Nu",
  rankingTitle = "Onze ranking",
  rankingDescription,
  extraSection,
  faqs,
  related,
}: CategoryPageProps) {
  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
        <Breadcrumbs items={breadcrumbs} />
        <header className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{h1}</h1>
          <div className="mt-3"><PageMeta /></div>
          <div className="prose prose-neutral mt-6 max-w-none text-muted-foreground leading-relaxed [&_strong]:text-foreground">
            {intro}
          </div>
        </header>

        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">{rankingTitle}</h2>
              {rankingDescription && <p className="mt-1 text-muted-foreground">{rankingDescription}</p>}
            </div>
          </div>
          <ComparisonTable casinos={casinos} primaryCta={primaryCta} />
        </section>

        {extraSection && <section className="mt-12">{extraSection}</section>}

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
          <FAQ items={faqs} />
          <TrustNotice />
        </div>

        <div className="mt-12">
          <RelatedLinks links={related} />
        </div>
      </div>
    </Layout>
  );
}
