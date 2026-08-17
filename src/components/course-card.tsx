import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.categorySlug}/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)] lg:hover:-translate-y-1 lg:hover:scale-[1.02]"
    >
      <div className="relative h-40 overflow-hidden border-b border-white/[0.06]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2 py-0.5 backdrop-blur-sm">
          <Clock className="h-2.5 w-2.5 text-[#958da1]" />
          <span className="text-[9px] font-medium text-[#ccc3d7]">{course.duration}</span>
        </div>
        <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2 py-0.5 backdrop-blur-sm">
          <BarChart3 className="h-2.5 w-2.5 text-[#958da1]" />
          <span className="text-[9px] font-medium text-[#ccc3d7]">{course.level}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]">
            {course.category}
          </p>
          <span className="font-heading text-xs font-bold text-[#d3bbff]">{course.price}</span>
        </div>
        <h3 className="mb-1.5 text-sm font-semibold text-white">{course.title}</h3>
        <p className="mb-3 flex-1 text-xs leading-relaxed text-[#958da1] line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between border-t border-white/[0.06] pt-3">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
            <span className="text-[11px] text-[#ccc3d7]">{course.instructor}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#d3bbff] transition-colors group-hover:text-white">
            View
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
