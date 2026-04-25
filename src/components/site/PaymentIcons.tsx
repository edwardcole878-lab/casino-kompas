import { type PaymentMethod, paymentLogoUrl } from "@/data/casinos";

/**
 * Payment methods rendered as small rounded pill chips with a thin border.
 * If a brand logo is registered in `paymentLogoUrl`, it renders as an <img>;
 * otherwise the method name is shown as text.
 */
export function PaymentIcons({ methods, max = 6 }: { methods: PaymentMethod[]; max?: number }) {
  const visible = methods.slice(0, max);
  const rest = methods.length - visible.length;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {visible.map((m) => {
        const logo = paymentLogoUrl[m];
        return (
          <span
            key={m}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-semibold text-foreground/80 shadow-sm"
          >
            {logo ? (
              <img src={logo} alt={`${m} logo`} className="h-3 w-auto object-contain" />
            ) : (
              <span>{m}</span>
            )}
          </span>
        );
      })}
      {rest > 0 && (
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
          +{rest}
        </span>
      )}
    </div>
  );
}
