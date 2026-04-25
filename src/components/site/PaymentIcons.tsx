import type { PaymentMethod } from "@/data/casinos";

const colors: Record<PaymentMethod, string> = {
  iDEAL: "oklch(0.7 0.18 320)",
  Bancontact: "oklch(0.55 0.15 250)",
  Visa: "oklch(0.4 0.12 250)",
  Mastercard: "oklch(0.6 0.18 30)",
  PayPal: "oklch(0.55 0.15 240)",
  Crypto: "oklch(0.7 0.18 60)",
  Trustly: "oklch(0.55 0.16 145)",
  Klarna: "oklch(0.85 0.1 350)",
  Skrill: "oklch(0.65 0.2 290)",
};

export function PaymentIcons({ methods, max = 5 }: { methods: PaymentMethod[]; max?: number }) {
  const visible = methods.slice(0, max);
  const rest = methods.length - visible.length;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {visible.map((m) => (
        <span
          key={m}
          className="inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold text-white"
          style={{ background: colors[m], borderColor: colors[m] }}
        >
          {m}
        </span>
      ))}
      {rest > 0 && (
        <span className="text-[10px] font-semibold text-muted-foreground">+{rest}</span>
      )}
    </div>
  );
}
