import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  Award,
  Heart,
  Briefcase,
  Target,
  Zap,
  Rocket,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pb-20 pt-12 md:px-16 md:pb-24 md:pt-16 lg:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-1/4 h-[600px] w-[800px] rounded-full opacity-[0.1] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-5 pt-4 lg:pt-8">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              About Us
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
              Empowering Learners{" "}
              <span className="bg-gradient-to-r from-[#d3bbff] to-[#b4c5ff] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[#ccc3d7] md:text-[17px]">
              GrowBiz Academy is a premium learning platform built for ambitious
              professionals, entrepreneurs, and teams ready to master
              technology, business, and creative skills.
            </p>
            <Link href="/courses" className="pt-2">
              <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                Explore Courses
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative min-h-[320px] md:min-h-[400px]">
            <div className="absolute right-0 top-0 w-[65%] overflow-hidden rounded-[16px] border border-white/[0.08] shadow-xl">
              <img
                src="/img1.png"
                alt="GrowBiz Academy learning"
                className="h-full w-full object-cover aspect-[3/2]"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-[55%] overflow-hidden rounded-[16px] border border-white/[0.08] shadow-xl">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <img
                src="/img2.avif"
                alt="Professional education"
                className="h-full w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03]">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
            <img
              src="/about.webp"
              alt="Our story — GrowBiz Academy"
              className="w-full object-cover aspect-[4/3]"
            />
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Our Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              How It All Started
            </h2>
            <p className="text-base leading-relaxed text-[#ccc3d7]">
              GrowBiz Academy was founded with a single belief: high-quality
              education should be accessible, practical, and career-relevant.
            </p>
            <p className="text-base leading-relaxed text-[#958da1]">
              What began as a small collection of business courses has grown into
              a comprehensive platform covering AI &amp; technology, digital
              skills, leadership, and professional growth — serving learners and
              teams across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 text-center">
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Our Achievements
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              What We&apos;ve Built
            </h2>
          </div>

          <div className="rounded-[20px] border border-white/[0.08] bg-white/[0.02] px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/[0.06]">
              {[
                { icon: Heart, label: "Trusted by Learners" },
                { icon: Briefcase, label: "Industry-Relevant Courses" },
                { icon: Users, label: "Expert Instructors" },
                { icon: Target, label: "Career-Focused Learning" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 md:px-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/15">
                    <item.icon className="h-5 w-5 text-[#d3bbff]" />
                  </div>
                  <p className="text-center text-sm font-medium text-white">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-16 md:py-24">
        <div className="absolute inset-0 bg-white/[0.015]" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Our Goals
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
              What We&apos;re Working Towards
            </h2>
          </div>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Practical Skills",
                description:
                  "Equip every learner with hands-on abilities they can apply from day one — no fluff, just real-world skill building.",
              },
              {
                num: "02",
                title: "Creative Thinking",
                description:
                  "Foster innovation and creative problem-solving across every discipline, preparing learners for challenges that don't have textbook answers.",
              },
              {
                num: "03",
                title: "Career Growth",
                description:
                  "Help every learner take their next career step with confidence through recognised credentials and portfolio-ready projects.",
              },
              {
                num: "04",
                title: "Accessible Learning",
                description:
                  "Make quality education available to anyone, anywhere — with flexible pacing, fair pricing, and inclusive design.",
              },
            ].map((goal, i) => (
              <div
                key={goal.num}
                className={`flex gap-6 border-b border-white/[0.06] py-8 md:gap-10 md:py-10 ${
                  i === 0 ? "border-t border-white/[0.06]" : ""
                }`}
              >
                <span className="font-heading text-3xl font-bold text-[#7C3AED]/40 md:text-4xl">
                  {goal.num}
                </span>
                <div className="flex-1">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white md:text-xl">
                    {goal.title}
                  </h3>
                  <p className="max-w-xl text-sm leading-relaxed text-[#958da1] md:text-base md:leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 md:px-16 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
                Our Benefits
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
                Why Learn With Us
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[#ccc3d7]">
                GrowBiz Academy is designed around outcomes — every feature
                exists to help you learn faster, build real skills, and grow your
                career.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Zap,
                  title: "Learn at Your Own Pace",
                  description:
                    "Self-paced courses that fit around your schedule, with lifetime access to materials.",
                },
                {
                  icon: Award,
                  title: "Earn Recognised Certificates",
                  description:
                    "Get credentials that demonstrate your skills and strengthen your professional profile.",
                },
                {
                  icon: Rocket,
                  title: "Build Real Projects",
                  description:
                    "Hands-on assignments and portfolio pieces you can showcase to employers.",
                },
                {
                  icon: Globe,
                  title: "Global Community",
                  description:
                    "Connect with learners, mentors, and instructors from around the world.",
                },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10">
                    <benefit.icon className="h-4 w-4 text-[#d3bbff]" />
                  </div>
                  <div>
                    <h3 className="mb-0.5 text-sm font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#958da1]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
