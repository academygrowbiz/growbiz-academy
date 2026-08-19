// "use client";

// import { useRouter } from "next/navigation";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function Certification() {
//   const router = useRouter();

//   return (
//     <section className="relative bg-[#FAF9FF] px-5 py-20 md:px-16 md:py-24">
//       <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">

//         {/* =========================================================
//             LEFT — CERTIFICATE
//         ========================================================= */}
//         <div className="group relative flex items-center justify-center">
//           {/* Soft background glow */}
//           <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-[40px] opacity-25 blur-[60px] transition-opacity duration-500 group-hover:opacity-35"
//             style={{
//               background:
//                 "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 60%, transparent 80%)",
//             }}
//           />

//           {/* Certificate */}
//           <div className="relative w-full overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-2xl transition-all duration-500 group-hover:border-[#7C3AED]/25 group-hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]">
//             <div
//               aria-hidden="true"
//               className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
//             />

//             <img
//               src="/homecertificate.png"
//               alt="GrowBiz Academy Certificate"
//               className="block h-auto w-full object-contain"
//             />
//           </div>
//         </div>

//         {/* =========================================================
//             RIGHT — CERTIFICATION CONTENT
//         ========================================================= */}
//         <div className="flex h-full min-w-0 flex-col items-start">

//           {/* Section label */}
//           <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
//             Certification
//           </p>

//           {/* Heading */}
//           <h2 className="max-w-[620px] font-heading text-2xl font-bold leading-[1.2] text-[#0F172A] md:text-3xl lg:text-[36px]">
//             Turn Your Learning Into Proof of Your Skills.
//           </h2>

//           {/* Description */}
//           <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-[#475569] md:text-base">
//             Complete your course, demonstrate what you've learned, and earn a
//             GrowBiz Academy certificate you can proudly add to your
//             professional profile.
//           </p>

//           {/* =======================================================
//               CAREER PATHWAYS
//           ======================================================= */}
//           <div className="mt-8 flex w-full items-center gap-5 md:gap-7">

//             {/* Large Career Badge */}
//             <div className="flex h-[155px] w-[155px] shrink-0 items-center justify-center overflow-visible">
//               <img
//                 src="/badge.png"
//                 alt="Career Opportunities"
//                 className="h-[155px] w-[155px] scale-[2.2] object-contain"
//               />
//             </div>

//             {/* Career Content */}
//             <div className="min-w-0">
//               <p className="font-heading text-base font-bold text-[#0F172A] md:text-lg">
//                 Career Pathways
//               </p>

//               <p className="mt-1 font-heading text-sm font-semibold text-[#7C3AED] md:text-base">
//                 Placement &amp; Internship Pathways
//               </p>

//               <p className="mt-2 max-w-[430px] text-xs leading-relaxed text-[#64748B] md:text-sm">
//                 Students who successfully complete the course may be eligible
//                 for GrowBiz placement or internship opportunities, subject to
//                 the selection process.
//               </p>
//             </div>
//           </div>

//           {/* =======================================================
//               CTA
//           ======================================================= */}
//           <div className="mt-8">
//             {/* <Button
//               type="button"
//               onClick={() => router.push("/courses")}
//               className="h-11 cursor-pointer rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]"
//             >
//               Explore Courses
//               <ArrowRight className="ml-1.5 h-4 w-4" />
//             </Button> */}

//             <Button
//   type="button"
//   onClick={() => router.push("/courses")}
//   className="relative z-50 h-11 cursor-pointer rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]"
// >
//   Explore Courses
//   <ArrowRight className="ml-1.5 h-4 w-4" />
// </Button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Certification() {
  const router = useRouter();

  return (
    <section className="relative bg-[#FAF9FF] px-5 py-20 md:px-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div className="group relative flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 m-auto h-[80%] w-[80%] rounded-[40px] opacity-25 blur-[60px] transition-opacity duration-500 group-hover:opacity-35"
            style={{
              background:
                "radial-gradient(ellipse at center, #7C3AED 0%, #3B82F6 60%, transparent 80%)",
            }}
          />

          <div className="relative w-full overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-2xl transition-all duration-500 group-hover:border-[#7C3AED]/25 group-hover:shadow-[0_0_50px_rgba(124,58,237,0.12)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <img
              src="/homecertificate.png"
              alt="GrowBiz Academy Certificate"
              className="block h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="flex h-full min-w-0 flex-col items-start">
          <p className="mb-3 font-technical text-xs font-medium uppercase tracking-[0.1em] text-[#7C3AED]">
            Certification
          </p>

          <h2 className="max-w-[620px] font-heading text-2xl font-bold leading-[1.2] text-[#0F172A] md:text-3xl lg:text-[36px]">
            Turn Your Learning Into Proof of Your Skills.
          </h2>

          <p className="mt-4 max-w-[600px] text-sm leading-relaxed text-[#475569] md:text-base">
            Complete your course, demonstrate what you've learned, and earn a
            GrowBiz Academy certificate you can proudly add to your
            professional profile.
          </p>

          <div className="mt-8 flex w-full items-center gap-5 md:gap-7">
            <div className="flex h-[155px] w-[155px] shrink-0 items-center justify-center overflow-visible">
              <img
                src="/badge.png"
                alt="Career Opportunities"
                className="h-[155px] w-[155px] scale-[2.2] object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="font-heading text-base font-bold text-[#0F172A] md:text-lg">
                Career Pathways
              </p>

              <p className="mt-1 font-heading text-sm font-semibold text-[#7C3AED] md:text-base">
                Placement &amp; Internship Pathways
              </p>

              <p className="mt-2 max-w-[430px] text-xs leading-relaxed text-[#64748B] md:text-sm">
                Students who successfully complete the course may be eligible
                for GrowBiz placement or internship opportunities, subject to
                the selection process.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="button"
              onClick={() => router.push("/courses")}
              className="relative z-50 h-11 cursor-pointer rounded-[20px] border-0 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-all hover:shadow-[0_0_28px_rgba(124,58,237,0.55)]"
            >
              Explore Courses
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}