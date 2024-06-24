import AboutSection from "@/components/about-section/about-section";
import HeroSection from "@/components/hero-section/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <div>creation-section</div>
      <div>footer</div>
    </main>
  );
}
