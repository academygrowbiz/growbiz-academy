"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mic,
  Target,
  Lightbulb,
  GraduationCap,
  Users,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Mic, label: "Public Speaking" },
  { icon: Target, label: "Career-Oriented" },
  { icon: Lightbulb, label: "Creative Thinking" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-12 md:px-16 md:pb-24 md:pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[600px] w-[800px] rounded-full opacity-[0.1] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          <div className="flex flex-col items-start gap-5">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
              </span>
              <span className="text-xs font-medium text-[#ccc3d7]">
                New courses dropping every month
              </span>
            </div>

            <h1 className="font-heading text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08] lg:tracking-[-0.03em]">
              Up Your{" "}
              <span className="bg-gradient-to-r from-[#d3bbff] to-[#b4c5ff] bg-clip-text text-transparent">
                Skills
              </span>
              <br />
              To Advance Your
              <br />
              Career Path
            </h1>

            <p className="max-w-[400px] text-base leading-relaxed text-[#ccc3d7] md:text-[16px]">
              Learn UI-UX Design skills with senior and working-level online
              learning system and target materials that help your knowledge
              growing.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/signup">
                <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                  Get Started
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  variant="ghost"
                  className="h-11 rounded-[20px] border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-[#ccc3d7] backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
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
                  className="group flex cursor-default items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 transition-all hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/[0.06] hover:shadow-[0_0_12px_rgba(124,58,237,0.15)]"
                >
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#7C3AED]/10 transition-all group-hover:bg-[#7C3AED]/20 group-hover:shadow-[0_0_8px_rgba(124,58,237,0.3)]">
                    <feat.icon className="h-3.5 w-3.5 text-[#d3bbff]" />
                  </div>
                  <span className="text-xs font-medium text-[#ccc3d7] transition-colors group-hover:text-white">
                    {feat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center md:min-h-[500px] lg:min-h-[540px]">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-white/[0.04] bg-gradient-to-b from-[#7C3AED]/[0.06] to-transparent sm:h-[400px] sm:w-[400px] md:h-[440px] md:w-[440px]" />

            <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-white/[0.06] sm:h-[340px] sm:w-[340px] md:h-[370px] md:w-[370px]" />

            <div className="relative z-10 flex h-[260px] w-[260px] items-center justify-center overflow-hidden rounded-full border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-2xl backdrop-blur-sm sm:h-[290px] sm:w-[290px] md:h-[320px] md:w-[320px]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <img
                src="/hero.png"
                alt="GrowBiz Academy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-[#7C3AED]/50" />
            <div className="absolute bottom-[25%] right-[10%] h-3.5 w-3.5 rounded-full bg-[#3B82F6]/40" />
            <div className="absolute bottom-[12%] left-[30%] h-2 w-2 rounded-full bg-[#d3bbff]/30" />
            <div className="absolute right-[30%] top-[10%] h-2 w-2 rounded-full bg-[#b4c5ff]/40" />

            <div className="absolute right-[2%] top-[10%] z-20 rounded-2xl border border-white/10 bg-[#0F172A]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:right-[5%]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7C3AED]/15">
                  <BookOpen className="h-3.5 w-3.5 text-[#d3bbff]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    5K+
                  </p>
                  <p className="text-[10px] text-[#958da1]">Online Courses</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[30%] left-[0%] z-20 rounded-2xl border border-white/10 bg-[#0F172A]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:left-[-5%]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3B82F6]/15">
                  <Users className="h-3.5 w-3.5 text-[#b4c5ff]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    2K+
                  </p>
                  <p className="text-[10px] text-[#958da1]">Video Courses</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[8%] right-[8%] z-20 rounded-2xl border border-white/10 bg-[#0F172A]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl sm:bottom-[12%] sm:right-[12%]">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10b981]/15">
                  <GraduationCap className="h-3.5 w-3.5 text-[#6ee7b7]" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    250+
                  </p>
                  <p className="text-[10px] text-[#958da1]">Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 border-t border-white/[0.06] pt-10 lg:mt-8 lg:flex-row lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-[#7C3AED] to-[#6D28D9]" />
              <div className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-[#3B82F6] to-[#1d4ed8]" />
              <div className="h-8 w-8 rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-[#f59e0b] to-[#d97706]" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold text-white">250+</p>
              <p className="text-xs text-[#958da1]">Collaboration</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Partner A", "Partner B", "Partner C", "Partner D"].map(
              (partner) => (
                <span
                  key={partner}
                  className="font-heading text-sm font-semibold tracking-wide text-[#4a4455] transition-colors hover:text-[#958da1]"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
