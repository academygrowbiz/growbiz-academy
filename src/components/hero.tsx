"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  FolderCheck,
  Briefcase,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Laptop, label: "Practical Training" },
  { icon: FolderCheck, label: "Real Client Projects" },
  { icon: Briefcase, label: "Agency Internship" },
];

export function Hero() {
  const [activeBadge, setActiveBadge] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#FAF9FF] px-5 pb-20 pt-12 md:px-16 md:pb-24 md:pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[600px] w-[800px] rounded-full opacity-[0.10] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          <div className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-[#F5F1FF] px-4 py-2 transition-all hover:border-[#7C3AED]/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
              </span>
              <span className="font-heading text-sm font-bold tracking-[-0.01em] text-[#6D28D9]">
                100% Internship & Placement Guarantee*
              </span>
            </div>

            <h1 className="font-heading text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[56px] lg:leading-[1.08] lg:tracking-[-0.03em]">
              Learn. Work on{" "}
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] bg-clip-text text-transparent">
                Real Projects.
              </span>
              <br />
              Build Your Career.
            </h1>

            <p className="max-w-[400px] text-base leading-relaxed text-[#475569] md:text-[16px]">
              Industry-focused courses with real project experience, internship
              opportunities, and placement pathways.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/contact">
                <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_28px_rgba(124,58,237,0.55)] active:scale-95">
                  Apply Now
                </Button>
              </Link>

              <Link href="/courses">
                <Button
                  variant="ghost"
                  className="h-11 rounded-[20px] border border-[#E5E7EB] bg-[#FFFFFF] px-5 text-sm font-medium text-[#475569] transition-all duration-200 hover:border-[#DDD6FE] hover:bg-[#F5F1FF] hover:text-[#0F172A]"
                >
                  Explore Courses
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-5">
              {features.map((feat) => (
                <div
                  key={feat.label}
                  className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DDD6FE] hover:bg-[#F5F1FF] hover:shadow-[0_0_12px_rgba(124,58,237,0.15)]"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EDE9FE] transition-colors group-hover:bg-[#7C3AED]/20">
                    <feat.icon className="h-3.5 w-3.5 text-[#7C3AED]" />
                  </div>
                  <span className="text-xs font-medium text-[#475569] transition-colors group-hover:text-[#0F172A]">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="pt-1 text-[11px] text-[#0e0e0e]">
              *Get trained by industry professionals, build your portfolio,
              and access career opportunities through Grow Biz Marketing Agency.
            </p>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[500px] lg:min-h-[540px]">
            <div className="absolute h-[360px] w-[360px] animate-spin-slow rounded-full border-2 border-[#7C3AED]/20 bg-gradient-to-b from-[#7C3AED]/[0.06] to-transparent sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px]" />

            <div className="absolute h-[300px] w-[300px] animate-spin-slow-reverse rounded-full border-[1.5px] border-dashed border-[#7C3AED]/25 sm:h-[340px] sm:w-[340px] md:h-[370px] md:w-[370px]" />

            <div className="absolute h-[260px] w-[260px] rounded-full bg-[#7C3AED] sm:h-[290px] sm:w-[290px] md:h-[320px] md:w-[320px]" />

            <div className="relative z-10 flex h-[260px] w-[260px] items-center justify-center overflow-hidden rounded-full border-2 border-[#7C3AED]/30 bg-[#7C3AED] shadow-[0_12px_50px_rgba(124,58,237,0.3)] transition-transform duration-500 hover:scale-[1.03] sm:h-[290px] sm:w-[290px] md:h-[320px] md:w-[320px]">
              <img
                src="/hero.png"
                alt="GrowBiz Academy Platform"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-[10%] top-[18%] z-10 h-4 w-4 animate-pulse-soft rounded-full bg-[#7C3AED] shadow-[0_0_12px_rgba(124,58,237,0.6)]" />

            <div className="absolute bottom-[22%] right-[8%] z-10 h-5 w-5 animate-pulse-soft rounded-full bg-[#3B82F6] shadow-[0_0_12px_rgba(59,130,246,0.6)] [animation-delay:1.2s]" />

            <div className="absolute bottom-[10%] left-[28%] z-10 h-3.5 w-3.5 animate-pulse-soft rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.6)] [animation-delay:2.4s]" />

            <div className="absolute right-[28%] top-[8%] z-10 h-3 w-3 animate-pulse-soft rounded-full bg-[#F59E0B] shadow-[0_0_12px_rgba(245,158,11,0.6)] [animation-delay:0.6s]" />

            <div
              onMouseEnter={() => setActiveBadge("projects")}
              onMouseLeave={() => setActiveBadge(null)}
              className={`absolute right-[2%] top-[10%] z-20 animate-float-y cursor-pointer rounded-2xl border bg-[#FFFFFF] px-3.5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 sm:right-[5%] ${
                activeBadge === "projects"
                  ? "border-[#7C3AED] shadow-[0_0_18px_rgba(124,58,237,0.25)]"
                  : "border-[#E5E7EB]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDE9FE]">
                  <FolderCheck className="h-3.5 w-3.5 text-[#7C3AED]" />
                </div>

                <div>
                  <p className="font-heading text-sm font-bold text-[#0F172A]">
                    Real Projects
                  </p>
                  <p className="text-[10px] text-[#64748B]">
                    {activeBadge === "projects"
                      ? "Client Briefs & Ad Work"
                      : "Client Briefs"}
                  </p>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => setActiveBadge("internship")}
              onMouseLeave={() => setActiveBadge(null)}
              className={`absolute bottom-[30%] left-[0%] z-20 animate-float-xy cursor-pointer rounded-2xl border bg-[#FFFFFF] px-3.5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 [animation-delay:1.5s] sm:left-[-5%] ${
                activeBadge === "internship"
                  ? "border-[#3B82F6] shadow-[0_0_18px_rgba(59,130,246,0.25)]"
                  : "border-[#E5E7EB]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/10">
                  <Briefcase className="h-3.5 w-3.5 text-[#3B82F6]" />
                </div>

                <div>
                  <p className="font-heading text-sm font-bold text-[#0F172A]">
                    Agency
                  </p>
                  <p className="text-[10px] text-[#64748B]">
                    {activeBadge === "internship"
                      ? "GrowBiz Agency Track"
                      : "Internship Track"}
                  </p>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => setActiveBadge("placement")}
              onMouseLeave={() => setActiveBadge(null)}
              className={`absolute bottom-[8%] right-[8%] z-20 animate-float-y cursor-pointer rounded-2xl border bg-[#FFFFFF] px-3.5 py-2.5 shadow-lg transition-all duration-300 hover:scale-105 [animation-delay:3s] sm:bottom-[12%] sm:right-[12%] ${
                activeBadge === "placement"
                  ? "border-[#10B981] shadow-[0_0_18px_rgba(16,185,129,0.25)]"
                  : "border-[#E5E7EB]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10b981]/10">
                  <Trophy className="h-3.5 w-3.5 text-[#10b981]" />
                </div>

                <div>
                  <p className="font-heading text-sm font-bold text-[#0F172A]">
                    100%
                  </p>
                  <p className="text-[10px] text-[#64748B]">
                    {activeBadge === "placement"
                      ? "Guaranteed Pathway*"
                      : "Placement*"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 border-t border-[#F1F5F9] pt-10 lg:mt-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#7C3AED] text-[10px] font-bold text-white">
                01
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#3B82F6] text-[10px] font-bold text-white">
                02
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#10B981] text-[10px] font-bold text-white">
                03
              </div>
            </div>

            <div>
              <p className="font-heading text-sm font-bold text-[#0F172A]">
                Student Lifecycle
              </p>
              <p className="text-xs text-[#64748B]">
                Learn → Build → Intern → Placed
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Digital Marketing",
              "Web Development",
              "UI/UX Design",
              "AI & Automation",
            ].map((program) => (
              <span
                key={program}
                className="cursor-pointer font-heading text-sm font-semibold tracking-wide text-[#64748B] transition-colors hover:text-[#7C3AED]"
              >
                {program}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}