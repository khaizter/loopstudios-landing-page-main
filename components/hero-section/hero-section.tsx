import MainHeader from "@/components/main-header/main-header";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url('/mobile/image-hero.jpg')] min-h-[668px] bg-cover bg-center relative">
      <MainHeader />
      <div className="absolute top-1/2 translate-y-[-50%] w-full">
        <HorizontalWrapper>
          <h1 className="w-full border px-6 py-6 text-4xl uppercase text-neutral-300 font-josefin-sans">
            Immersive experiences that deliver
          </h1>
        </HorizontalWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
