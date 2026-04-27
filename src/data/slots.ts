import type { Provider } from "./casinos";
import { casinos, type Casino } from "./casinos";

export type Slot = {
  slug: string;
  name: string;
  provider: Provider;
  rtp: number;
  volatility: "Laag" | "Medium" | "Hoog" | "Zeer hoog";
  paylines: number | string;
  maxWin: string;
  releaseYear: number;
  availableAt: string[];
  tagline: string;
  description: string;
  lastUpdated: string;
};

export const slots: Slot[] = [
  { slug: "starburst", name: "Starburst", provider: "NetEnt", rtp: 96.09, volatility: "Laag", paylines: 10, maxWin: "500x inzet", releaseYear: 2012, availableAt: ["royal-orange","tulip-spin","nederzicht-casino","spin-paleis","diamant-club","zilveren-spin","crypto-vault"], tagline: "De meest gespeelde slot ter wereld", description: "Starburst is het visitekaartje van NetEnt en al meer dan een decennium de populairste slot in Europese casino's. Lage volatiliteit, win-both-ways en een eenvoudige expanding wild — perfect voor wie free spins krijgt.", lastUpdated: "2026-04-01" },
  { slug: "book-of-dead", name: "Book of Dead", provider: "Play'n GO", rtp: 96.21, volatility: "Hoog", paylines: 10, maxWin: "5.000x inzet", releaseYear: 2016, availableAt: ["tulip-spin","delta-casino","spin-paleis","ideal-prime","zilveren-spin","nederzicht-casino"], tagline: "Egyptische klassieker met expanderende symbolen", description: "Volg Rich Wilde door de tombes van Egypte. Tijdens 10 free spins wordt één symbool expanderend — als dat de hoogste payer wordt, kunnen 5.000x inzet vallen.", lastUpdated: "2026-04-01" },
  { slug: "sweet-bonanza", name: "Sweet Bonanza", provider: "Pragmatic Play", rtp: 96.51, volatility: "Hoog", paylines: "Cluster pays", maxWin: "21.100x inzet", releaseYear: 2019, availableAt: ["royal-orange","delta-casino","live-arena","spin-paleis","diamant-club","ideal-prime","crypto-vault"], tagline: "Cluster-pays met multipliers tot 100x", description: "Een tumble-mechaniek waarbij winnende symbolen verdwijnen en nieuwe vallen. In free spins kunnen multipliers tot 100x op één tumble vallen.", lastUpdated: "2026-04-01" },
  { slug: "gates-of-olympus", name: "Gates of Olympus", provider: "Pragmatic Play", rtp: 96.5, volatility: "Hoog", paylines: "Pay anywhere", maxWin: "5.000x inzet", releaseYear: 2021, availableAt: ["royal-orange","tulip-spin","delta-casino","spin-paleis","ideal-prime"], tagline: "Zeus' multipliers tot 500x", description: "Pay-anywhere met willekeurige multiplier-symbolen die in totaal tot 500x kunnen oplopen tijdens free spins.", lastUpdated: "2026-04-01" },
  { slug: "razor-shark", name: "Razor Shark", provider: "Push Gaming", rtp: 96.7, volatility: "Zeer hoog", paylines: 20, maxWin: "25.000x inzet", releaseYear: 2019, availableAt: ["spin-paleis","crypto-vault"], tagline: "Mystery stack en oplopende multipliers", description: "Razor Shark heeft cult-status. Tijdens free spins blijft de Nudge-multiplier groeien — geduldige spelers kunnen tot 25.000x inzet zien vallen.", lastUpdated: "2026-04-01" },
  { slug: "wanted-dead-or-a-wild", name: "Wanted Dead or a Wild", provider: "Hacksaw Gaming", rtp: 96.38, volatility: "Zeer hoog", paylines: 20, maxWin: "12.500x inzet", releaseYear: 2022, availableAt: ["royal-orange","spin-paleis","ideal-prime","crypto-vault"], tagline: "Westernslot met drie unieke bonus-modes", description: "Drie verschillende free spins modes — Wanted, Dead of A Wild — elk met een eigen mechaniek.", lastUpdated: "2026-04-01" },
  { slug: "mega-moolah", name: "Mega Moolah", provider: "Microgaming", rtp: 88.12, volatility: "Medium", paylines: 25, maxWin: "Progressive jackpot (€1M+)", releaseYear: 2006, availableAt: ["delta-casino","diamant-club"], tagline: "De jackpot-koning", description: "De beroemdste progressive jackpot ter wereld. RTP is laag voor base game, maar de jackpot tikt vaak boven €5 miljoen.", lastUpdated: "2026-04-01" },
  { slug: "san-quentin", name: "San Quentin xWays", provider: "Nolimit City", rtp: 96.03, volatility: "Zeer hoog", paylines: 243, maxWin: "150.000x inzet", releaseYear: 2021, availableAt: ["spin-paleis","crypto-vault"], tagline: "Gevangenis-thema met extreme max-win", description: "Vier verschillende bonusrondes die je kunt kopen of natuurlijk kunt triggeren. Tot 150.000x inzet in de Lockdown Spins-modus.", lastUpdated: "2026-04-01" },
];

export const getSlot = (slug: string) => slots.find((s) => s.slug === slug);
export const slotsByProvider = (p: Provider) => slots.filter((s) => s.provider === p);
export const casinosForSlot = (slug: string): Casino[] => {
  const slot = getSlot(slug);
  if (!slot) return [];
  return casinos.filter((c) => slot.availableAt.includes(c.slug)).sort((a, b) => a.rank - b.rank);
};