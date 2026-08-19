import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/course-card";
import { CoursesSidebar } from "@/components/courses-sidebar";
import { allCourses, categoriesMeta } from "@/lib/courses-data";

export function generateStaticParams() {
  return categoriesMeta.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoriesMeta.find((c) => c.slug === category);

  if (!meta) {
    return (
      <main className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-heading text-2xl font-bold text-[#0F172A]">Category Not Found</h1>
        <p className="mt-2 text-sm text-[#64748B]">This category doesn&apos;t exist yet.</p>
        <Link
          href="/courses"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#7C3AED] hover:text-[#0F172A]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Link>
      </main>
    );
  }

  const categoryCourses = allCourses.filter((c) => c.categorySlug === category);
  const popular = categoryCourses.filter((c) => !c.trending);
  const trending = categoryCourses.filter((c) => c.trending);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="relative h-[340px] w-full md:h-[320px] lg:h-[340px]">
          <img
            src={meta.banner}
            alt={meta.label}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/40" />
          <div className="absolute inset-0 flex items-center px-5 pt-14 md:px-16 md:pt-16 lg:pt-12">
            <div className="mx-auto w-full max-w-[1440px]">
              <Link
                href="/courses"
                className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3 w-3" />
                All Courses
              </Link>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
                {meta.label}
              </h1>
              <p className="mt-2 max-w-lg text-sm text-white/80">
                {meta.description}
              </p>
              <Link href="/signup" className="mt-5 inline-block">
                <Button className="h-10 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(124,58,237,0.3)] transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.5)]">
                  Start for Free
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#FAF9FF] px-5 py-10 md:px-16 md:py-14">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-0 lg:flex-row lg:gap-10">
          <CoursesSidebar />

          <div className="min-w-0 flex-1">
            {popular.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-5 font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
                  Popular {meta.label} Courses
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {popular.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
            )}

            {trending.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-5 font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
                  Trending in {meta.label}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {trending.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[20px] border border-[#E5E7EB] bg-[#FFFFFF] px-6 py-8 md:px-8 md:py-8">
              <h2 className="mb-3 font-heading text-lg font-bold text-[#0F172A]">
                About {meta.label} at GrowBiz Academy
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#64748B]">
                {meta.seoText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
