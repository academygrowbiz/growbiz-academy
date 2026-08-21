"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Code2,
  Rocket,
  Briefcase,
  Trophy,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    title: "Enroll",
    description: "Choose your career program.",
    icon: GraduationCap,
  },
  {
    number: 2,
    title: "Learn",
    description: "Attend classes and complete modules.",
    icon: BookOpen,
  },
  {
    number: 3,
    title: "Practice",
    description: "Complete assignments and assessments.",
    icon: Code2,
  },
  {
    number: 4,
    title: "Build",
    description: "Work on real-world projects.",
    icon: Rocket,
  },
  {
    number: 5,
    title: "Intern",
    description: "Gain practical industry experience.",
    icon: Briefcase,
  },
  {
    number: 6,
    title: "Get Placement Opportunities",
    description: "Connect with Grow Biz and placement partners.",
    icon: Trophy,
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStepChange = (index: number) => {
    setActive(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center lg:mb-12"
        >
          <p className="mb-3 font-technical text-[12px] font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
            How It Works
          </p>

          <h2 className="font-heading text-[30px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A] sm:text-[36px] lg:text-[40px]">
            Your Journey From Student{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] bg-clip-text text-transparent">
              to Professional
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-[#64748B]">
            Six steps from enrollment to career opportunity.
          </p>
        </motion.div>

        <div
          className="hidden lg:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mx-auto max-w-5xl">
            <div className="relative mb-8">
              <div className="absolute left-[8%] right-[8%] top-[22px] h-[2px] bg-[#EDE9FE]" />

              <motion.div
                className="absolute left-[8%] top-[22px] h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6]"
                animate={{
                  width: `${(active / (steps.length - 1)) * 84}%`,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />

              <div className="relative flex items-start justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === active;
                  const isPast = index < active;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => handleStepChange(index)}
                      onMouseEnter={() => {
                        setActive(index);
                        setIsPaused(true);
                      }}
                      className="group flex w-[120px] flex-col items-center outline-none"
                      aria-label={`Step ${step.number}: ${step.title}`}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          backgroundColor: isActive
                            ? "#7C3AED"
                            : isPast
                              ? "#A78BFA"
                              : "#F5F1FF",
                        }}
                        transition={{
                          duration: 0.1,
                          ease: "easeOut",
                        }}
                        className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD6FE] shadow-[0_4px_12px_rgba(124,58,237,0.08)]"
                      >
                        <Icon
                          className="h-[17px] w-[17px]"
                          strokeWidth={2}
                          style={{
                            color:
                              isActive || isPast ? "#FFFFFF" : "#7C3AED",
                          }}
                        />

                        {isActive && (
                          <motion.span
                            layoutId="how-it-works-ring"
                            className="absolute -inset-1.5 rounded-full border-2 border-[#7C3AED]/20"
                            transition={{
                              duration: 0.3,
                            }}
                          />
                        )}
                      </motion.div>

                      <span
                        className={`mt-3 text-center text-[12px] font-medium leading-tight transition-colors duration-200 ${
                          isActive
                            ? "text-[#0F172A]"
                            : "text-[#64748B] group-hover:text-[#475569]"
                        }`}
                      >
                        {step.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Card className="rounded-[18px] border-[#E5E7EB] bg-[#FAF9FF] px-7 py-6 text-center shadow-[0_6px_24px_rgba(15,23,42,0.04)] ring-0">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FE] text-[#7C3AED]">
                      {(() => {
                        const Icon = steps[active].icon;

                        return (
                          <Icon
                            className="h-[19px] w-[19px]"
                            strokeWidth={2}
                          />
                        );
                      })()}
                    </div>

                    <p className="mb-1 font-technical text-[10px] font-medium uppercase tracking-[0.12em] text-[#A78BFA]">
                      Step 0{steps[active].number}
                    </p>

                    <h3 className="font-heading text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#0F172A]">
                      {steps[active].title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-lg text-[14px] leading-relaxed text-[#475569]">
                      {steps[active].description}
                    </p>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div
            className="relative ml-5 border-l-2 border-[#EDE9FE] pl-6 sm:ml-8 sm:pl-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === active;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="relative mb-5 last:mb-0"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      backgroundColor: isActive ? "#7C3AED" : "#F5F1FF",
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute -left-[calc(1.5rem+5px)] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[#DDD6FE] sm:-left-[calc(2rem+5px)]"
                  >
                    <Icon
                      className="h-3 w-3"
                      strokeWidth={2.5}
                      style={{
                        color: isActive ? "#FFFFFF" : "#7C3AED",
                      }}
                    />
                  </motion.div>

                  <button
                    type="button"
                    onClick={() => handleStepChange(index)}
                    className={`w-full rounded-[16px] border px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-[#DDD6FE] bg-[#F5F1FF] shadow-[0_6px_20px_rgba(124,58,237,0.08)]"
                        : "border-[#E5E7EB] bg-white hover:border-[#DDD6FE]"
                    }`}
                  >
                    <span className="font-technical text-[10px] font-medium tracking-[0.1em] text-[#7C3AED]">
                      0{step.number}
                    </span>

                    <h3
                      className={`mt-1 font-heading text-[15px] font-bold leading-snug transition-colors ${
                        isActive ? "text-[#0F172A]" : "text-[#475569]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: "easeOut",
                          }}
                          className="overflow-hidden text-[13px] leading-relaxed text-[#64748B]"
                        >
                          <span className="block pt-2">
                            {step.description}
                          </span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}