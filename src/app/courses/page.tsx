"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Clock,
  BarChart3,
  Palette,
  Code,
  Smartphone,
  Briefcase,
  Cpu,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { slug: "design", label: "Design", icon: Palette, count: 3 },
  { slug: "development", label: "Development", icon: Code, count: 3 },
  { slug: "mobile-development", label: "Mobile Development", icon: Smartphone, count: 1 },
  { slug: "business", label: "Business", icon: Briefcase, count: 2 },
  { slug: "ai-technology", label: "AI & Technology", icon: Cpu, count: 2 },
  { slug: "digital-skills", label: "Digital Skills", icon: Globe, count: 2 },
];

const popularCourses = [
  {
    slug: "web-design-fundamentals",
    category: "Design",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.",
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: "/webfund.png",
  },
  {
    slug: "ui-ux-design",
    category: "Design",
    title: "UI/UX Design",
    description:
      "Master intuitive user interfaces and user experiences with modern design tools.",
    duration: "4 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    image: "/ui.png",
  },
  {
    slug: "mobile-app-development",
    category: "Development",
    title: "Mobile App Development",
    description:
      "Build cross-platform apps for iOS and Android using modern frameworks.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    image: "/mobileapp.png",
  },
  {
    slug: "front-end-web-development",
    category: "Development",
    title: "Front-End Web Development",
    description:
      "Modern JavaScript frameworks, responsive layouts, and performance optimization.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Lee",
    image: "/frontend.png",
  },
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCategories = search.trim()
    ? categories.filter((c) =>
        c.label.toLowerCase().includes(search.toLowerCase())
      )
    : categories;

  return (
    <main>
      {/* ─── Hero / Header ─── */}
      <section className="px-5 pb-8 pt-10 md:px-16 md:pb-10 md:pt-14">
        <div className="mx-auto max-w-[1440px] text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Courses
          </p>
          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[44px]">
            Explore What You Can Learn
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#ccc3d7]">
            Browse expert-led courses across design, development, business, and
            more. Find the right path to grow your skills.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 w-full max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#958da1]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search categories or courses..."
              className="h-11 w-full rounded-[20px] border border-white/[0.08] bg-white/[0.03] pl-11 pr-4 text-sm text-white placeholder-[#958da1] outline-none transition-colors focus:border-[#7C3AED]/40 focus:bg-white/[0.05]"
            />
          </div>
        </div>
      </section>

      {/* ─── Categories Grid ─── */}
      <section className="px-5 pb-14 md:px-16 md:pb-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
              Browse by Category
            </h2>
            <span className="text-xs text-[#958da1]">
              {filteredCategories.length} categories
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/courses/${cat.slug}`}
                className="group flex items-center gap-4 rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/[0.04] hover:shadow-[0_4px_20px_rgba(124,58,237,0.1)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED]/15 transition-all group-hover:bg-[#7C3AED]/25 group-hover:shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                  <cat.icon className="h-5 w-5 text-[#d3bbff]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-[#958da1]">
                    {cat.count} course{cat.count !== 1 ? "s" : ""}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#958da1] transition-all group-hover:translate-x-0.5 group-hover:text-[#d3bbff]" />
              </Link>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <p className="py-12 text-center text-sm text-[#958da1]">
              No categories match your search.
            </p>
          )}
        </div>
      </section>

      {/* ─── Popular Courses ─── */}
      <section className="px-5 pb-20 md:px-16 md:pb-24">        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
              Popular Courses
            </h2>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#d3bbff] transition-colors hover:text-white"
            >
              View All Courses
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularCourses.map((course) => (
              <div
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden border-b border-white/[0.06]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2 py-0.5 backdrop-blur-sm">
                    <Clock className="h-2.5 w-2.5 text-[#958da1]" />
                    <span className="text-[9px] font-medium text-[#ccc3d7]">
                      {course.duration}
                    </span>
                  </div>
                  <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2 py-0.5 backdrop-blur-sm">
                    <BarChart3 className="h-2.5 w-2.5 text-[#958da1]" />
                    <span className="text-[9px] font-medium text-[#ccc3d7]">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <p className="mb-1.5 font-technical text-[10px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]">
                    {course.category}
                  </p>
                  <h3 className="mb-1.5 text-sm font-semibold text-white">
                    {course.title}
                  </h3>
                  <p className="mb-3 flex-1 text-xs leading-relaxed text-[#958da1] line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
                    <div className="flex items-center gap-1.5">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
                      <span className="text-[11px] text-[#ccc3d7]">
                        {course.instructor}
                      </span>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-[11px] font-medium text-[#d3bbff] transition-colors hover:text-white"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
