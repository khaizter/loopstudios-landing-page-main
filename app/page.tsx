import AboutSection from "@/components/about-section/about-section";
import CreationSection from "@/components/creation-section/creation-section";
import HeroSection from "@/components/hero-section/hero-section";
import MainFooter from "@/components/main-footer/main-footer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CreationSection />
      <MainFooter />
    </main>
  );
}
