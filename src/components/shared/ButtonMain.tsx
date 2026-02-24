import { ArrowRightIcon } from "@/icons";

interface ButtonMainProps {
  label: string;
  variant?: "black" | "yellow" | "outline";
  onClick?: () => void;
  className?: string;
}

export function ButtonMain({ label, variant = "black", onClick, className = "" }: ButtonMainProps) {
  const base = "flex gap-3 h-11 items-center justify-center rounded-[32px] cursor-pointer transition-opacity hover:opacity-90";

  if (variant === "outline") {
    return (
      <button onClick={onClick} className={`${base} px-5 py-3 border border-black ${className}`}>
        <span className="font-[family-name:var(--font-geist)] font-medium text-base text-black tracking-[-0.48px]">
          {label}
        </span>
      </button>
    );
  }

  const bg = variant === "black" ? "bg-black shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)]" : "bg-[var(--color-highlight)] shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)]";
  const textColor = variant === "black" ? "text-white" : "text-black";
  const arrowBg = variant === "black" ? "bg-white" : "bg-black";
  const arrowStroke = variant === "black" ? "black" : "white";

  return (
    <button onClick={onClick} className={`${base} ${bg} pl-4 pr-2 py-2 ${className}`}>
      <span className={`font-[family-name:var(--font-geist)] font-medium text-base ${textColor} tracking-[-0.48px]`}>
        {label}
      </span>
      <div className={`${arrowBg} flex items-center rounded-full overflow-hidden`}>
        <ArrowRightIcon className="size-7" stroke={arrowStroke} />
      </div>
    </button>
  );
}
