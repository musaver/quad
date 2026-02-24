import Image from "next/image";
import { QuoteIcon } from "@/icons";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="bg-white/40 rounded-[24px] p-6 md:p-8 h-full flex flex-col justify-between gap-6 relative overflow-hidden">
      <div className="flex gap-4 items-start">
        <div className="shrink-0 pt-1">
          <QuoteIcon className="w-10 h-[31px] text-black/10" />
        </div>
        <p className="font-[family-name:var(--font-geist)] text-base md:text-[18px] leading-[25.2px] tracking-[-0.54px] text-[#605f5f]">
          {quote}
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-[3px] pr-5">
          <span className="font-[family-name:var(--font-geist)] text-[16px] leading-[22.4px] tracking-[-0.48px] text-black">
            {author}
          </span>
          <span className="font-[family-name:var(--font-geist)] text-[16px] leading-[22.4px] tracking-[-0.48px] text-[#605f5f]">
            {role}
          </span>
        </div>
        <div className="relative w-[100px] h-[100px] md:w-[111px] md:h-[111px] rounded-[16px] overflow-hidden shrink-0">
          <Image
            src={avatar}
            alt={author}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
