"use client";

import Link from "next/link";
import { ArrowRight, Zap, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Zap, label: "Practical Skills" },
  { icon: Award, label: "Course Certificates" },
  { icon: TrendingUp, label: "Career Growth" },
];

export function FinalCta() {
  return (
    <section className="relative px-5 py-20 md:px-16 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
            <img
              src="/cta.jpg"
              alt="GrowBiz Academy learners"
              className="aspect-[4/3] w-full object-cover lg:aspect-[3/2.4]"
            />
          </div>

          <div className="flex flex-col items-start gap-4">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Start Your Growth
            </p>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[38px] lg:leading-[1.2]">
              Build Skills That Move Your Career Forward.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[#ccc3d7]">
              Learn practical, career-focused skills from expert-led courses and
              turn what you learn into real opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/courses">
                <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                  Explore Courses
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/enroll">
                <Button
                  variant="ghost"
                  className="h-11 rounded-[20px] border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-[#ccc3d7] backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
                >
                  Get Started
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {values.map((v, i) => (
                <div key={v.label} className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <v.icon className="h-3.5 w-3.5 text-[#7C3AED]" />
                    <span className="text-xs font-medium text-[#958da1]">
                      {v.label}
                    </span>
                  </div>
                  {i < values.length - 1 && (
                    <span className="text-[#4a4455]">·</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
