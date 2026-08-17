"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    slug: "web-design-fundamentals",
    category: "Design",
    categorySlug: "design",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles for creating modern websites.",
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: "/webfund.png",
  },
  {
    slug: "ui-ux-design",
    category: "Design",
    categorySlug: "design",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and user experiences (UX). Learn design principles, prototyping, and usability testing.",
    duration: "4 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    image: "/ui.png",
  },
  {
    slug: "mobile-app-development",
    category: "Development",
    categorySlug: "mobile-development",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build cross-platform apps for iOS and Android using modern frameworks.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    image: "/mobileapp.png",
  },
  {
    slug: "graphic-design-for-beginners",
    category: "Design",
    categorySlug: "design",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, and composition. Start creating stunning visual designs.",
    duration: "6 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
    image: "/graphic.png",
  },
  {
    slug: "front-end-web-development",
    category: "Development",
    categorySlug: "development",
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end development with modern JavaScript frameworks, responsive layouts, and performance optimization.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Lee",
    image: "/frontend.png",
  },
  {
    slug: "advanced-javascript",
    category: "Development",
    categorySlug: "development",
    title: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level with advanced patterns, async programming, and modern ES6+ features.",
    duration: "7 Weeks",
    level: "Advanced",
    instructor: "Rachel Adams",
    image: "/advancejs.png",
  },
];

export function PopularCourses() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const isPaused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % courses.length);
      }
    }, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % courses.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 1;
    const index = Math.round(scrollLeft / cardWidth);
    setMobileIndex(Math.min(index, courses.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 0;
    container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    setMobileIndex(index);
  };

  return (
    <section className="relative px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Explore Programs
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[40px]">
            Our Most Popular Courses
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#ccc3d7]">
            Join our expert-led courses — the knowledge provided will help you
            grow your skills and career.
          </p>
        </div>

        {/* Mobile/Tablet horizontal carousel — native swipe, no autoplay */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="w-[78%] flex-shrink-0 snap-start sm:w-[42%]"
              >
                <Link
                  href={`/courses/${course.categorySlug}/${course.slug}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-[20px] border transition-colors duration-300 ${
                    index === mobileIndex
                      ? "border-[#7C3AED]/40 bg-[#7C3AED]/[0.04] shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                      : "border-white/[0.08] bg-white/[0.03]"
                  }`}
                >
                  <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <Clock className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.duration}
                      </span>
                    </div>
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <BarChart3 className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 font-technical text-[11px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]">
                      {course.category}
                    </p>
                    <h3 className="mb-2 font-heading text-base font-semibold text-white">
                      {course.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[#958da1]">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
                        <span className="text-xs text-[#ccc3d7]">
                          {course.instructor}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#d3bbff]">
                        View
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile/tablet */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to course ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileIndex
                    ? "w-6 bg-[#7C3AED]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid with auto-rotate + hover enlarge/elevate */}
        <div className="hidden lg:block">
          <div
            className="grid gap-6 lg:grid-cols-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {visibleIndices.map((cardIndex, position) => {
              const course = courses[cardIndex];
              const isActive = position === 0;

              return (
                <Link
                  key={cardIndex}
                  href={`/courses/${course.categorySlug}/${course.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-[20px] border transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                    isActive
                      ? "border-[#7C3AED]/40 bg-[#7C3AED]/[0.04] shadow-[0_0_20px_rgba(124,58,237,0.1)]"
                      : "border-white/[0.08] bg-white/[0.03] hover:border-white/15"
                  }`}
                >
                  <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <Clock className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.duration}
                      </span>
                    </div>

                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <BarChart3 className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="mb-2 font-technical text-[11px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]">
                      {course.category}
                    </p>

                    <h3 className="mb-2 font-heading text-base font-semibold text-white">
                      {course.title}
                    </h3>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[#958da1]">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
                        <span className="text-xs text-[#ccc3d7]">
                          {course.instructor}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#d3bbff] transition-colors group-hover:text-white">
                        View
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {courses.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to course ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-[#7C3AED]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/courses">
            <Button
              variant="ghost"
              className="h-8 border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-[#ccc3d7] backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
            >
              Explore All Courses
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
