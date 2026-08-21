"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Digital Marketing",
    slug: "digital-skills",
    image: "/digitalmarketingbanner%20img.png",
    description:
      "Build practical skills for modern digital marketing careers.",
  },
  {
    title: "Web Development",
    slug: "development",
    image: "/webdeveloperbanner.png",
    description:
      "Build modern websites and applications with industry-ready skills.",
  },
  {
    title: "UI/UX Design",
    slug: "design",
    image: "/designbanner.png",
    description:
      "Design intuitive digital experiences from research to prototype.",
  },
  {
    title: "AI & Automation",
    slug: "ai-technology",
    image: "/aibanner.png",
    description:
      "Explore AI tools, automation, agents, and practical workflows.",
  },
  {
    title: "Graphic & Motion Design",
    slug: "design",
    image: "/designbanner.png",
    description:
      "Create engaging visual and motion content for modern brands.",
  },
  {
    title: "Business & Sales",
    slug: "business",
    image: "/businessteambanner.png",
    description:
      "Develop practical skills in sales, business development, and CRM.",
  },
];

export function ExploreLearning() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const isPaused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }
    }, 3500);
  }, []);

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoSlide]);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  const getVisibleIndices = () => {
    const indices: number[] = [];

    for (let i = 0; i < 3; i++) {
      indices.push((activeIndex + i) % cards.length);
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

    setMobileIndex(Math.min(index, cards.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth
      : 0;

    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });

    setMobileIndex(index);
  };

  return (
    <section className="relative bg-[#F5F1FF] px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
            Explore Learning
          </p>

          <h2 className="font-heading text-3xl font-bold text-[#0F172A] md:text-4xl lg:text-[40px]">
            Choose Your Career Path
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#475569]">
            Career-focused programs designed to help you build practical,
            industry-ready skills.
          </p>
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="w-[85%] flex-shrink-0 snap-start sm:w-[48%]"
              >
                <Link
                  href={`/courses/${card.slug}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-500 ${
                    index === mobileIndex
                      ? "border-[#DDD6FE] bg-[#7C3AED]/[0.06] shadow-[0_0_24px_rgba(124,58,237,0.12)]"
                      : "border-[#E5E7EB] bg-[#FFFFFF]"
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-[#0F172A]">
                      {card.title}
                    </h3>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[#64748B]">
                      {card.description}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7C3AED]">
                      Explore Program
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {cards.map((card, index) => (
              <button
                key={`${card.title}-dot`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to ${card.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === mobileIndex
                    ? "w-6 bg-[#7C3AED]"
                    : "w-2 bg-[#EDE9FE] hover:bg-[#DDD6FE]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div
            className="grid gap-5 lg:grid-cols-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {visibleIndices.map((cardIndex, position) => {
              const card = cards[cardIndex];
              const isActive = position === 0;

              return (
                <Link
                  key={`${card.title}-${cardIndex}`}
                  href={`/courses/${card.slug}`}
                  className={`group flex flex-col overflow-hidden rounded-[20px] border transition-all duration-500 ${
                    isActive
                      ? "border-[#DDD6FE] bg-[#7C3AED]/[0.06] shadow-[0_0_24px_rgba(124,58,237,0.12)]"
                      : "border-[#E5E7EB] bg-[#FFFFFF] hover:border-[#DDD6FE] hover:bg-[#F5F1FF]"
                  }`}
                >
                  {/* Card Image */}
                  <div className="relative h-36 w-full overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-[#0F172A]">
                      {card.title}
                    </h3>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-[#64748B]">
                      {card.description}
                    </p>

                    <span
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#0F172A]"
                          : "text-[#7C3AED] group-hover:text-[#0F172A]"
                      }`}
                    >
                      Explore Program
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {cards.map((card, index) => (
              <button
                key={`${card.title}-desktop-dot`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${card.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-[#7C3AED]"
                    : "w-2 bg-[#EDE9FE] hover:bg-[#DDD6FE]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}