import Image from "next/image";
import { ABOUT_PAGE } from "@/lib/constants";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerContainer";

function TeamCard({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="relative w-full aspect-[297.59/347.55] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="bg-white/60 rounded-2xl py-4 px-4 flex flex-col gap-0">
        <h3 className="font-[family-name:var(--font-geist)] text-lg leading-[25.2px] tracking-[-0.54px] text-black">
          {name}
        </h3>
        <p className="font-[family-name:var(--font-geist)] text-base leading-[22.4px] tracking-[-0.48px] text-[#605f5f]">
          {role}
        </p>
      </div>
    </div>
  );
}

export function TeamSection() {
  const { team } = ABOUT_PAGE;

  return (
    <section className="relative w-full bg-[#f4f2ee]">
      {/* Background texture */}
      <div className="absolute inset-0 mix-blend-overlay opacity-30 pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat bg-[length:128px_128px]"
          style={{ backgroundImage: "url('/images/texture.png')" }}
        />
      </div>

      <div className="relative flex items-center justify-center px-5 md:px-10">
        <div className="max-w-[1200px] w-full py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-0 lg:justify-between">
          {/* Left: Sticky heading */}
          <div className="flex flex-col max-w-[600px] lg:w-[343px] shrink-0 lg:sticky lg:top-24 lg:self-start">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-center lg:justify-start w-full">
                <h2 className="font-[family-name:var(--font-albert-sans)] text-[32px] md:text-[40px] leading-[44px] tracking-[-2px] text-black text-center lg:text-left">
                  {team.title}
                </h2>
              </div>
              <p className="font-[family-name:var(--font-geist)] text-base sm:text-lg leading-[22.4px] sm:leading-[25.2px] tracking-[-0.48px] sm:tracking-[-0.54px] text-[#605f5f] text-center lg:text-left">
                {team.subtitle}
              </p>
            </div>
          </div>

          {/* Right: Team cards grid */}
          <StaggerContainer className="w-full lg:w-[603px] overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
              {team.members.map((member, index) => (
                <StaggerItem key={member.name}>
                  <TeamCard {...member} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
