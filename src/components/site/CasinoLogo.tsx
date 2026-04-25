export function CasinoLogo({ name, brandColor, size = "md" }: { name: string; brandColor: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  const dim = size === "lg" ? "h-16 w-16 text-xl" : size === "sm" ? "h-9 w-9 text-xs" : "h-12 w-12 text-sm";
  return (
    <div
      className={`grid ${dim} place-items-center rounded-xl font-bold text-white shadow-card`}
      style={{ background: `linear-gradient(135deg, ${brandColor}, color-mix(in oklab, ${brandColor} 60%, white))` }}
      aria-label={`${name} logo`}
    >
      {initials}
    </div>
  );
}
