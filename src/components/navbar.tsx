"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  User,
  GraduationCap,
  Briefcase,
  Users,
  FolderCheck,
  Trophy,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [pathwaysOpen, setPathwaysOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobilePathwaysOpen, setMobilePathwaysOpen] = useState(false);
  const [mobilePortalsOpen, setMobilePortalsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur-md py-1"
          : "bg-transparent py-2"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-[#0F172A] transition-transform"
        >
          <Image
            src="/logo.png"
            alt="GrowBiz"
            width={50}
            height={50}
            className="h-10 w-10 object-contain scale-[1.50]"
          />

          <span>
            GrowBiz<span className="text-[#7C3AED]"> Academy</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1.5 lg:flex">
          <li>
            <Link
              href="/"
              className={cn(
                "rounded-[20px] px-4 py-2 text-sm font-medium transition-all duration-200",
                pathname === "/"
                  ? "bg-[#F5F1FF] text-[#7C3AED] font-semibold"
                  : "text-[#475569] hover:bg-[#F5F1FF]/60 hover:text-[#7C3AED]"
              )}
            >
              Home
            </Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setProgramsOpen(true)}
            onMouseLeave={() => setProgramsOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-[20px] px-4 py-2 text-sm font-medium transition-all duration-200",
                programsOpen
                  ? "bg-[#F5F1FF] text-[#7C3AED]"
                  : "text-[#475569] hover:bg-[#F5F1FF]/60 hover:text-[#7C3AED]"
              )}
            >
              <span>Courses</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-[#7C3AED] transition-transform duration-200",
                  programsOpen && "rotate-180"
                )}
              />
            </button>

            {programsOpen && (
              <div className="absolute top-full -left-4 pt-2 z-50">
                <div className="w-64 rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <Link
                    href="/courses"
                    className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F1FF]"
                  >
                    <BookOpen className="h-4 w-4 text-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        All Courses
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        Explore our courses
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li
            className="relative"
            onMouseEnter={() => setPathwaysOpen(true)}
            onMouseLeave={() => setPathwaysOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-[20px] px-4 py-2 text-sm font-medium transition-all duration-200",
                pathwaysOpen
                  ? "bg-[#F5F1FF] text-[#7C3AED]"
                  : "text-[#475569] hover:bg-[#F5F1FF]/60 hover:text-[#7C3AED]"
              )}
            >
              <span>Pathways</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 text-[#7C3AED] transition-transform duration-200",
                  pathwaysOpen && "rotate-180"
                )}
              />
            </button>

            {pathwaysOpen && (
              <div className="absolute top-full left-0 pt-2 z-50">
                <div className="w-64 rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <Link
                    href="/real-projects"
                    className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F1FF]"
                  >
                    <FolderCheck className="h-4 w-4 text-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        Real Projects
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        Practical work briefs
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/internship"
                    className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F1FF]"
                  >
                    <Briefcase className="h-4 w-4 text-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        Agency Internship
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        GrowBiz Agency track
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/placement"
                    className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F1FF]"
                  >
                    <Trophy className="h-4 w-4 text-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        Placement Drive
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        Hiring partner access
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/student-success"
                    className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[#F5F1FF]"
                  >
                    <Sparkles className="h-4 w-4 text-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        Success Stories
                      </div>
                      <div className="text-[10px] text-[#64748B]">
                        Alumni case studies
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/trainers"
              className={cn(
                "rounded-[20px] px-4 py-2 text-sm font-medium transition-all duration-200",
                pathname === "/trainers"
                  ? "bg-[#F5F1FF] text-[#7C3AED] font-semibold"
                  : "text-[#475569] hover:bg-[#F5F1FF]/60 hover:text-[#7C3AED]"
              )}
            >
              Trainers
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={cn(
                "rounded-[20px] px-4 py-2 text-sm font-medium transition-all duration-200",
                pathname === "/about"
                  ? "bg-[#F5F1FF] text-[#7C3AED] font-semibold"
                  : "text-[#475569] hover:bg-[#F5F1FF]/60 hover:text-[#7C3AED]"
              )}
            >
              About Us
            </Link>
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setPortalOpen(true)}
            onMouseLeave={() => setPortalOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1.5 rounded-[20px] border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-medium text-[#475569] transition-all duration-200 hover:border-[#7C3AED]/30 hover:bg-[#F5F1FF] hover:text-[#0F172A]",
                portalOpen && "border-[#7C3AED] bg-[#F5F1FF]"
              )}
            >
              <User className="h-4 w-4 text-[#7C3AED]" />
              <span>Portal Login</span>
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  portalOpen && "rotate-180 text-[#7C3AED]"
                )}
              />
            </button>

            {portalOpen && (
              <div className="absolute top-full right-0 pt-2 z-50">
                <div className="w-52 rounded-2xl border border-[#E5E7EB] bg-white p-2 shadow-2xl animate-in fade-in-50 zoom-in-95 duration-150">
                  <Link
                    href="/login/student"
                    className="flex items-center gap-2.5 rounded-xl p-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
                  >
                    <GraduationCap className="h-4 w-4 text-[#7C3AED]" />
                    <span>Student Portal</span>
                  </Link>

                  <Link
                    href="/login/teacher"
                    className="flex items-center gap-2.5 rounded-xl p-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
                  >
                    <Briefcase className="h-4 w-4 text-[#7C3AED]" />
                    <span>Teacher Portal</span>
                  </Link>

                  <Link
                    href="/login/admin"
                    className="flex items-center gap-2.5 rounded-xl p-2.5 text-sm font-medium text-[#0F172A] hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
                  >
                    <Users className="h-4 w-4 text-[#7C3AED]" />
                    <span>Admin Portal</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact">
            <Button className="rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 active:scale-95">
              Book Counselling
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#475569] hover:bg-[#F5F1FF] hover:text-[#7C3AED] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-b border-[#E5E7EB] bg-white px-5 py-4 shadow-xl lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-1 text-sm font-medium text-[#0F172A]">
            <Link
              href="/"
              className="rounded-xl px-3 py-2.5 hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <div className="border-b border-[#F1F5F9] pb-1">
              <button
                onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left hover:bg-[#F5F1FF]"
              >
                <span>Programs</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-[#7C3AED] transition-transform duration-200",
                    mobileProgramsOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileProgramsOpen && (
                <div className="ml-3 my-1 border-l-2 border-[#7C3AED]/20 pl-3 space-y-1 text-xs">
                  <Link
                    href="/programs"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <BookOpen className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Explore All Programs
                  </Link>
                </div>
              )}
            </div>

            <div className="border-b border-[#F1F5F9] pb-1">
              <button
                onClick={() => setMobilePathwaysOpen(!mobilePathwaysOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left hover:bg-[#F5F1FF]"
              >
                <span>Pathways</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-[#7C3AED] transition-transform duration-200",
                    mobilePathwaysOpen && "rotate-180"
                  )}
                />
              </button>

              {mobilePathwaysOpen && (
                <div className="ml-3 my-1 border-l-2 border-[#7C3AED]/20 pl-3 space-y-1 text-xs">
                  <Link
                    href="/real-projects"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <FolderCheck className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Real Projects
                  </Link>

                  <Link
                    href="/internship"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Agency Internship
                  </Link>

                  <Link
                    href="/placement"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Trophy className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Placement Drive
                  </Link>

                  <Link
                    href="/student-success"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Sparkles className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Success Stories
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/trainers"
              className="rounded-xl px-3 py-2.5 hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
              onClick={() => setMobileOpen(false)}
            >
              Trainers
            </Link>

            <Link
              href="/about"
              className="rounded-xl px-3 py-2.5 hover:bg-[#F5F1FF] hover:text-[#7C3AED]"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            <div className="pt-2">
              <button
                onClick={() => setMobilePortalsOpen(!mobilePortalsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left font-bold text-[#7C3AED] hover:bg-[#F5F1FF]"
              >
                <span>Portal Logins</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-[#7C3AED] transition-transform duration-200",
                    mobilePortalsOpen && "rotate-180"
                  )}
                />
              </button>

              {mobilePortalsOpen && (
                <div className="ml-3 my-1 border-l-2 border-[#7C3AED]/20 pl-3 space-y-1 text-xs">
                  <Link
                    href="/login/student"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <GraduationCap className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Student Portal
                  </Link>

                  <Link
                    href="/login/teacher"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Briefcase className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Teacher Portal
                  </Link>

                  <Link
                    href="/login/admin"
                    className="flex items-center gap-2 py-2 text-[#475569] hover:text-[#7C3AED]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Users className="h-3.5 w-3.5 text-[#7C3AED]" />
                    Admin Portal
                  </Link>
                </div>
              )}
            </div>
          </nav>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-5 block"
          >
            <Button className="w-full rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]">
              Apply / Counselling
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}