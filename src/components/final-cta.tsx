"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-[#F5F1FF] px-5 pb-20 pt-10 md:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[20px] border border-[#DDD6FE] bg-gradient-to-br from-[#7C3AED]/[0.08] to-[#3B82F6]/[0.04] px-6 py-12 text-center md:px-12 md:py-14">
          <h2 className="font-heading text-xl font-bold text-[#0F172A] md:text-2xl">
            Start Your Career Journey Today
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#475569]">
            Build practical skills and turn what you learn into real
            opportunities.
          </p>

          <Link href="/courses" className="mt-6 inline-block">
            <Button
              className="
                h-10
                rounded-[20px]
                border-0
                bg-gradient-to-b
                from-[#7C3AED]
                to-[#6D28D9]
                px-6
                text-sm
                font-semibold
                text-white
                shadow-[0_0_20px_rgba(124,58,237,0.35)]
                transition-all
                hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]
              "
            >
              Explore Courses
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}