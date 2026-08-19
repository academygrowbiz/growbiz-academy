"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I enroll in multiple courses at once?",
    answer:
      "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience. There is no limit to the number of courses you can take.",
  },
  {
    question: "Enrollment Process for Different Courses",
    answer:
      "Simply browse our course catalog, select the course you're interested in, and click Enroll. You'll get instant access to all course materials and can start learning right away.",
  },
  {
    question: "What kind of support can I expect from instructors?",
    answer:
      "Our instructors provide regular feedback, host live Q&A sessions, and are available through the course discussion forums. You can expect responses within 24–48 hours.",
  },
  {
    question:
      "Are the courses self-paced or do they have specific start and end dates?",
    answer:
      "Most courses are self-paced, allowing you to learn on your own schedule. Some programs may have cohort-based start dates which will be clearly indicated.",
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer:
      "Prerequisites vary by course. Beginner courses have no prerequisites, while intermediate and advanced courses may require prior knowledge. Check the course page for details.",
  },
  {
    question: "Can I download the course materials for offline access?",
    answer:
      "Yes, most course materials including videos, slides, and resources can be downloaded for offline viewing through our mobile and desktop apps.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-[#FAF9FF] px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-16">
          {/* Left: Header */}
          <div>
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              FAQ
            </p>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
              Still have questions? Contact our team at{" "}
              <span className="text-[#7C3AED]">support@growbiz.com</span>
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-[#F1F5F9]"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                  >
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isOpen ? "text-[#0F172A]" : "text-[#475569]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-all ${
                        isOpen
                          ? "bg-[#7C3AED]/20 text-[#7C3AED]"
                          : "bg-[#F5F1FF] text-[#64748B]"
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
                    <p className="text-sm leading-relaxed text-[#64748B]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
