import type { Metadata } from "next";
import { Albert_Sans, Geist } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QUAD",
  description: "One Partner. Every Growth System. Built to Scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${geist.variable} antialiased`}>
        <div className="w-full overflow-x-hidden bg-[var(--color-page-bg)]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
