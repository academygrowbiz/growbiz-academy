import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
        <h1 className="font-heading text-2xl font-bold text-white">Category Not Found</h1>
        <p className="mt-2 text-sm text-[#958da1]">This category doesn&apos;t exist yet.</p>
        <Link
          href="/courses"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#d3bbff] hover:text-white"
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
        <div className="relative h-[220px] w-full md:h-[280px]">
          <img
            src={meta.banner}
            alt={meta.label}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-[#0F172A]/40" />
          <div className="absolute inset-0 flex items-center px-5 md:px-16">
            <div className="mx-auto w-full max-w-[1440px]">
              <Link
                href="/courses"
                className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#958da1] transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3 w-3" />
                All Courses
              </Link>
              <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
                {meta.label}
              </h1>
              <p className="mt-2 max-w-lg text-sm text-[#ccc3d7]">
                {meta.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-5 py-10 md:px-16 md:py-14">
        <div className="mx-auto flex max-w-[1440px] gap-10">
          <CoursesSidebar />

          <div className="min-w-0 flex-1">
            {popular.length > 0 && (
              <div className="mb-10">
                <h2 className="mb-5 font-heading text-xl font-bold text-white md:text-2xl">
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
                <h2 className="mb-5 font-heading text-xl font-bold text-white md:text-2xl">
                  Trending in {meta.label}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {trending.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[20px] border border-white/[0.06] bg-white/[0.02] px-6 py-8 md:px-8 md:py-8">
              <h2 className="mb-3 font-heading text-lg font-bold text-white">
                About {meta.label} at GrowBiz Academy
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-[#958da1]">
                {meta.seoText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
