"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  LayoutGrid,
  Palette,
  Code,
  Smartphone,
  Briefcase,
  Cpu,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "All Courses", href: "/courses", icon: LayoutGrid },
  { label: "Design", href: "/courses/design", icon: Palette },
  { label: "Development", href: "/courses/development", icon: Code },
  { label: "Mobile Development", href: "/courses/mobile-development", icon: Smartphone },
  { label: "Business", href: "/courses/business", icon: Briefcase },
  { label: "AI & Technology", href: "/courses/ai-technology", icon: Cpu },
  { label: "Digital Skills", href: "/courses/digital-skills", icon: Globe },
];

export function CoursesSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeLabel =
    sidebarLinks.find((l) => l.href === pathname)?.label || "All Courses";

  return (
    <>
      <aside className="sticky top-20 hidden h-fit w-[220px] shrink-0 lg:block">
        <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-3">
          <p className="mb-2 px-3 pt-1 font-technical text-[10px] font-medium uppercase tracking-[0.1em] text-[#958da1]">
            Browse Categories
          </p>
          <nav className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-[#7C3AED]/20 to-[#6D28D9]/10 text-white shadow-[0_0_12px_rgba(124,58,237,0.1)]"
                      : "text-[#958da1] hover:-translate-y-px hover:bg-white/[0.05] hover:text-[#ccc3d7]"
                  )}
                >
                  <link.icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      isActive ? "text-[#d3bbff]" : "text-[#958da1]"
                    )}
                  />
                  {link.label}
                  {isActive && (
                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      <div className="relative mb-6 flex justify-end lg:hidden">
        <div className="inline-block">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-white"
          >
            {activeLabel}
            <ChevronDown
              className={cn(
                "h-4 w-4 text-[#958da1] transition-transform",
                mobileOpen && "rotate-180"
              )}
            />
          </button>
          {mobileOpen && (
            <div className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#0F172A]/95 p-2 backdrop-blur-xl">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors",
                      isActive
                        ? "bg-[#7C3AED]/[0.12] font-medium text-white"
                        : "text-[#958da1] hover:bg-white/[0.04] hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
