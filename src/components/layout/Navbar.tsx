"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";
import { NavLink } from "@/components/shared/NavLink";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { MenuIcon, CloseMenuIcon } from "@/icons";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] md:w-auto">
      {/* Desktop + Mobile pill nav */}
      <nav className="bg-white flex gap-4 md:gap-8 lg:gap-14 items-center justify-between md:justify-center px-3 py-2 rounded-[58px] shadow-[0px_1px_20px_0px_rgba(224,215,198,0.5)] relative">
        <Link href="/" className="flex items-center shrink-0 ml-1">
          <Image
            src="/images/logo.png"
            alt="QUAD"
            width={105}
            height={35}
            className="h-[30px] md:h-[35px] w-auto"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-1 items-center px-2">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} label={item.label} href={item.href} />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ButtonMain label="Contact us" />
        </div>

        {/* Mobile menu pill button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center gap-3 bg-black rounded-[32px] h-[44px] pl-4 pr-2 py-2 shadow-[0px_5px_15px_0px_rgba(0,0,0,0.2)] cursor-pointer transition-opacity hover:opacity-90"
        >
          <span className="font-[family-name:var(--font-geist)] font-medium text-base text-white tracking-[-0.48px] leading-[17.6px] whitespace-nowrap">
            {mobileOpen ? "Close" : "Menu"}
          </span>
          <span className="bg-white rounded-full size-7 flex items-center justify-center shrink-0">
            {mobileOpen ? (
              <CloseMenuIcon className="size-4 text-black" />
            ) : (
              <MenuIcon className="size-4 text-black" />
            )}
          </span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-white rounded-[28px] shadow-[0px_1px_20px_0px_rgba(224,215,198,0.5)] p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-[family-name:var(--font-geist)] font-medium text-[16px] leading-[22.4px] text-black tracking-[-0.48px] py-3 px-4 rounded-[14px] hover:bg-black/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 px-1 pb-1">
            <ButtonMain label="Contact us" className="w-full justify-center" onClick={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
