import Link from "next/link";
import { Star, Clock, BarChart3, User, GraduationCap, ShoppingCart, PlayCircle, FileText, Users, CheckCircle2, Award, Share2, TrendingUp, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseSectionNav } from "@/components/course-section-nav";
import { CourseContentAccordion } from "@/components/course-content-accordion";
import { CourseFaqAccordion } from "@/components/course-faq";
import { allCourses, categoriesMeta } from "@/lib/courses-data";
import { courseAboutData } from "@/lib/course-about-data";
import { courseFaqData } from "@/lib/course-faq-data";
import { instructorProfiles } from "@/lib/instructor-data";
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
  const courseAbout = courseAboutData[course.slug] || {
    heading: `Everything you need to know about ${course.title}`,
    description: course.description,
    bullets: [
      "Hands-on projects and real-world exercises",
      "Expert instruction with lifetime access",
      "Certificate of completion upon finishing",
      "Flexible learning at your own pace",
    ],
  };
  const instructor = instructorProfiles[course.instructor];
  const courseFaqs = courseFaqData[course.slug] || [
    { question: "Do I need prior experience?", answer: course.level === "Beginner" ? "No prior experience is required. This course starts from the basics." : "Some foundational knowledge is recommended. Check the course level for details." },
    { question: "How long do I have access?", answer: "Once enrolled, you get lifetime access to all course materials, including future updates." },
    { question: "Is there a refund policy?", answer: "Yes, we offer a 7-day money-back guarantee if the course doesn't meet your expectations." },
    { question: "Will I get a certificate?", answer: "Yes, you'll receive a verified certificate from GrowBiz Academy upon completing all modules." },
  ];

  return (
    <main>
      <section className="px-5 pb-8 pt-6 md:px-16 md:pb-8 md:pt-8">
        <div className="mx-auto max-w-[1440px]">
          <nav className="mb-6 flex items-center gap-2 overflow-hidden text-xs text-[#958da1]">
            <Link href="/courses" className="shrink-0 transition-colors hover:text-white">
              Courses
            </Link>
            <span className="shrink-0">/</span>
            <Link
              href={`/courses/${category}`}
              className="shrink-0 transition-colors hover:text-white"
            >
              {categoryMeta?.label || course.category}
            </Link>
            <span className="shrink-0">/</span>
            <span className="truncate text-[#ccc3d7]">{course.title}</span>
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

      {/* Course Stats */}
      <section className="px-5 pb-8 md:px-16 md:pb-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 py-6 md:px-10 md:py-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Clock className="h-5 w-5 text-[#7C3AED]" />
                <p className="font-heading text-2xl font-bold text-[#d3bbff] md:text-3xl">
                  {course.stats.hoursOfCourse}+
                </p>
                <p className="text-xs text-[#958da1] md:text-sm">Hours of Course</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <FileText className="h-5 w-5 text-[#7C3AED]" />
                <p className="font-heading text-2xl font-bold text-[#d3bbff] md:text-3xl">
                  {course.stats.totalAssignments}+
                </p>
                <p className="text-xs text-[#958da1] md:text-sm">Total Assignments</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <PlayCircle className="h-5 w-5 text-[#7C3AED]" />
                <p className="font-heading text-2xl font-bold text-[#d3bbff] md:text-3xl">
                  {course.stats.videoLessons}+
                </p>
                <p className="text-xs text-[#958da1] md:text-sm">Video Lessons</p>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Users className="h-5 w-5 text-[#7C3AED]" />
                <p className="font-heading text-2xl font-bold text-[#d3bbff] md:text-3xl">
                  {course.stats.studentsEnrolled.toLocaleString()}+
                </p>
                <p className="text-xs text-[#958da1] md:text-sm">Students Enrolled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Course Section Nav */}
      <CourseSectionNav />

      {/* Course Sections */}
      <div className="px-5 py-12 md:px-16 md:py-16">
        <div className="mx-auto max-w-[1440px]">
          {/* About Course */}
          <section id="about-course" className="mb-16 scroll-mt-32">
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              About Course
            </p>
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
              {/* Left - Description */}
              <div>
                <h2 className="mb-4 font-heading text-xl font-bold leading-snug text-white md:text-2xl">
                  {courseAbout.heading}
                </h2>
                <p className="mb-3 text-sm font-semibold text-[#d3bbff]">Details:</p>
                <p className="mb-5 text-sm leading-[1.8] text-[#ccc3d7]">
                  {courseAbout.description}
                </p>
                <ul className="space-y-3">
                  {courseAbout.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#ccc3d7]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7C3AED]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Feature Cards */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: GraduationCap, title: "Authentic Certificate", subtitle: "Earn a Certificate upon completion" },
                  { icon: PlayCircle, title: "Online Classes", subtitle: "Start instantly and learn at your own pace" },
                  { icon: Clock, title: "Life Time Accessibility", subtitle: "Set and maintain flexible deadlines" },
                  { icon: BarChart3, title: `${course.level} Level`, subtitle: course.level === "Beginner" ? "No prior experience required" : "Some foundational knowledge recommended" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex h-[72px] items-center gap-4 rounded-[14px] border border-white/[0.08] bg-white/[0.03] px-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C3AED]">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="truncate text-xs text-[#958da1]">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Course Content */}
          <section id="course-content" className="mb-16 scroll-mt-32">
            <p className="mb-2 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              Course Content
            </p>
            <h2 className="mb-5 font-heading text-xl font-bold text-white md:text-2xl">
              Our courses are a balanced mix of videos &amp; articles
            </h2>
            <CourseContentAccordion
              modules={course.modules}
              totalLessons={course.stats.videoLessons}
              totalHours={course.stats.hoursOfCourse}
              totalAssignments={course.stats.totalAssignments}
              courseSlug={course.slug}
              categorySlug={course.categorySlug}
            />
          </section>

          {/* About Publisher */}
          <section id="about-publisher" className="mb-16 scroll-mt-32">
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              About Publisher
            </p>
            <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.03] p-5 md:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                {/* Instructor Image */}
                <div className="shrink-0">
                  <div className="h-28 w-28 overflow-hidden rounded-2xl border border-white/[0.1] sm:h-32 sm:w-32">
                    <img
                      src={instructor?.image || "/albert.png"}
                      alt={course.instructor}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-heading text-lg font-bold text-white md:text-xl">
                      {course.instructor}
                    </h3>
                    <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                  </div>
                  <p className="mb-4 text-sm text-[#958da1]">
                    {instructor?.role || "Instructor at GrowBiz Academy"}
                  </p>

                  <p className="mb-5 text-sm leading-relaxed text-[#ccc3d7]">
                    {instructor?.bio || "An experienced professional and passionate educator focused on delivering practical, project-based learning that helps students build real-world skills."}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
                      <span className="text-sm font-medium text-white">{instructor?.rating || 4.5}</span>
                      <span className="text-xs text-[#958da1]">Instructor Rating</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-[#7C3AED]" />
                      <span className="text-sm font-medium text-white">{(instructor?.reviews || 0).toLocaleString()}</span>
                      <span className="text-xs text-[#958da1]">Reviews</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5 text-[#7C3AED]" />
                      <span className="text-sm font-medium text-white">{(instructor?.students || 0).toLocaleString()}</span>
                      <span className="text-xs text-[#958da1]">Students</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PlayCircle className="h-3.5 w-3.5 text-[#7C3AED]" />
                      <span className="text-sm font-medium text-white">{instructor?.courses || 1}</span>
                      <span className="text-xs text-[#958da1]">Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Certificate */}
          <section id="course-certificate" className="mb-16 scroll-mt-32">
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              Certification
            </p>
            <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
              {/* Certificate Preview */}
              <div className="group relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-[30px] opacity-20 blur-[50px]"
                  style={{
                    background: "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 60%, transparent 80%)",
                  }}
                />
                <div className="relative w-full overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.03] shadow-xl transition-all duration-500 group-hover:border-[#7C3AED]/25 group-hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]">
                  <img
                    src="/homecertificate.png"
                    alt={`GrowBiz Academy Certificate for ${course.title}`}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Certificate Info */}
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-xl font-bold text-white md:text-2xl lg:text-[28px] lg:leading-[1.3]">
                  Turn Your Learning Into Proof of Your Skills.
                </h2>
                <p className="text-sm leading-relaxed text-[#ccc3d7]">
                  Complete <span className="font-medium text-white">{course.title}</span>, demonstrate
                  what you&apos;ve learned, and earn a verified GrowBiz Academy certificate you can
                  proudly share with employers and add to your professional profile.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <Award className="h-4 w-4 shrink-0 text-[#d3bbff]" />
                    <span className="text-xs text-[#ccc3d7]">Certificate of Completion</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <TrendingUp className="h-4 w-4 shrink-0 text-[#d3bbff]" />
                    <span className="text-xs text-[#ccc3d7]">Showcase Your Skills</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <BookCheck className="h-4 w-4 shrink-0 text-[#d3bbff]" />
                    <span className="text-xs text-[#ccc3d7]">Build Your Profile</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <Share2 className="h-4 w-4 shrink-0 text-[#d3bbff]" />
                    <span className="text-xs text-[#ccc3d7]">Share Your Achievement</span>
                  </div>
                </div>

                <div className="mt-2 space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="shrink-0 text-[#958da1]">Course Name</span>
                    <span className="truncate font-medium text-white">{course.title}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="shrink-0 text-[#958da1]">Instructor</span>
                    <span className="truncate font-medium text-white">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 text-xs">
                    <span className="shrink-0 text-[#958da1]">Certificate ID</span>
                    <span className="font-medium text-[#d3bbff]">GB-{course.categorySlug.toUpperCase().slice(0, 3)}-2026-XXXXX</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="scroll-mt-32">
            <CourseFaqAccordion faqs={courseFaqs} courseTitle={course.title} />
          </section>
        </div>
      </div>
    </main>
  );
}
