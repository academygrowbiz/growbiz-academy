import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { CoursesSidebar } from "@/components/courses-sidebar";
import { allCourses } from "@/lib/courses-data";

const popularCourses = allCourses.filter((c) => !c.trending).slice(0, 4);
const trendingCourses = allCourses.filter((c) => c.trending).slice(0, 4);

export default function CoursesPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="relative h-[220px] w-full md:h-[270px]">
          <img
            src="/courseshero.png"
            alt="GrowBiz Academy Courses"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/40" />
          <div className="absolute inset-0 flex items-center px-5 md:px-16">
            <div className="mx-auto w-full max-w-[1440px]">
              <p className="mb-2 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
                Explore Courses
              </p>
              <h1 className="max-w-lg font-heading text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-[42px]">
                Skills That Open Doors, Courses That Deliver
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#ccc3d7]">
                Expert-led courses in design, development, AI, business and
                digital skills — built for professionals ready to grow.
              </p>
              <Link href="#courses-content" className="mt-5 inline-block">
                <Button className="h-10 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.3)] transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]">
                  Browse Categories
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="courses-content" className="px-5 py-10 md:px-16 md:py-14">
        <div className="mx-auto flex max-w-[1440px] gap-10">
          <CoursesSidebar />

          <div className="min-w-0 flex-1">
            <div className="mb-10">
              <h2 className="mb-5 font-heading text-xl font-bold text-white md:text-2xl">
                Popular Courses
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {popularCourses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="mb-1 font-heading text-xl font-bold text-white md:text-2xl">
                Trending Courses
              </h2>
              <p className="mb-5 text-sm text-[#958da1]">
                Courses gaining momentum this month across all categories.
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {trendingCourses.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>

            <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] px-6 py-8 md:px-8 md:py-8">
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                Learn Skills That Matter
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#958da1]">
                GrowBiz Academy offers expert-led courses across design,
                development, business strategy, AI &amp; technology, and digital
                skills. Each course is built around practical outcomes — helping
                you build real projects, earn certificates, and advance your
                career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
