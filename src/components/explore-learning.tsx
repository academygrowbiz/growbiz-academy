"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowRight,
  Cpu,
  Briefcase,
  Palette,
  TrendingUp,
  Users,
  Megaphone,
} from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "AI & Technology",
    description:
      "Lessons on AI tools and automation that cover the most recent developments.",
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    description:
      "Classes in business development that cover the most recent advancements.",
  },
  {
    icon: Palette,
    title: "Digital Skills",
    description:
      "Digital skills courses that cover the most recent trends and tools.",
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description:
      "Career development and leadership lessons for ambitious professionals.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Build the skills to lead teams, drive culture, and inspire results.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description:
      "Modern marketing strategies covering channels, analytics, and growth.",
  },
];

export function ExploreLearning() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
    }, 3500);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoSlide]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const getVisibleIndices = () => {
    const indices = [];
    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % cards.length);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Explore Learning
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[40px]">
Explore What You Can Learn          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#ccc3d7]">
            Courses across technology, business, digital skills &amp;
            professional growth — designed for ambitious learners.
          </p>
        </div>

        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {visibleIndices.map((cardIndex, position) => {
            const card = cards[cardIndex];
            const isActive = position === 0;

            return (
              <div
                key={cardIndex}
                className={`group flex flex-col rounded-[20px] border p-6 transition-all duration-500 ${
                  isActive
                    ? "border-[#7C3AED]/40 bg-[#7C3AED]/[0.06] shadow-[0_0_24px_rgba(124,58,237,0.12)]"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
                }`}
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive
                      ? "bg-[#7C3AED]/25 shadow-[0_0_12px_rgba(124,58,237,0.3)]"
                      : "bg-[#7C3AED]/15 group-hover:bg-[#7C3AED]/20"
                  }`}
                >
                  <card.icon className="h-5 w-5 text-[#d3bbff]" />
                </div>

                <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-[#958da1]">
                  {card.description}
                </p>

                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-[#d3bbff] group-hover:text-white"
                  }`}
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-[#7C3AED]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
