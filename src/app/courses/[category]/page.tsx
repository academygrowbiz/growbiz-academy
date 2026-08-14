import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, BarChart3 } from "lucide-react";

// All courses data
const allCourses = [
  {
    slug: "web-design-fundamentals",
    category: "design",
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles for creating modern websites.",
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: "/webfund.png",
  },
  {
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and user experiences (UX). Learn design principles, prototyping, and usability testing.",
    duration: "4 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    image: "/ui.png",
  },
  {
    slug: "graphic-design-for-beginners",
    category: "design",
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, and composition.",
    duration: "6 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
    image: "/graphic.png",
  },
  {
    slug: "mobile-app-development",
    category: "mobile-development",
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build cross-platform apps for iOS and Android.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    image: "/mobileapp.png",
  },
  {
    slug: "front-end-web-development",
    category: "development",
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end development with modern JavaScript frameworks and responsive layouts.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Lee",
    image: "/frontend.png",
  },
  {
    slug: "advanced-javascript",
    category: "development",
    title: "Advanced JavaScript",
    description:
      "Take your JavaScript skills to the next level with advanced patterns, async programming, and ES6+ features.",
    duration: "7 Weeks",
    level: "Advanced",
    instructor: "Rachel Adams",
    image: "/advancejs.png",
  },
];

const categoryMeta: Record<string, { label: string; description: string }> = {
  design: {
    label: "Design",
    description: "Courses in graphic design, UI/UX, web design, and visual communication.",
  },
  development: {
    label: "Development",
    description: "Front-end, back-end, and full-stack development courses.",
  },
  "mobile-development": {
    label: "Mobile Development",
    description: "Build native and cross-platform mobile applications.",
  },
  business: {
    label: "Business",
    description: "Strategy, operations, and business growth courses.",
  },
  "ai-technology": {
    label: "AI & Technology",
    description: "Artificial intelligence, automation, and emerging tech courses.",
  },
  "digital-skills": {
    label: "Digital Skills",
    description: "Digital marketing, analytics, and modern productivity tools.",
  },
};

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category];
  const courses = allCourses.filter((c) => c.category === category);

  if (!meta) {
    return (
      <main className="flex min-h-[50vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="font-heading text-2xl font-bold text-white">
          Category Not Found
        </h1>
        <p className="mt-2 text-sm text-[#958da1]">
          This category doesn&apos;t exist yet.
        </p>
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

  return (
    <main>
      {/* Header */}
      <section className="px-5 pb-10 pt-10 md:px-16 md:pb-12 md:pt-14">
        <div className="mx-auto max-w-[1440px]">
          <Link
            href="/courses"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#958da1] transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Courses
          </Link>
          <h1 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {meta.label}
          </h1>
          <p className="mt-2 max-w-lg text-base text-[#ccc3d7]">
            {meta.description}
          </p>
          <p className="mt-3 text-sm text-[#958da1]">
            {courses.length} course{courses.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="px-5 pb-20 md:px-16 md:pb-24">
        <div className="mx-auto max-w-[1440px]">
          {courses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.slug}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] transition-all duration-300 hover:border-[#7C3AED]/30 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]"
                >
                  <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <Clock className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.duration}
                      </span>
                    </div>
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#0F172A]/80 px-2.5 py-1 backdrop-blur-sm">
                      <BarChart3 className="h-3 w-3 text-[#958da1]" />
                      <span className="text-[10px] font-medium text-[#ccc3d7]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-heading text-base font-semibold text-white">
                      {course.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-[#958da1]">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#7C3AED]/40 to-[#3B82F6]/40" />
                        <span className="text-xs text-[#ccc3d7]">
                          {course.instructor}
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#d3bbff] transition-colors hover:text-white"
                      >
                        View
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-lg font-medium text-white">
                No courses in this category yet
              </p>
              <p className="mt-2 text-sm text-[#958da1]">
                Check back soon — new courses are added regularly.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
