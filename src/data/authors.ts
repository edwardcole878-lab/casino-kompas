export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  url: string; // canonical author page (we link to redactiebeleid)
  sameAs?: string[];
};

const SITE = "https://buitenlandsecasino.com";

export const authors: Record<string, Author> = {
  "mark-de-vries": {
    slug: "mark-de-vries",
    name: "Mark de Vries",
    role: "Hoofdredacteur — 8 jaar ervaring in de Nederlandse gokmarkt",
    bio: "Mark de Vries is hoofdredacteur van Buitenlandse Casino. Hij test sinds 2018 KSA-vergunde online casino's met eigen geld en publiceerde eerder over verantwoord spelen, iDEAL-betalingen en bonusvoorwaarden.",
    url: `${SITE}/redactiebeleid`,
  },
  "redactie": {
    slug: "redactie",
    name: "Redactie Buitenlandse Casino",
    role: "Onafhankelijke redactie",
    bio: "De redactie van Buitenlandse Casino test KSA-vergunde online casino's met eigen geld en publiceert onafhankelijke reviews voor Nederlandse spelers.",
    url: `${SITE}/redactiebeleid`,
  },
};

export const defaultAuthor = authors["mark-de-vries"];

export function authorJsonLd(a: Author) {
  return {
    "@type": "Person",
    name: a.name,
    url: a.url,
    jobTitle: a.role,
    description: a.bio,
    ...(a.sameAs ? { sameAs: a.sameAs } : {}),
  };
}

export function publisherJsonLd() {
  return {
    "@type": "Organization",
    name: "Buitenlandse Casino",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/og-default.jpg`,
    },
  };
}