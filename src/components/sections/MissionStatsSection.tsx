import Image from "next/image";
import { ABOUT_PAGE } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerContainer";

function StatCard({
  value,
  label,
  description,
  opacity = "80",
}: {
  value: string;
  label: string;
  description: string;
  opacity?: "40" | "80";
}) {
  return (
    <div
      className={`${
        opacity === "80" ? "bg-white/80" : "bg-white/40"
      } rounded-[20px] p-6 flex flex-col gap-3 lg:gap-0 lg:h-full lg:justify-between`}
    >
      <div className="flex flex-col gap-3">
        <span className="font-[family-name:var(--font-albert-sans)] text-[48px] leading-[48px] tracking-[-1.44px] text-[#1a1a1a]">
          {value}
        </span>
        <span className="font-[family-name:var(--font-geist)] text-lg leading-[25.2px] tracking-[-0.54px] text-black">
          {label}
        </span>
      </div>
      <p className="font-[family-name:var(--font-geist)] text-base leading-[22.4px] tracking-[-0.48px] text-[#605f5f] lg:mt-auto">
        {description}
      </p>
    </div>
  );
}

function PlusIcon() {
  return (
    <div className="relative w-4 h-4">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[2px] top-[2px]"
      >
        <path
          d="M6 0V12M0 6H12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function MissionStatsSection() {
  const { mission, stats } = ABOUT_PAGE;

  return (
    <section className="relative w-full bg-[#f4f2ee] overflow-hidden">
      

      <div className="relative flex items-center justify-center px-5 md:px-10">
        <div className="max-w-[1200px] w-full p-10 md:p-16 lg:p-20 flex flex-col gap-10 md:gap-16 lg:gap-20">
          {/* Mission and Stats Grid */}
          <div className="bg-[#f0ece6] rounded-3xl p-2 h-auto lg:h-[560px] flex flex-col lg:flex-row gap-2">
            {/* Mission Card */}
            <div className="relative bg-black/0 rounded-[20px] p-6 md:p-10 flex flex-col justify-between gap-10 lg:w-[420px] overflow-hidden shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25),0px_2px_4px_0px_rgba(0,0,0,0.25)]">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-[20px]">
                <Image
                  src="/images/mission-photo.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/68" />

              {/* Glow effect */}
              <div className="absolute -left-16 -top-[88px] w-[292px] h-[282px] pointer-events-none">
                <div
                  className="absolute inset-0 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-[20px] border-l-2 border-t-2 border-white/40 pointer-events-none" />

              {/* Content */}
              <div className="relative flex flex-col gap-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 16L28 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.4852 7.5146C20.0786 3.1186 13.0399 2.82793 8.28523 6.84526C3.53057 10.8613 2.64257 17.8506 6.24123 22.9293C9.8399 28.0079 16.7266 29.4866 22.0932 26.3319C27.4599 23.1773 29.5172 16.4413 26.8306 10.8266"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.2413 11.7575C18.1933 9.71212 14.9773 9.42012 12.5947 11.0641C10.212 12.7081 9.34266 15.8188 10.528 18.4588C11.7133 21.1001 14.6147 22.5188 17.4267 21.8308C20.2387 21.1441 22.1587 18.5481 21.992 15.6575"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="font-[family-name:var(--font-albert-sans)] text-[32px] md:text-[40px] leading-[44px] tracking-[-2px] text-white">
                    {mission.heading}
                  </h2>
                </div>
                <p className="font-[family-name:var(--font-geist)] text-lg leading-[25.2px] tracking-[-0.54px]">
                  <span className="text-white/80 whitespace-pre-line">
                    {mission.description}
                  </span>
                </p>
              </div>

              {/* Bottom section */}
              <div className="relative flex items-end justify-between">
                <div className="flex items-center gap-10 px-5">
                  <PlusIcon />
                  <PlusIcon />
                  <PlusIcon />
                </div>
                <div className="relative w-[120px] h-[120px] rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/mission-thumbnail.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <StaggerContainer className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-rows-2 lg:auto-rows-fr">
              <StaggerItem><StatCard {...stats[0]} opacity="40" /></StaggerItem>
              <StaggerItem><StatCard {...stats[1]} opacity="80" /></StaggerItem>
              <StaggerItem><StatCard {...stats[2]} opacity="80" /></StaggerItem>
              <StaggerItem><StatCard {...stats[3]} opacity="40" /></StaggerItem>
            </StaggerContainer>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 overflow-hidden">
            <p className="font-[family-name:var(--font-geist)] text-lg leading-[25.2px] tracking-[-0.54px] text-[#605f5f] whitespace-nowrap">
              Trusted by 50+ partners
            </p>
            <div className="relative h-8 w-full md:w-[814px] overflow-hidden">
              <div className="absolute left-0 flex items-center gap-10 animate-scroll">
                {ABOUT_PAGE.logoLabel && (
                  <>
                    <Image
                      src="/images/footer-brand-1.png"
                      alt="Partner"
                      width={145}
                      height={32}
                      className="opacity-50 h-8 w-auto"
                    />
                    <Image
                      src="/images/footer-brand-2.png"
                      alt="Partner"
                      width={168}
                      height={32}
                      className="opacity-50 h-8 w-auto"
                    />
                    <Image
                      src="/images/footer-brand-3.png"
                      alt="Partner"
                      width={144}
                      height={32}
                      className="opacity-50 h-8 w-auto"
                    />
                    <Image
                      src="/images/footer-brand-4.png"
                      alt="Partner"
                      width={156}
                      height={32}
                      className="opacity-50 h-8 w-auto"
                    />
                    <Image
                      src="/images/footer-brand-1.png"
                      alt="Partner"
                      width={145}
                      height={32}
                      className="opacity-50 h-8 w-auto"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
