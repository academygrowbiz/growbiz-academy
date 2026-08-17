import Link from "next/link";
import { Star, Clock, BarChart3, User, GraduationCap, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allCourses, categoriesMeta } from "@/lib/courses-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allCourses.map((course) => ({
    category: course.categorySlug,
    slug: course.slug,
  }));
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const course = allCourses.find(
    (c) => c.categorySlug === category && c.slug === slug
  );

  if (!course) {
    notFound();
  }

  const categoryMeta = categoriesMeta.find((c) => c.slug === category);

  return (
    <main>
      <section className="px-5 pb-14 pt-6 md:px-16 md:pb-20 md:pt-8">
        <div className="mx-auto max-w-[1440px]">
          <nav className="mb-6 flex items-center gap-2 text-xs text-[#958da1]">
            <Link href="/courses" className="transition-colors hover:text-white">
              Courses
            </Link>
            <span>/</span>
            <Link
              href={`/courses/${category}`}
              className="transition-colors hover:text-white"
            >
              {categoryMeta?.label || course.category}
            </Link>
            <span>/</span>
            <span className="text-[#ccc3d7]">{course.title}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 font-technical text-[10px] font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
                {course.category}
              </span>

              <h1 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-[36px] lg:leading-[1.2]">
                {course.title}
              </h1>

              <p className="max-w-lg text-sm leading-relaxed text-[#ccc3d7]">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-sm">
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="font-medium text-white">4.5</span>
                  <span className="text-[#958da1]">(Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#958da1]">
                  <Clock className="h-3.5 w-3.5" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1.5 text-[#958da1]">
                  <BarChart3 className="h-3.5 w-3.5" />
                  {course.level}
                </div>
                <div className="flex items-center gap-1.5 text-[#958da1]">
                  <User className="h-3.5 w-3.5" />
                  {course.instructor}
                </div>
              </div>

              <p className="pt-1 font-heading text-2xl font-bold text-white">
                {course.price}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button className="h-10 rounded-xl border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
                <Button
                  variant="ghost"
                  className="h-10 rounded-xl border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-[#ccc3d7] transition-all hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.03] shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
