import Link from "next/link";
import { FOOTER } from "@/lib/constants";
import { XIcon, InstagramIcon, LinkedInIcon, PagesIcon } from "@/icons";

export function Footer() {
  return (
    <footer className="w-full p-3 md:p-5 relative z-10">
      <div className="bg-[#f0ece6] rounded-[20px] md:rounded-[32px] overflow-hidden py-10 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] flex flex-col gap-12 md:gap-20">
          {/* Row 1: Newsletter + Pages nav */}
          <div className="flex flex-col md:flex-row items-start md:justify-between gap-8 md:gap-10">
            {/* Newsletter */}
            <div className="flex flex-col gap-5 w-full md:max-w-[600px]">
              <h3 className="font-[family-name:var(--font-albert-sans)] text-[24px] md:text-[30px] leading-[1.3] tracking-[-0.96px] md:tracking-[-1.2px] text-[#605f5f]">
                {FOOTER.newsletter.title}
              </h3>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder={FOOTER.newsletter.placeholder}
                  className="w-full bg-[#f4f2ee] rounded-[50px] pl-4 md:pl-5 pr-[130px] py-[15px] font-[family-name:var(--font-geist)] text-base text-black tracking-[-0.48px] outline-none placeholder:text-[#aeaeae]"
                />
                <button className="absolute right-[5px] top-[5px] bottom-[5px] bg-black text-white rounded-[45px] px-5 font-[family-name:var(--font-geist)] font-medium text-base tracking-[-0.48px] cursor-pointer hover:opacity-90 transition-opacity shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
                  {FOOTER.newsletter.cta}
                </button>
              </div>
            </div>

            {/* Pages nav */}
            <div className="flex gap-8 md:gap-10 items-start shrink-0">
              <div className="flex items-center gap-2">
                <PagesIcon className="size-6 text-[#605f5f]" />
                <span className="font-[family-name:var(--font-albert-sans)] text-[20px] leading-[26px] tracking-[-0.8px] text-[#605f5f]">
                  Pages
                </span>
              </div>
              <nav className="flex flex-col">
                {FOOTER.pages.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    className="font-[family-name:var(--font-geist)] text-[18px] leading-[25.2px] tracking-[-0.54px] text-black p-1 hover:opacity-70 transition-opacity"
                  >
                    {page.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Row 2: Socials + email | copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-end md:justify-between gap-6 md:gap-0">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="bg-white/40 rounded-full p-2 cursor-pointer hover:bg-white/60 transition-colors"
                  aria-label="X (Twitter)"
                >
                  <XIcon className="size-5 text-black" />
                </a>
                <a
                  href="#"
                  className="bg-white/40 rounded-full p-2 cursor-pointer hover:bg-white/60 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="size-5 text-black" />
                </a>
                <a
                  href="#"
                  className="bg-white/40 rounded-full p-2 cursor-pointer hover:bg-white/60 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="size-5 text-black" />
                </a>
              </div>
              <h2 className="font-[family-name:var(--font-albert-sans)] text-[28px] md:text-[40px] lg:text-[56px] leading-[1.1] tracking-[-1.4px] md:tracking-[-2px] lg:tracking-[-2.8px] text-black break-all md:break-normal">
                {FOOTER.contact.email}
              </h2>
            </div>

            <span className="font-[family-name:var(--font-geist)] text-base text-[#605f5f] tracking-[-0.48px] leading-[22.4px]">
              {FOOTER.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
