"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Get started with free intro lessons and resources.",
    cta: "Start Learning",
    ctaHref: "/courses",
    highlighted: false,
    badge: null,
    featuresLabel: "Everything in Free plan:",
    features: [
      "Access to selected free videos",
      "Intro lessons for all categories",
      "Basic learning resources",
      "Community forum access",
    ],
  },
  {
    name: "Single Course",
    price: "₹499",
    period: "one-time",
    description: "Full access to one course of your choice.",
    cta: "Explore Courses",
    ctaHref: "/courses",
    highlighted: true,
    badge: "Popular",
    featuresLabel: "Everything in Free plus:",
    features: [
      "One full course with all modules",
      "Hands-on projects & resources",
      "Certificate of completion",
      "Instructor Q&A access",
    ],
  },
  {
    name: "All Access",
    price: "₹1,499",
    period: "month",
    description: "Unlimited access to all courses and new releases.",
    cta: "Get All Access",
    ctaHref: "/enroll",
    highlighted: false,
    badge: "BEST VALUE",
    featuresLabel: "Everything in Single plus:",
    features: [
      "Access to all courses",
      "New courses included automatically",
      "Full resource & project library",
      "Priority instructor support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="relative px-5 py-20 md:px-16 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#d3bbff]">
            Pricing
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-[40px]">
            Affordable Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#ccc3d7]">
            Choose a plan that fits your learning goals. Upgrade or cancel
            anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[20px] border px-6 pb-6 pt-7 transition-all duration-300 hover:-translate-y-0.5 ${
                plan.highlighted
                  ? "border-[#7C3AED]/40 bg-[#7C3AED]/[0.06] shadow-[0_0_24px_rgba(124,58,237,0.1)]"
                  : "border-white/[0.08] bg-white/[0.03] hover:border-white/15"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span
                  className={`absolute -top-3 right-5 rounded-full px-3 py-1 font-technical text-[10px] font-bold uppercase tracking-wider ${
                    plan.badge === "BEST VALUE"
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                      : "border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#d3bbff]"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <p className="mb-3 text-sm font-medium text-[#ccc3d7]">
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-2 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-[#958da1]">/ {plan.period}</span>
              </div>

              {/* Description */}
              <p className="mb-5 text-sm text-[#958da1]">{plan.description}</p>

              {/* CTA */}
              <Link href={plan.ctaHref}>
                <Button
                  className={`h-10 w-full rounded-[20px] text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] text-white shadow-[0_0_14px_rgba(124,58,237,0.3)] hover:shadow-[0_0_22px_rgba(124,58,237,0.5)]"
                      : "border border-white/10 bg-white/[0.04] text-[#ccc3d7] hover:border-[#7C3AED]/30 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

              {/* Divider */}
              <div className="my-5 h-px w-full bg-white/[0.06]" />

              {/* Features */}
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#958da1]">
                Features
              </p>
              <p className="mb-3 text-xs text-[#958da1]">
                {plan.featuresLabel}
              </p>
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? "bg-[#7C3AED]/25 text-[#d3bbff]"
                          : "bg-[#22c55e]/15 text-[#22c55e]"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm text-[#ccc3d7]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
