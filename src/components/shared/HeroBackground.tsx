/**
 * Figma-accurate hero section background (node 1:11)
 * - Base: #f4f2ee (Pampas)
 * - Texture: tiled 128px pattern with mix-blend-overlay
 * - Stripe columns: 8 left + 8 right fading inward from each edge
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 bg-[#f4f2ee] pointer-events-none overflow-hidden">
      {/* Tiled texture with mix-blend-overlay */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-60"
        style={{
          backgroundImage: "url('/images/texture.png')",
          backgroundSize: "128px 128px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Stripe columns — left half: fade from left edge inward */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 flex items-stretch" style={{ maskImage: "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`l-${i}`}
              className="h-full shrink-0 bg-gradient-to-r from-white/50 to-transparent"
              style={{ width: 82, minWidth: 70 }}
            />
          ))}
        </div>

        {/* Stripe columns — right half: fade from right edge inward */}
        <div className="flex-1 flex items-stretch justify-end" style={{ maskImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`r-${i}`}
              className="h-full shrink-0 bg-gradient-to-l from-white/50 to-transparent"
              style={{ width: 82, minWidth: 70 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
