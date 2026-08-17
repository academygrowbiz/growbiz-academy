"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { CourseFaq } from "@/lib/course-faq-data";

interface CourseFaqProps {
  faqs: CourseFaq[];
  courseTitle: string;
}

export function CourseFaqAccordion({ faqs, courseTitle }: CourseFaqProps) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-14">
      {/* Left: Header */}
      <div>
        <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
          FAQs
        </p>
        <h2 className="font-heading text-xl font-bold text-white md:text-2xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#958da1]">
          Common questions about {courseTitle}. Can&apos;t find your answer?
          Reach out at{" "}
          <span className="text-[#d3bbff]">support@growbiz.com</span>
        </p>
      </div>

      {/* Right: Accordion */}
      <div className="flex flex-col">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-white/[0.06]">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
              >
                <span
                  className={`text-sm font-medium transition-colors ${
                    isOpen ? "text-white" : "text-[#ccc3d7]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-all ${
                    isOpen
                      ? "bg-[#7C3AED]/20 text-[#d3bbff]"
                      : "bg-white/[0.05] text-[#958da1]"
                  }`}
                >
                  {isOpen ? (
                    <Minus className="h-3.5 w-3.5" />
                  ) : (
                    <Plus className="h-3.5 w-3.5" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-[#958da1]">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
