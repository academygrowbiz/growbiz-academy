"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FileCheck2,
  GraduationCap,
  LaptopMinimalCheck,
  Rocket,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/card";

/* ─── Data ─── */
const benefits = [
  {
    number: "01",
    title: "Industry Training",
    description: "Learn skills companies actually use.",
    icon: GraduationCap,
    rotation: -2.5,
    panelBg: "bg-[#F5F1FF]",
    pinColors: ["#5B21B6", "#7C3AED", "#A78BFA"],
  },
  {
    number: "02",
    title: "Real Projects",
    description: "Work on practical industry-style projects.",
    icon: LaptopMinimalCheck,
    rotation: 2,
    panelBg: "bg-[#EDE9FE]",
    pinColors: ["#4C1D95", "#6D28D9", "#8B5CF6"],
  },
  {
    number: "03",
    title: "Internship",
    description: "Gain professional experience.",
    icon: BriefcaseBusiness,
    rotation: -1.8,
    panelBg: "bg-[#FAF5FF]",
    pinColors: ["#5B21B6", "#7C3AED", "#C4B5FD"],
  },
  {
    number: "04",
    title: "Portfolio",
    description: "Build proof of your skills.",
    icon: FileCheck2,
    rotation: 2.5,
    panelBg: "bg-[#F3E8FF]",
    pinColors: ["#4C1D95", "#7C3AED", "#A78BFA"],
  },
  {
    number: "05",
    title: "Career Preparation",
    description: "Resume + LinkedIn + interview preparation.",
    icon: Target,
    rotation: -2,
    panelBg: "bg-[#EDE9FE]",
    pinColors: ["#5B21B6", "#6D28D9", "#C4B5FD"],
  },
  {
    number: "06",
    title: "Placement",
    description: "Access placement opportunities through Grow Biz and partners.",
    icon: Rocket,
    rotation: 1.8,
    panelBg: "bg-[#F5F1FF]",
    pinColors: ["#4C1D95", "#7C3AED", "#A78BFA"],
  },
];
function StackedPin({ colors }: { colors: string[] }) {
  return (
    <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute left-1/2 top-full h-3 w-6 -translate-x-1/2 rounded-full blur-[4px]"
        style={{ backgroundColor: `${colors[0]}30` }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-[40%] rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${colors[1]}, ${colors[0]})`,
          boxShadow: `0 4px 12px ${colors[0]}66`,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[22px] w-[22px] -translate-x-1/2 -translate-y-[75%] rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 30%, ${colors[2]}, ${colors[1]})`,
          boxShadow: `0 3px 8px ${colors[1]}55`,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-[115%] rounded-full"
        style={{
          background: `radial-gradient(circle at 38% 28%, #ffffff90, ${colors[2]})`,
          boxShadow: `0 2px 6px ${colors[2]}44`,
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-[80%] -translate-y-[240%] rounded-full bg-white/80" />
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function WhyGrowBiz() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9FF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#7C3AED]/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-2xl text-center lg:mb-12"
        >
          <h2 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-4xl lg:text-[44px]">
            Why{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] bg-clip-text text-transparent">
              Choose
            </span>{" "}
            GrowBiz Academy?
          </h2>

          <p className="mt-3 text-base leading-relaxed text-[#64748B]">
            Here&apos;s why learners choose us to build their career:
          </p>
        </motion.div>

        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 900 480"
          >
            <path
              d="M180 95 L450 95"
              fill="none"
              stroke="#DDD6FE"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d="M450 95 L720 95"
              fill="none"
              stroke="#DDD6FE"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d="M180 335 L450 335"
              fill="none"
              stroke="#DDD6FE"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d="M450 335 L720 335"
              fill="none"
              stroke="#DDD6FE"
              strokeWidth="1"
              strokeDasharray="5 7"
            />

            <path
              d="M180 140 L180 290"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            <path
              d="M450 140 L450 290"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            <path
              d="M720 140 L720 290"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            <path
              d="M220 140 C300 220, 380 260, 420 290"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="0.8"
              strokeDasharray="4 8"
            />

            <path
              d="M680 140 C600 220, 520 260, 480 290"
              fill="none"
              stroke="#EDE9FE"
              strokeWidth="0.8"
              strokeDasharray="4 8"
            />
          </svg>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-10 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.number}
                  variants={cardVariants}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  whileHover={{ y: -5, rotate: 0, scale: 1.02 }}
                  className="relative pt-4"
                  style={{ rotate: benefit.rotation }}
                >
                  <Card className="group relative overflow-visible rounded-[18px] border-[#E5E7EB] bg-white p-0 shadow-[0_6px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-[#DDD6FE] hover:shadow-[0_12px_36px_rgba(124,58,237,0.1)] ring-0">
                    <StackedPin colors={benefit.pinColors} />

                    <div
                      className={`mx-2.5 mt-2.5 rounded-[12px] ${benefit.panelBg} px-4 pb-4 pt-5`}
                    >
                      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/70 text-[#7C3AED] shadow-sm backdrop-blur-sm">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </div>

                      <h3 className="font-heading text-base font-bold tracking-[-0.02em] text-[#0F172A]">
                        {benefit.title}
                      </h3>

                      <p className="mt-1.5 text-[13px] leading-relaxed text-[#475569]">
                        {benefit.description}
                      </p>
                    </div>

                    <div className="h-2.5" />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}