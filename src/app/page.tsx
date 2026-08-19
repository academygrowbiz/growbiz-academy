import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ExploreLearning } from "@/components/explore-learning";
import { PopularCourses } from "@/components/popular-courses";
import { Experts } from "@/components/experts";
import { Certification } from "@/components/certification";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <div className="bg-[#FAF9FF]">
      <Navbar />
      <main>
        <Hero />
        <ExploreLearning />
        <PopularCourses />
        <Experts />
        <Certification />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
