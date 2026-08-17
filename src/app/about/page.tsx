import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  BookOpen,
  Award,
  Rocket,
  Users,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
      {/* ─── ABOUT HERO ─── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-16 md:pb-20 md:pt-14 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-1/4 h-[500px] w-[700px] rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full opacity-[0.06] blur-[80px]"
          style={{
            background: "radial-gradient(circle at center, #6D28D9 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1440px] items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-4 pt-4 lg:pt-6">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              About Us
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
              Empowering Learners{" "}
              <span className="bg-gradient-to-r from-[#d3bbff] to-[#b4c5ff] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[#ccc3d7]">
              GrowBiz Academy is a premium learning platform built for ambitious
              professionals, entrepreneurs, and teams ready to master
              technology, business, and creative skills.
            </p>
            <Link href="/courses" className="pt-1">
              <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                Explore Courses
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="relative min-h-[280px] md:min-h-[360px]">
            <div className="absolute right-0 top-0 w-[65%] overflow-hidden rounded-[16px] border border-white/[0.08] shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/img1.png"
                alt="GrowBiz Academy learning"
                className="aspect-[3/2] h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] overflow-hidden rounded-[16px] border border-white/[0.08] shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <img
                src="/img2.avif"
                alt="Professional education"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="relative px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.06)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
            <img
              src="/about.webp"
              alt="Our story — GrowBiz Academy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Our Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-[36px]">
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

      {/* ─── MISSION & VISION ─── */}
      <section className="relative px-5 py-16 md:px-16 md:py-20">
        <div className="absolute inset-0 bg-white/[0.012]" />
        <div className="relative mx-auto max-w-[1440px]">
          <p className="mb-8 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Mission &amp; Vision
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#7C3AED]/20 md:p-8">
              <div className="absolute -left-px top-8 h-12 w-0.5 rounded-full bg-gradient-to-b from-[#7C3AED] to-transparent" />
              <h2 className="mb-3 font-heading text-xl font-bold text-white md:text-2xl">
                Our Mission
              </h2>
              <p className="mb-2 text-base font-medium text-[#d3bbff]">
                Make learning practical, accessible, and career-focused.
              </p>
              <p className="text-sm leading-relaxed text-[#958da1]">
                We design every course around real-world outcomes — equipping
                learners with skills they can apply immediately, regardless of
                their background or location.
              </p>
            </div>
            <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#3B82F6]/20 md:p-8">
              <div className="absolute -left-px top-8 h-12 w-0.5 rounded-full bg-gradient-to-b from-[#3B82F6] to-transparent" />
              <h2 className="mb-3 font-heading text-xl font-bold text-white md:text-2xl">
                Our Vision
              </h2>
              <p className="mb-2 text-base font-medium text-[#b4c5ff]">
                Create opportunities through continuous learning.
              </p>
              <p className="text-sm leading-relaxed text-[#958da1]">
                We envision a world where anyone can advance their career through
                high-quality education — building confidence, credentials, and
                capabilities that open new doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY LEARN WITH US ─── */}
      <section className="relative px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-6 font-heading text-xl font-bold text-white md:text-2xl">
            Why Learn With Us
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BookOpen, label: "Learn at Your Own Pace" },
              { icon: Rocket, label: "Build Real Projects" },
              { icon: Award, label: "Earn Certificates" },
              { icon: Users, label: "Learn From Experts" },
            ].map((b) => (
              <div
                key={b.label}
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7C3AED]/25 hover:bg-[#7C3AED]/[0.03] hover:shadow-[0_4px_16px_rgba(124,58,237,0.08)]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7C3AED]/10 transition-all group-hover:bg-[#7C3AED]/20 group-hover:shadow-[0_0_8px_rgba(124,58,237,0.2)]">
                  <b.icon className="h-4 w-4 text-[#d3bbff]" />
                </div>
                <span className="text-sm font-medium text-[#ccc3d7] transition-colors group-hover:text-white">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative px-5 pb-20 pt-8 md:px-16 md:pb-24">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-gradient-to-br from-[#7C3AED]/[0.06] to-[#3B82F6]/[0.04] px-8 py-12 text-center md:px-16 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-[60%] w-[60%] rounded-full opacity-15 blur-[60px]"
            style={{
              background: "radial-gradient(circle at center, #7C3AED 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="relative flex flex-col items-center gap-4">
            <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
              Ready to grow your skills?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#ccc3d7]">
              Join learners building real skills across technology, business, and
              professional growth.
            </p>
            <Link href="/courses" className="pt-1">
              <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                Explore Courses
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}
