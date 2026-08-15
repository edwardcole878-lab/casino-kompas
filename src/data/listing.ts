import winheroLogo from "@/assets/logos/winhero.t.asset.json";
import cristalpokerLogo from "@/assets/logos/cristalpoker.t.asset.json";
import balooLogo from "@/assets/logos/baloo.t.asset.json";
import velwinsLogo from "@/assets/logos/velwins.t.asset.json";
import spinmillsLogo from "@/assets/logos/spinmills.new.asset.json";
import shakebetLogo from "@/assets/logos/shakebet.t.asset.json";
import wildiesLogo from "@/assets/logos/wildies.t.asset.json";
import mrpunterLogo from "@/assets/logos/mrpunter.t.asset.json";
import spininioLogo from "@/assets/logos/spininio.t.asset.json";

export type ListingCasino = {
  rank: number;
  name: string;
  slug: string;
  logo: string;
  rating: number;
  bonus: string;
  freeSpins: string;
  minDeposit: string;
  license: string;
  payoutSpeed: string;
  pros: string[];
  cta: string;
};

export const listingCasinos: ListingCasino[] = [
  {
    rank: 1,
    name: "Winhero",
    slug: "winhero",
    logo: winheroLogo.url,
    rating: 5.0,
    bonus: "325% tot €3.750",
    freeSpins: "500 Free Spins",
    minDeposit: "€20",
    license: "Curaçao / Costa Rica",
    payoutSpeed: "~15 min",
    pros: [
      "Welkomstpakket tot €3.750 + 500 FS",
      "3000+ games én sportsbook",
      "Dagelijkse cashback & missions",
    ],
    cta: "https://goplaywithstars.com/tfaffuzzb",
  },
  {
    rank: 2,
    name: "Wildies",
    slug: "wildies",
    logo: wildiesLogo.url,
    rating: 4.9,
    bonus: "150% tot €1.000",
    freeSpins: "100 Free Spins",
    minDeposit: "€20",
    license: "Curaçao",
    payoutSpeed: "~30 min",
    pros: [
      "Pakket tot €3.250 + extra spins",
      "Casino én sportsbook in één",
      "Snelle iDEAL-opnames",
    ],
    cta: "https://wildies1.com/api/v3/offer/155?aff_sub=TrustPilot&aff_sub2={clickid}&affiliate_id=132&url_id=532",
  },
  {
    rank: 3,
    name: "CristalPoker",
    slug: "cristalpoker",
    logo: cristalpokerLogo.url,
    rating: 4.9,
    bonus: "100% tot €500",
    freeSpins: "25 Free Spins",
    minDeposit: "€20",
    license: "Curaçao — Antillephone",
    payoutSpeed: "~35 min",
    pros: [
      "Direct uitbetaalbare welkomstbonus",
      "Snelle uitbetaling (~35 min)",
      "No-deposit free spins bij registratie",
    ],
    cta: "https://record.cristalaffiliates.com/_dqE1Gz9m5lnUOsjNOfgKeWNd7ZgqdRLk/1",
  },
  {
    rank: 4,
    name: "Baloo",
    slug: "baloo",
    logo: balooLogo.url,
    rating: 4.8,
    bonus: "100% tot €1.250 (pakket tot €4.000)",
    freeSpins: "675 Free Spins",
    minDeposit: "€20",
    license: "Curaçao — Hollycorn N.V.",
    payoutSpeed: "~50 min",
    pros: [
      "675 free spins over 4 stortingen",
      "7000+ games, 80+ providers",
      "Cashback & rakeback tot 20%, eigen apps",
    ],
    cta: "https://gobooplay.com/txe84kaq5",
  },
  {
    rank: 5,
    name: "MrPunter",
    slug: "mrpunter",
    logo: mrpunterLogo.url,
    rating: 4.7,
    bonus: "100% tot €500",
    freeSpins: "tot 200 Free Spins",
    minDeposit: "€20",
    license: "Curaçao",
    payoutSpeed: "~40 min",
    pros: [
      "Tot 200 free spins bij 1e storting",
      "Wekelijkse reload-bonussen",
      "Groot slots- én live casino-aanbod",
    ],
    cta: "https://mrp.kronvax.com/?mid=381739_2214567",
  },
  {
    rank: 6,
    name: "Velwins",
    slug: "velwins",
    logo: velwinsLogo.url,
    rating: 4.7,
    bonus: "400% tot €2.200",
    freeSpins: "350 Free Spins",
    minDeposit: "€25",
    license: "Anjouan — Fortuna Games N.V.",
    payoutSpeed: "~25 min",
    pros: [
      "Apart sport-welkomstpakket tot €1.000",
      "Dagelijkse cashback 10–35%",
      "Min. opname slechts €10",
    ],
    cta: "https://record.hexaffiliates.io/_hChiLzFJeCLBIopaNv7uDWNd7ZgqdRLk/1/?pg=1",
  },
  {
    rank: 7,
    name: "Spinmills",
    slug: "spinmills",
    logo: spinmillsLogo.url,
    rating: 4.6,
    bonus: "400% tot €2.200",
    freeSpins: "350 Free Spins",
    minDeposit: "€25",
    license: "Anjouan — Buscarar SRL",
    payoutSpeed: "~45 min",
    pros: [
      "Enorm aanbod: 9000+ games",
      "Bonus over 5 stortingen",
      "iDEAL én crypto",
    ],
    cta: "https://record.hexaffiliates.io/_hChiLzFJeCLiFUAaTMnmeGNd7ZgqdRLk/1/?pg=2",
  },
  {
    rank: 8,
    name: "Shakebet",
    slug: "shakebet",
    logo: shakebetLogo.url,
    rating: 4.5,
    bonus: "100% tot €2.000 (pakket tot €7.000)",
    freeSpins: "350 Free Spins",
    minDeposit: "€20",
    license: "Anjouan / Comoros",
    payoutSpeed: "~30 min",
    pros: [
      "Gunstige bonusvoorwaarden",
      "Nederlandstalige live chat",
      "Free spins op Book of Dead",
    ],
    cta: "https://record.shakepartners.com/_4QIgC6d2ZO5hg6WO2I1rgWNd7ZgqdRLk/1/?pg=1",
  },
  {
    rank: 9,
    name: "Spininio",
    slug: "spininio",
    logo: spininioLogo.url,
    rating: 4.4,
    bonus: "Pakket tot €1.000",
    freeSpins: "125% op 1e storting",
    minDeposit: "€10",
    license: "Curaçao",
    payoutSpeed: "~55 min",
    pros: [
      "Welkomstpakket tot €1.000",
      "Maandelijkse free spins reload",
      "Toernooien en Spin & Win-acties",
    ],
    cta: "https://go.spininio.online/visit/?bta=35494&nci=7816",
  },
];
