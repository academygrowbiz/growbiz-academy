import { CoursesNavbar } from "@/components/courses-navbar";
import { Footer } from "@/components/footer";

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CoursesNavbar />
      {children}
      <Footer />
    </>
  );
}
