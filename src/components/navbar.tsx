"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" },
  // { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl"
      style={{ borderRadius: 0 }}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] text-sm font-bold text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]">
            G
          </span>
          <span>
            GrowBiz<span className="text-[#d3bbff]"> Academy</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-[20px] px-4 py-2 text-sm font-medium text-[#ccc3d7] transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-[20px] px-4 py-2 text-sm font-medium text-[#ccc3d7] transition-colors hover:text-white"
          >
            Login
          </Link>
          <Link href="/enroll">
            <Button
              className="rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)] transition-shadow hover:shadow-[0_0_24px_rgba(124,58,237,0.55)]"
            >
              Enroll Now
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#ccc3d7] transition-colors hover:bg-white/5 hover:text-white lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 bg-[#0F172A]/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[400px] pb-6" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-5 pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-[20px] px-4 py-2.5 text-sm font-medium text-[#ccc3d7] transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-col gap-3 px-5">
          <Link
            href="/login"
            className="rounded-[20px] px-4 py-2.5 text-center text-sm font-medium text-[#ccc3d7] transition-colors hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
          <Link href="/enroll" onClick={() => setMobileOpen(false)}>
            <Button
              className="w-full rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)] transition-shadow hover:shadow-[0_0_24px_rgba(124,58,237,0.55)]"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
