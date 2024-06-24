import AboutSection from "@/components/about-section/about-section";
import CreationSection from "@/components/creation-section/creation-section";
import HeroSection from "@/components/hero-section/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CreationSection />
      <div>footer</div>
    </main>
  );
}
