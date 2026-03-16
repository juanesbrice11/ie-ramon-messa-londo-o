import Hero from "@/components/Hero";
import AboutProject from "@/components/AboutProject";
import LearningSection from "@/components/LearningSection";
import Gallery from "@/components/Gallery";
import StudentProjects from "@/components/StudentProjects";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutProject />
      <LearningSection />
      <Gallery />
      <StudentProjects />
      <Impact />
      <Partners />
      <Footer />
    </main>
  );
}
