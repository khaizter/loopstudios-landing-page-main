import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <HorizontalWrapper>
        <Image
          src="/mobile/image-interactive.jpg"
          alt="image interactive"
          width={654}
          height={448}
        />
        <div className="bg-white text-center mt-8">
          <h2 className="text-3xl text-neutral-950 uppercase">
            The leader in interactive VR
          </h2>
          <div className="text-neutral-400 mt-4 font-alata">
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
