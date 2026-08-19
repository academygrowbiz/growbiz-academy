import Link from "next/link";
import { Clock, BarChart3, ArrowRight } from "lucide-react";
import type { Course } from "@/lib/courses-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.categorySlug}/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#FFFFFF] transition-all duration-300 hover:border-[#DDD6FE] hover:shadow-[0_0_20px_rgba(124,58,237,0.08)] lg:hover:-translate-y-1 lg:hover:scale-[1.02]"
    >
      <div className="relative h-40 overflow-hidden border-b border-[#F1F5F9]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-[#FFFFFF]/90 px-2 py-0.5 backdrop-blur-sm">
          <Clock className="h-2.5 w-2.5 text-[#64748B]" />
          <span className="text-[9px] font-medium text-[#475569]">{course.duration}</span>
        </div>
        <div className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-[#FFFFFF]/90 px-2 py-0.5 backdrop-blur-sm">
          <BarChart3 className="h-2.5 w-2.5 text-[#64748B]" />
          <span className="text-[9px] font-medium text-[#475569]">{course.level}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="font-technical text-[10px] font-medium uppercase tracking-[0.08em] text-[#7C3AED]">
            {course.category}
          </p>
          <span className="font-heading text-xs font-bold text-[#7C3AED]">{course.price}</span>
        </div>
        <h3 className="mb-1.5 text-sm font-semibold text-[#0F172A]">{course.title}</h3>
        <p className="mb-3 flex-1 text-xs leading-relaxed text-[#64748B] line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between border-t border-[#F1F5F9] pt-3">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
            <span className="text-[11px] text-[#475569]">{course.instructor}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7C3AED] transition-colors group-hover:text-[#0F172A]">
            View
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}
