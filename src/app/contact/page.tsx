"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  User,
  Phone,
  Mail,
  GraduationCap,
  ShieldCheck,
  ChevronDown,
  Check,
  BookOpen,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const programs = [
  "Digital Marketing",
  "Web Development",
  "UI/UX Design",
  "AI & Automation",
  "Graphic & Motion Design",
  "Business & Sales",
];

const deliveryModes = [
  "Interactive Live Cohort",
  "Self-Paced Recorded",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [program, setProgram] = useState("Digital Marketing");
  const [deliveryFormat, setDeliveryFormat] = useState("Interactive Live Cohort");
  
  // Custom dropdown open states
  const [programOpen, setProgramOpen] = useState(false);
  const [formatOpen, setFormatOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9FF] px-6 py-10 md:px-16 lg:py-16">
      
      {/* Soft Background Accent Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.06] blur-[140px]"
        style={{
          background: "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 50%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1140px]">
        
        {/* Top Back Navigation */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] transition-colors hover:text-[#7C3AED]"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Side: Elegant Typography & Trust */}
          <div className="flex flex-col items-start gap-6 lg:col-span-5">
            
            {/* Minimal Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/80 px-3.5 py-1 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>Live Advisors Online</span>
            </div>

            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-[#0F172A] sm:text-5xl lg:text-[44px] lg:leading-[1.12]">
              Book Your Free <br />
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] bg-clip-text text-transparent">
                Career Session
              </span>
            </h1>

            <p className="text-sm leading-relaxed text-[#475569] md:text-base">
              Speak 1-on-1 with our agency advisors to customize your roadmap, review client project briefs, and clarify placement terms.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "100% Free 1-on-1 consultation session",
                "Personalized roadmap based on your current background",
                "Direct review of agency client project briefs",
                "Transparent placement & internship guidance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-medium text-[#0F172A]">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EDE9FE] text-[#7C3AED]">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-3 text-xs text-[#64748B]">
              <ShieldCheck className="h-4 w-4 text-[#7C3AED]" />
              <span>Your details are secure. Guaranteed zero spam policy.</span>
            </div>
          </div>

          {/* Right Side: Form Shell with Interactive Custom Dropdowns */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)] md:p-9">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0F172A]">Reserve Your Free Counselling</h3>
                <p className="mt-1 text-xs text-[#64748B]">Fill in your details below and an advisor will contact you via WhatsApp / Phone.</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F1FF] text-[#7C3AED]">
                    <CheckCircle2 className="h-10 w-10 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">Session Requested!</h3>
                  <p className="mt-2 max-w-sm text-sm text-[#64748B]">
                    Thank you, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. Our career advisor will get in touch with you shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6 rounded-xl border-[#E5E7EB]"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      Full Name *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-[#94A3B8]" />
                      <Input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 rounded-xl border-[#E5E7EB] bg-[#FAF9FF] pl-10 text-sm text-[#0F172A] focus-visible:border-[#7C3AED] focus-visible:ring-1 focus-visible:ring-[#7C3AED]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Phone / WhatsApp *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-[#94A3B8]" />
                        <Input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-11 rounded-xl border-[#E5E7EB] bg-[#FAF9FF] pl-10 text-sm text-[#0F172A] focus-visible:border-[#7C3AED] focus-visible:ring-1 focus-visible:ring-[#7C3AED]"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-[#94A3B8]" />
                        <Input
                          type="email"
                          required
                          placeholder="rahul@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-11 rounded-xl border-[#E5E7EB] bg-[#FAF9FF] pl-10 text-sm text-[#0F172A] focus-visible:border-[#7C3AED] focus-visible:ring-1 focus-visible:ring-[#7C3AED]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    
                    {/* Custom Interactive Dropdown: Interested Program */}
                    <div className="relative space-y-1.5">
                      <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Interested Program
                      </Label>
                      <button
                        type="button"
                        onClick={() => {
                          setProgramOpen(!programOpen);
                          setFormatOpen(false);
                        }}
                        className={`flex h-11 w-full items-center justify-between rounded-xl border px-3.5 text-sm transition-all ${
                          programOpen
                            ? "border-[#7C3AED] bg-white ring-2 ring-[#7C3AED]/15"
                            : "border-[#E5E7EB] bg-[#FAF9FF] text-[#0F172A] hover:border-[#DDD6FE]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-[#7C3AED]" />
                          <span className="font-medium text-[#0F172A]">{program}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-[#64748B] transition-transform duration-200 ${programOpen ? "rotate-180 text-[#7C3AED]" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {programOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-1.5 shadow-xl backdrop-blur-lg"
                          >
                            {programs.map((p) => {
                              const isSelected = program === p;
                              return (
                                <button
                                  type="button"
                                  key={p}
                                  onClick={() => {
                                    setProgram(p);
                                    setProgramOpen(false);
                                  }}
                                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                                    isSelected
                                      ? "bg-[#F5F1FF] font-semibold text-[#7C3AED]"
                                      : "text-[#475569] hover:bg-[#FAF9FF] hover:text-[#0F172A]"
                                  }`}
                                >
                                  <span>{p}</span>
                                  {isSelected && <Check className="h-3.5 w-3.5 text-[#7C3AED]" />}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Custom Interactive Dropdown: Delivery Format */}
                    <div className="relative space-y-1.5">
                      <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                        Online Delivery Mode
                      </Label>
                      <button
                        type="button"
                        onClick={() => {
                          setFormatOpen(!formatOpen);
                          setProgramOpen(false);
                        }}
                        className={`flex h-11 w-full items-center justify-between rounded-xl border px-3.5 text-sm transition-all ${
                          formatOpen
                            ? "border-[#7C3AED] bg-white ring-2 ring-[#7C3AED]/15"
                            : "border-[#E5E7EB] bg-[#FAF9FF] text-[#0F172A] hover:border-[#DDD6FE]"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-[#7C3AED]" />
                          <span className="font-medium text-[#0F172A]">{deliveryFormat}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 text-[#64748B] transition-transform duration-200 ${formatOpen ? "rotate-180 text-[#7C3AED]" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {formatOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute left-0 top-full z-20 mt-1 w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-1.5 shadow-xl backdrop-blur-lg"
                          >
                            {deliveryModes.map((m) => {
                              const isSelected = deliveryFormat === m;
                              return (
                                <button
                                  type="button"
                                  key={m}
                                  onClick={() => {
                                    setDeliveryFormat(m);
                                    setFormatOpen(false);
                                  }}
                                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                                    isSelected
                                      ? "bg-[#F5F1FF] font-semibold text-[#7C3AED]"
                                      : "text-[#475569] hover:bg-[#FAF9FF] hover:text-[#0F172A]"
                                  }`}
                                >
                                  <span>{m}</span>
                                  {isSelected && <Check className="h-3.5 w-3.5 text-[#7C3AED]" />}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Qualification */}
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                      Current Qualification / Status
                    </Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3.5 top-3.5 h-4 w-4 text-[#94A3B8]" />
                      <Input
                        type="text"
                        placeholder="e.g. Final Year B.Tech Student / Working Professional"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="h-11 rounded-xl border-[#E5E7EB] bg-[#FAF9FF] pl-10 text-sm text-[#0F172A] focus-visible:border-[#7C3AED] focus-visible:ring-1 focus-visible:ring-[#7C3AED]"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <Button
                    type="submit"
                    className="mt-3 h-12 w-full rounded-xl border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] text-base font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:scale-[1.005] active:scale-95"
                  >
                    <span>Talk to a Career Advisor</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}



