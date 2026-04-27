export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  url: string; // canonical author page URL
  email?: string;
  linkedin?: string;
  sameAs?: string[];
};

const SITE = "https://buitenlandsecasino.com";

export const authors: Record<string, Author> = {
  "mark-de-vries": {
    slug: "mark-de-vries",
    name: "Mark de Vries",
    role: "Hoofdredacteur — 8 jaar ervaring in de Nederlandse gokmarkt",
    bio: "Mark de Vries is hoofdredacteur van Buitenlandse Casino's. Hij test sinds 2018 online casino's met eigen geld — eerst KSA-vergunde aanbieders, sinds 2023 ook offshore platforms voor Nederlandse spelers. Hij publiceerde eerder over verantwoord spelen, iDEAL-betalingen en bonusvoorwaarden.",
    url: `${SITE}/auteur/mark-de-vries`,
    email: "mark@buitenlandsecasinos.com",
    linkedin: "https://www.linkedin.com/in/mark-de-vries-placeholder",
  },
  "redactie": {
    slug: "redactie",
    name: "Redactie Buitenlandse Casino's",
    role: "Onafhankelijke redactie",
    bio: "De redactie van Buitenlandse Casino's test buitenlandse online casino's met eigen geld en publiceert onafhankelijke reviews voor Nederlandse spelers.",
    url: `${SITE}/auteur/redactie`,
  },
};

export const defaultAuthor = authors["mark-de-vries"];
export const getAuthor = (slug: string) => authors[slug];

export function authorJsonLd(a: Author) {
  return {
    "@type": "Person",
    name: a.name,
    url: a.url,
    jobTitle: a.role,
    description: a.bio,
    ...(a.sameAs ? { sameAs: a.sameAs } : a.linkedin ? { sameAs: [a.linkedin] } : {}),
    ...(a.email ? { email: a.email } : {}),
  };
}

export function publisherJsonLd() {
  return {
    "@type": "Organization",
    name: "Buitenlandse Casino's",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/og-default.jpg`,
    },
  };
}
