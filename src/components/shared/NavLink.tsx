import Link from "next/link";

interface NavLinkProps {
  label: string;
  href: string;
}

export function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="font-[family-name:var(--font-geist)] font-medium text-base text-black tracking-[-0.48px] px-1 py-0.5 cursor-pointer hover:opacity-70 transition-opacity"
    >
      {label}
    </Link>
  );
}
