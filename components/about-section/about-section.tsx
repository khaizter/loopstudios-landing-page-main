import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <HorizontalWrapper className="relative">
        <Image
          className="mx-auto lg:mx-0"
          src="/mobile/image-interactive.jpg"
          alt="image interactive"
          width={654}
          height={448}
        />
        <div className="bg-white text-center mt-8 lg:absolute lg:bottom-0 lg:right-0 lg:pt-16 lg:px-20 max-w-xl mx-auto lg:text-start">
          <h2 className="text-3xl text-neutral-950 uppercase">
            The leader in interactive VR
          </h2>
          <div className="text-neutral-400 mt-4 font-alata max-w-2xl">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </div>
        </div>
      </HorizontalWrapper>
    </section>
  );
};

export default AboutSection;
