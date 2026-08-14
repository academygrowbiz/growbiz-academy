"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03]">
            {/* Top edge light */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />
            {/* Image placeholder — replace with academy/learning image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/cta.jpg"
                alt="GrowBiz Academy learning environment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Right: CTA Content */}
          <div className="flex flex-col items-start gap-5">
            <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
              Start Your Journey
            </p>

            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[40px] lg:leading-[1.2]">
              Ready to start learning?
            </h2>

            <p className="max-w-md text-base leading-relaxed text-[#ccc3d7]">
              Join thousands of learners building real skills across AI,
              business, digital tools, and professional growth. Your next chapter
              starts here.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/courses">
                <Button className="h-11 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/enroll">
                <Button
                  variant="ghost"
                  className="h-11 rounded-[20px] border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-[#ccc3d7] backdrop-blur-sm transition-all hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
                >
                  Enroll Now
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
