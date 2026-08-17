"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { allCourses } from "@/lib/courses-data";

export function CoursesNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.categorySlug.toLowerCase().includes(q)
    );
  }, [query]);

  const mobileResults = useMemo(() => {
    const q = mobileQuery.trim().toLowerCase();
    if (!q) return [];
    return allCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.categorySlug.toLowerCase().includes(q)
    );
  }, [mobileQuery]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:px-16">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-heading text-lg font-bold tracking-tight text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] text-sm font-bold text-white shadow-[0_0_12px_rgba(124,58,237,0.4)]">
            G
          </span>
          <span className="hidden sm:inline">
            GrowBiz<span className="text-[#d3bbff]"> Academy</span>
          </span>
        </Link>

        <div className="relative hidden w-full max-w-md md:block" ref={resultsRef}>
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#958da1]" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            placeholder="Search courses..."
            className="h-9 w-full rounded-full border border-white/[0.08] bg-white/[0.04] pl-10 pr-4 text-sm text-white placeholder-[#958da1] outline-none transition-colors focus:border-[#7C3AED]/40 focus:bg-white/[0.06]"
          />
          {showResults && query.trim() && (
            <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#0F172A]/95 shadow-2xl backdrop-blur-xl">
              {results.length > 0 ? (
                <ul className="max-h-[280px] overflow-y-auto py-2">
                  {results.map((course) => (
                    <li key={course.slug}>
                      <Link
                        href={`/courses/${course.slug}`}
                        onClick={() => {
                          setQuery("");
                          setShowResults(false);
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-white/[0.05]"
                      >
                        <img
                          src={course.image}
                          alt=""
                          className="h-8 w-10 shrink-0 rounded-md object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm text-white">
                            {course.title}
                          </p>
                          <p className="text-[11px] text-[#958da1]">
                            {course.category} · {course.level}
                          </p>
                        </div>
                        <ArrowRight className="h-3 w-3 shrink-0 text-[#958da1]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm text-[#958da1]">No courses found</p>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-[20px] px-4 py-2 text-sm font-medium text-[#ccc3d7] transition-colors hover:text-white"
          >
            Login
          </Link>
          <Link href="/signup">
            <Button className="rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 py-2 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)] transition-shadow hover:shadow-[0_0_24px_rgba(124,58,237,0.55)]">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#ccc3d7] transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-white/5 bg-[#0F172A]/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-[400px] pb-5" : "max-h-0"
        )}
      >
        <div className="px-5 pt-4">
          <div className="relative mb-3">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#958da1]" />
            <input
              type="text"
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              placeholder="Search courses..."
              className="h-10 w-full rounded-full border border-white/[0.08] bg-white/[0.04] pl-10 pr-4 text-sm text-white placeholder-[#958da1] outline-none transition-colors focus:border-[#7C3AED]/40"
            />
          </div>
          {mobileQuery.trim() && (
            <div className="mb-3 max-h-[160px] overflow-y-auto rounded-xl border border-white/[0.06] bg-[#0F172A]">
              {mobileResults.length > 0 ? (
                <ul className="py-1">
                  {mobileResults.map((course) => (
                    <li key={course.slug}>
                      <Link
                        href={`/courses/${course.slug}`}
                        onClick={() => {
                          setMobileQuery("");
                          setMobileOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-[#ccc3d7] hover:text-white"
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-3 text-center text-xs text-[#958da1]">
                  No courses found
                </p>
              )}
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Link
              href="/login"
              className="rounded-[20px] px-4 py-2.5 text-center text-sm font-medium text-[#ccc3d7] transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </Link>
            <Link href="/signup" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.35)]">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
