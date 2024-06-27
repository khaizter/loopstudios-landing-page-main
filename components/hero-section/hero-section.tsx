import MainHeader from "@/components/main-header/main-header";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[url('/mobile/image-hero.jpg')] md:bg-[url('/desktop/image-hero.jpg')] min-h-[668px] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black opacity-50 hidden md:block"></div>
      <div className="absolute inset-0">
        <MainHeader />
        <div className="absolute top-1/2 translate-y-[-50%] w-full">
          <HorizontalWrapper>
            <h1 className="w-full max-w-96 border px-6 py-6 text-4xl uppercase text-neutral-300 font-josefin-sans">
              Immersive experiences that deliver
            </h1>
          </HorizontalWrapper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
