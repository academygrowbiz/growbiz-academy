import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-technical",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowBiz Academy",
  description:
    "Elite business education for entrepreneurs and operational leaders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} dark`}
    >
      <body>{children}</body>
    </html>
  );
}
