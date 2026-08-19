"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher.",
    name: "Jacob Jones",
    role: "Student, National University",
  },
  {
    quote:
      "The quality of instruction is outstanding. I went from zero knowledge to building real projects in just a few weeks.",
    name: "Sarah Mitchell",
    role: "Frontend Developer",
  },
  {
    quote:
      "GrowBiz Academy gave me the confidence and skills to transition into tech. The community support is incredible.",
    name: "David Park",
    role: "Career Switcher",
  },
  {
    quote:
      "As a team lead, I enrolled my entire department. The business strategy courses transformed how we operate.",
    name: "Amara Osei",
    role: "Operations Manager",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setActive((prev) => (prev + 1) % testimonials.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-[#F5F1FF] px-5 py-20 md:px-16 md:py-24"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="mx-auto max-w-[850px] text-center">
        <p className="mb-2 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
          Testimonials
        </p>
        <h2 className="mb-10 font-heading text-3xl font-bold text-[#0F172A] md:text-4xl">
          What Our Learners Say
        </h2>

        <div className="mx-auto mb-5 h-0.5 w-8 rounded-full bg-[#7C3AED]" />

       

        <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center">
  <Image
    src="/logo.png"
    alt="GrowBiz"
    width={50}
    height={50}
    className="h-10 w-10 object-contain scale-[1.7]"
  />
</div>

        <div className="relative mx-auto min-h-[90px] max-w-[750px]">
          {testimonials.map((t, i) => (
            <p
              key={i}
              className={`absolute inset-0 font-heading text-2xl font-medium leading-snug text-[#0F172A] transition-all duration-500 md:text-[32px] md:leading-[1.3] ${
                i === active
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              {t.quote}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-1.5">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-[#E5E7EB] bg-gradient-to-br from-[#f59e0b]/30 to-[#7C3AED]/30">
            <div className="flex h-full w-full items-center justify-center">
              <span className="font-heading text-xs font-bold text-[#0F172A]">
                {testimonials[active].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
          <p className="font-heading text-sm font-semibold text-[#0F172A]">
            {testimonials[active].name}
          </p>
          <p className="text-xs text-[#64748B]">
            {testimonials[active].role}
          </p>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-[#7C3AED]"
                  : "w-2 bg-[#EDE9FE] hover:bg-[#DDD6FE]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
