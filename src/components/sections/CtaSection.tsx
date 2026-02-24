import Image from "next/image";
import { CTA_SECTION, SOCIAL_PROOF } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonMain } from "@/components/shared/ButtonMain";

function ProfileAvatars() {
  return (
    <div className="flex -space-x-1.5">
      {SOCIAL_PROOF.profiles.map((src, i) => (
        <div key={i} className="relative size-8 rounded-full overflow-hidden shadow-[5px_8px_15px_0px_rgba(0,0,0,0.15)] border border-[#e6e6e6]">
          <Image src={src} alt="Customer" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function CtaSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-5 py-10 lg:py-20 z-10">
      <div className="w-full rounded-[20px] md:rounded-[32px] overflow-hidden relative">
        <Image src="/images/testimonial-profile-3.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative flex flex-col lg:flex-row items-start lg:justify-between gap-8 lg:gap-0 px-5 md:px-10 lg:px-[60px] py-10 lg:py-20" style={{ backgroundImage: "linear-gradient(-39.9538deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.68) 100%)" }}>
          {/* Left side */}
          <div className="flex flex-col justify-between w-full lg:max-w-[356px] gap-8 lg:gap-12">
            <SectionHeader
              title={CTA_SECTION.title}
              subtitle={CTA_SECTION.subtitle}
              align="left"
              light
            />
            <div className="flex flex-col gap-6 md:gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-[family-name:var(--font-geist)] text-base md:text-lg text-white/80 tracking-[-0.54px]">
                  {CTA_SECTION.phone}
                </span>
                <h3 className="font-[family-name:var(--font-albert-sans)] text-[20px] md:text-[26px] text-white tracking-[-1.04px] leading-[1.3]">
                  {CTA_SECTION.email}
                </h3>
              </div>

              <div className="flex gap-3 items-center w-full">
                <ProfileAvatars />
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-geist)] text-sm text-white tracking-[-0.42px]">
                    {SOCIAL_PROOF.rating}
                  </span>
                  <span className="font-[family-name:var(--font-geist)] text-sm text-white/60 tracking-[-0.42px]">
                    {SOCIAL_PROOF.customers}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[425px] lg:shrink-0">
            <div
              className="rounded-3xl backdrop-blur-[2.5px] shadow-[0px_8px_20px_0px_rgba(104,99,80,0.15)] overflow-hidden"
              style={{ backgroundImage: "linear-gradient(-39.9538deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.68) 100%)" }}
            >
              <div className="flex flex-col gap-5 md:gap-6 p-5 md:p-8">
                <div className="flex flex-col gap-2">
                  <label className="font-[family-name:var(--font-geist)] text-sm md:text-base text-white tracking-[-0.48px]">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder={CTA_SECTION.formFields.name}
                    className="bg-white/5 rounded-[20px] h-11 px-4 py-3 font-[family-name:var(--font-geist)] text-sm md:text-base text-white/60 tracking-[-0.48px] outline-none placeholder:text-white/60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-[family-name:var(--font-geist)] text-sm md:text-base text-white tracking-[-0.48px]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder={CTA_SECTION.formFields.email}
                    className="bg-white/5 rounded-[20px] h-11 px-4 py-3 font-[family-name:var(--font-geist)] text-sm md:text-base text-white/60 tracking-[-0.48px] outline-none placeholder:text-white/60"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-[family-name:var(--font-geist)] text-sm md:text-base text-white tracking-[-0.48px]">
                    Message
                  </label>
                  <textarea
                    placeholder={CTA_SECTION.formFields.message}
                    rows={4}
                    className="bg-white/5 rounded-[20px] px-4 py-3 font-[family-name:var(--font-geist)] text-sm md:text-base text-white/60 tracking-[-0.48px] outline-none resize-none placeholder:text-white/60"
                  />
                </div>

                <ButtonMain label={CTA_SECTION.submitText} variant="yellow" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
