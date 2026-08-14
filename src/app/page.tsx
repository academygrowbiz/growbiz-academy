import { Hero } from "@/components/hero";
import { ExploreLearning } from "@/components/explore-learning";
import { PopularCourses } from "@/components/popular-courses";
import { Experts } from "@/components/experts";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreLearning />
      <PopularCourses />
      <Experts />
      <Testimonials />
      <Faq />
      <Pricing />
      <FinalCta />
    </main>
  );
}
