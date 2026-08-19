"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "about-course", label: "About Course" },
  { id: "lessons", label: "Lessons" },
  { id: "learning-outcomes", label: "Learning Outcomes" },
  { id: "career-opportunities", label: "Career Opportunities" },
  { id: "about-publisher", label: "About Publisher" },
  { id: "course-certificate", label: "Course Certificate" },
  { id: "faqs", label: "FAQs" },
];

export function CourseSectionNav() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const el = document.getElementById(tabs[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveTab(tabs[i].id);
            return;
          }
        }
      }
      setActiveTab(tabs[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <div className="sticky top-[64px] z-30 border-b border-[#E5E7EB] bg-[#FFFFFF]/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-3 md:px-16">
        <nav className="flex gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "relative whitespace-nowrap px-3 py-3 text-xs font-medium transition-colors md:px-4 md:py-3.5 md:text-sm",
                activeTab === tab.id
                  ? "text-[#0F172A]"
                  : "text-[#64748B] hover:text-[#475569]"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#7C3AED]" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
