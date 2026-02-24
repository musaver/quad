import Image from "next/image";
import { ABOUT_PAGE, SOCIAL_PROOF } from "@/lib/constants";
import { HeroBackground } from "@/components/shared/HeroBackground";

function ProfileAvatars() {
  return (
    <div className="flex -space-x-1.5">
      {SOCIAL_PROOF.profiles.map((src, i) => (
        <div
          key={i}
          className="relative size-8 rounded-full overflow-hidden shadow-[5px_8px_15px_0px_rgba(0,0,0,0.15)] border border-[#e6e6e6]"
        >
          <Image src={src} alt="Customer" fill className="object-cover" sizes="32px" />
        </div>
      ))}
    </div>
  );
}

export function AboutHeroSection() {
  const { hero } = ABOUT_PAGE;

  // images[0] = video path, images[1-2] = side photos
  const sidePhotos = hero.images.slice(1, 3);

  return (
    <section className="relative w-full overflow-hidden">
      <HeroBackground />

      <div className="relative flex flex-col items-center pt-20 md:pt-28 lg:pt-40 pb-10 lg:pb-16">
        <div className="max-w-[1200px] w-full flex flex-col items-center gap-8 lg:gap-10 px-5 md:px-10 lg:px-20">

          {/* Text content */}
          <div className="flex flex-col items-center text-center gap-5 lg:gap-6 max-w-[700px]">
            <h1 className="font-[family-name:var(--font-albert-sans)] text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-1.6px] md:tracking-[-2.2px] lg:tracking-[-2.8px] text-black">
              {hero.title}
            </h1>
            <p className="font-[family-name:var(--font-geist)] text-base lg:text-lg leading-[22.4px] lg:leading-[25.2px] tracking-[-0.48px] lg:tracking-[-0.54px] text-[var(--color-text-muted)] max-w-[520px]">
              {hero.subtitle}
            </p>
          </div>

          {/* Rating row */}
          <div className="flex gap-3 items-center">
            <ProfileAvatars />
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-geist)] text-sm text-black tracking-[-0.42px]">
                {SOCIAL_PROOF.rating}
              </span>
              <span className="font-[family-name:var(--font-geist)] text-sm text-[var(--color-text-muted)] tracking-[-0.42px]">
                {SOCIAL_PROOF.customers}
              </span>
            </div>
          </div>

          {/* Bento grid: video left + team photos right */}
          <div className="w-full flex flex-col md:flex-row gap-3 md:gap-2">

            {/* Left: Video / main image card */}
            <div className="flex-[1.1] bg-[#f0ece6] rounded-3xl p-2 md:p-3 flex items-center justify-center min-h-[240px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[440px]">
              <div className="w-full max-w-[380px] aspect-square -rotate-3">
                <div className="bg-white rounded-3xl shadow-[4px_6px_15px_0px_rgba(0,0,0,0.25)] overflow-hidden w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/about.mp4" type="video/mp4" />
                    {/* Fallback: show first photo if video missing */}
                    <Image
                      src={sidePhotos[0] ?? "/images/team-member-1.png"}
                      alt="About us"
                      fill
                      className="object-cover"
                    />
                  </video>
                </div>
              </div>
            </div>

            {/* Right: 2 stacked photos */}
            <div className="flex-1 flex flex-col gap-2">
              {sidePhotos.map((src, i) => (
                <div
                  key={i}
                  className="bg-[#f0ece6] rounded-2xl md:rounded-3xl p-2"
                  style={{ height: "clamp(140px, 19vw, 210px)" }}
                >
                  <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src={src}
                      alt={`About us photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 45vw"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
