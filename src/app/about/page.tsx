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
      <section className="relative overflow-hidden bg-[#FAF9FF] px-5 pb-16 pt-10 md:px-16 md:pb-20 md:pt-14 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-1/4 h-[500px] w-[700px] rounded-full opacity-[0.08] blur-[100px]"
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
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              About Us
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
              Empowering Learners{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] bg-clip-text text-transparent">
                Everywhere
              </span>
            </h1>
            <p className="max-w-md text-base leading-relaxed text-[#475569]">
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
            <div className="absolute right-0 top-0 w-[65%] overflow-hidden rounded-[16px] border border-[#E5E7EB] shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/img1.png"
                alt="GrowBiz Academy learning"
                className="aspect-[3/2] h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] overflow-hidden rounded-[16px] border border-[#E5E7EB] shadow-xl transition-transform duration-500 hover:scale-[1.02]">
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
      <section className="relative bg-[#FFFFFF] px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-[#FFFFFF] transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.06)]">
            <img
              src="/about.webp"
              alt="Our story — GrowBiz Academy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
              Our Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-[#0F172A] md:text-[36px]">
              How It All Started
            </h2>
            <p className="text-base leading-relaxed text-[#475569]">
              GrowBiz Academy was founded with a single belief: high-quality
              education should be accessible, practical, and career-relevant.
            </p>
            <p className="text-base leading-relaxed text-[#64748B]">
              What began as a small collection of business courses has grown into
              a comprehensive platform covering AI &amp; technology, digital
              skills, leadership, and professional growth — serving learners and
              teams across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="relative bg-[#FAF9FF] px-5 py-16 md:px-16 md:py-20">
        <div className="relative mx-auto max-w-[1440px]">
          <p className="mb-8 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
            Mission &amp; Vision
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 transition-all duration-300 hover:border-[#DDD6FE] md:p-8">
              <div className="absolute -left-px top-8 h-12 w-0.5 rounded-full bg-gradient-to-b from-[#7C3AED] to-transparent" />
              <h2 className="mb-3 font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
                Our Mission
              </h2>
              <p className="mb-2 text-base font-medium text-[#7C3AED]">
                Make learning practical, accessible, and career-focused.
              </p>
              <p className="text-sm leading-relaxed text-[#64748B]">
                We design every course around real-world outcomes — equipping
                learners with skills they can apply immediately, regardless of
                their background or location.
              </p>
            </div>
            <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 transition-all duration-300 hover:border-[#DDD6FE] md:p-8">
              <div className="absolute -left-px top-8 h-12 w-0.5 rounded-full bg-gradient-to-b from-[#3B82F6] to-transparent" />
              <h2 className="mb-3 font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
                Our Vision
              </h2>
              <p className="mb-2 text-base font-medium text-[#3B82F6]">
                Create opportunities through continuous learning.
              </p>
              <p className="text-sm leading-relaxed text-[#64748B]">
                We envision a world where anyone can advance their career through
                high-quality education — building confidence, credentials, and
                capabilities that open new doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY LEARN WITH US ─── */}
      <section className="relative bg-[#FFFFFF] px-5 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="mb-6 font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
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
                className="group flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#FFFFFF] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DDD6FE] hover:bg-[#F5F1FF] hover:shadow-[0_4px_16px_rgba(124,58,237,0.08)]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE] transition-all group-hover:bg-[#7C3AED]/20 group-hover:shadow-[0_0_8px_rgba(124,58,237,0.2)]">
                  <b.icon className="h-4 w-4 text-[#7C3AED]" />
                </div>
                <span className="text-sm font-medium text-[#475569] transition-colors group-hover:text-[#0F172A]">
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative bg-[#F5F1FF] px-5 pb-20 pt-8 md:px-16 md:pb-24">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[20px] border border-[#DDD6FE] bg-gradient-to-br from-[#7C3AED]/[0.08] to-[#3B82F6]/[0.04] px-8 py-12 text-center md:px-16 md:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-[60%] w-[60%] rounded-full opacity-10 blur-[60px]"
            style={{
              background: "radial-gradient(circle at center, #7C3AED 0%, transparent 70%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-4">
            <h2 className="font-heading text-2xl font-bold text-[#0F172A] md:text-3xl">
              Ready to grow your skills?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#475569]">
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
