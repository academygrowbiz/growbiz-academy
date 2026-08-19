"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, PlayCircle, FileText, PenLine, Clock, HelpCircle, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseModule } from "@/lib/courses-data";

interface CourseContentAccordionProps {
  modules: CourseModule[];
  totalLessons: number;
  totalHours: number;
  totalAssignments: number;
  courseSlug: string;
  categorySlug: string;
}

export function CourseContentAccordion({
  modules,
  totalLessons,
  totalHours,
  totalAssignments,
  courseSlug,
  categorySlug,
}: CourseContentAccordionProps) {
  const [openModules, setOpenModules] = useState<Set<number>>(new Set());
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleModule = (index: number) => {
    if (allExpanded) {
      setOpenModules((prev) => {
        const next = new Set(prev);
        if (next.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        if (next.size < modules.length) setAllExpanded(false);
        return next;
      });
    } else {
      setOpenModules((prev) => {
        if (prev.has(index)) {
          return new Set();
        }
        return new Set([index]);
      });
    }
  };

  const toggleAll = () => {
    if (allExpanded) {
      setOpenModules(new Set());
      setAllExpanded(false);
    } else {
      setOpenModules(new Set(modules.map((_, i) => i)));
      setAllExpanded(true);
    }
  };

  const totalVideos = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.type === "video").length,
    0
  );
  const totalArticles = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.type === "article").length,
    0
  );

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircle className="h-4 w-4 shrink-0 text-[#7C3AED]" />;
      case "exercise":
        return <PenLine className="h-4 w-4 shrink-0 text-[#f59e0b]" />;
      case "article":
        return <FileText className="h-4 w-4 shrink-0 text-[#3B82F6]" />;
      case "quiz":
        return <HelpCircle className="h-4 w-4 shrink-0 text-[#10b981]" />;
      case "assignment":
        return <ClipboardList className="h-4 w-4 shrink-0 text-[#f59e0b]" />;
      default:
        return <PlayCircle className="h-4 w-4 shrink-0 text-[#7C3AED]" />;
    }
  };

  const getLessonTypeLabel = (type: string) => {
    switch (type) {
      case "video": return "Video";
      case "exercise": return "Exercise";
      case "article": return "Article";
      case "quiz": return "Quiz";
      case "assignment": return "Assignment";
      default: return "";
    }
  };

  return (
    <div>
      {/* Stats Row */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] md:gap-3 md:text-sm">
          <span>{totalLessons} Lessons</span>
          <span className="text-[#E5E7EB]">•</span>
          <span>{totalVideos} Videos</span>
          <span className="text-[#E5E7EB]">•</span>
          <span>{totalArticles} Articles</span>
          <span className="text-[#E5E7EB]">•</span>
          <span>{totalAssignments} Assignments</span>
          <span className="text-[#E5E7EB]">•</span>
          <span>{totalHours}h Completion Time</span>
        </div>
        <button
          onClick={toggleAll}
          className="text-xs font-medium text-[#7C3AED] transition-colors hover:text-[#6D28D9] md:text-sm"
        >
          {allExpanded ? "Collapse All" : "Expand All Lessons"}
        </button>
      </div>

      {/* Modules */}
      <div className="divide-y divide-[#F1F5F9] overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-[#FFFFFF]">
        {modules.map((module, index) => {
          const isOpen = openModules.has(index);
          const sectionCount = module.lessons.length;
          const totalDuration = module.lessons.reduce((acc, l) => {
            const mins = parseInt(l.duration);
            return acc + (isNaN(mins) ? 0 : mins);
          }, 0);

          return (
            <div key={index}>
              <button
                onClick={() => toggleModule(index)}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-[#FAF9FF] md:px-6"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors",
                    isOpen
                      ? "border-[#DDD6FE] bg-[#EDE9FE]"
                      : "border-[#E5E7EB] bg-[#FAF9FF]"
                  )}>
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5 text-[#7C3AED]" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-[#64748B]" />
                    )}
                  </div>
                  <span className={cn(
                    "truncate text-sm font-medium",
                    isOpen ? "text-[#0F172A]" : "text-[#475569]"
                  )}>
                    {module.title}
                  </span>
                </div>
                <span className="shrink-0 whitespace-nowrap text-xs text-[#64748B]">
                  {sectionCount} Lessons · {totalDuration} min
                </span>
              </button>

              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#F1F5F9] bg-[#FAF9FF] px-4 py-2 md:px-6">
                    {module.lessons.map((lesson, lIndex) => (
                      <Link
                        key={lIndex}
                        href={`/courses/${categorySlug}/${courseSlug}#lesson-${index}-${lIndex}`}
                        className="flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-[#F5F1FF] active:bg-[#EDE9FE]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          {getLessonIcon(lesson.type)}
                          <span className="truncate text-sm text-[#475569]">
                            {lesson.title}
                          </span>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className="hidden text-[10px] uppercase tracking-wide text-[#64748B]/70 sm:inline">
                            {getLessonTypeLabel(lesson.type)}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3 text-[#64748B]" />
                            <span className="text-xs text-[#64748B]">{lesson.duration}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
