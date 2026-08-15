import { CasinoListing } from "./CasinoListing";
import type { Casino } from "@/data/casinos";

/**
 * Site-wide canonical listing. Every page shows the exact same casino list,
 * in the same order, with the same design.
 */
export function ComparisonTable(_props: { casinos?: Casino[]; primaryCta?: string; count?: number; title?: string; [key: string]: unknown }) {
  return <CasinoListing />;
}
