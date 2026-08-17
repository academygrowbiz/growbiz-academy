"use client";

import Link from "next/link";
import { ArrowRight, Award, Share2, TrendingUp, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Award, label: "Certificate of Completion" },
  { icon: TrendingUp, label: "Showcase Your Skills" },
  { icon: BookCheck, label: "Build Your Profile" },
  { icon: Share2, label: "Share Your Achievement" },
];

export function Certification() {
  return (
    <section className="relative px-5 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
        <div className="group relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-[40px] opacity-25 blur-[60px] transition-opacity group-hover:opacity-35"
            style={{
              background:
                "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 60%, transparent 80%)",
            }}
          />
          <div className="relative w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] shadow-2xl transition-all duration-500 group-hover:border-[#7C3AED]/25 group-hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            <img
              src="/homecertificate.png"
              alt="GrowBiz Academy Certificate"
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <p className="font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Certification
          </p>
          <h2 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-[36px] lg:leading-[1.2]">
            Turn Your Learning Into Proof of Your Skills.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-[#ccc3d7]">
            Complete your course, demonstrate what you&apos;ve learned, and earn
            a GrowBiz Academy certificate you can proudly add to your
            professional profile.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-lg px-2.5 py-2"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#7C3AED]/10">
                  <b.icon className="h-3 w-3 text-[#d3bbff]" />
                </div>
                <span className="text-xs text-[#ccc3d7]">{b.label}</span>
              </div>
            ))}
          </div>

          <Link href="/courses" className="pt-3">
            <Button className="h-10 rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]">
              Explore Courses
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
