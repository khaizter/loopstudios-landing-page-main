import CreationItem from "@/components/creation-section/creation-item";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CreationItemType = {
  label: string;
  mobileImage: string | StaticImport;
  desktopImage: string | StaticImport;
};

const creationItems: Array<CreationItemType> = [
  {
    label: "Deep earth",
    mobileImage: "/mobile/image-deep-earth.jpg",
    desktopImage: "/desktop/image-deep-earth.jpg",
  },
  {
    label: "Night arcade",
    mobileImage: "/mobile/image-night-arcade.jpg",
    desktopImage: "/desktop/image-night-arcade.jpg",
  },
  {
    label: "Soccer team VR",
    mobileImage: "/mobile/image-soccer-team.jpg",
    desktopImage: "/desktop/image-soccer-team.jpg",
  },
  {
    label: "The Grid",
    mobileImage: "/mobile/image-grid.jpg",
    desktopImage: "/desktop/image-grid.jpg",
  },
  {
    label: "From up above VR",
    mobileImage: "/mobile/image-from-above.jpg",
    desktopImage: "/desktop/image-from-above.jpg",
  },
  {
    label: "Pocket borealis",
    mobileImage: "/mobile/image-pocket-borealis.jpg",
    desktopImage: "/desktop/image-pocket-borealis.jpg",
  },
  {
    label: "The curiosity",
    mobileImage: "/mobile/image-curiosity.jpg",
    desktopImage: "/desktop/image-curiosity.jpg",
  },
  {
    label: "Make it fisheye",
    mobileImage: "/mobile/image-fisheye.jpg",
    desktopImage: "/desktop/image-fisheye.jpg",
  },
];

const CreationSection = () => {
  return (
    <section className="py-20 bg-white">
      <HorizontalWrapper>
        <div className="block md:flex items-center justify-between">
          <h2 className="text-3xl text-neutral-950 uppercase text-center">
            Our creations
          </h2>
          <button className="hidden md:block uppercase border border-black px-10 py-2 text-black font-alata tracking-[.3em] hover:text-white hover:bg-black">
            See all
          </button>
        </div>
        <ul className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {creationItems.map((item: CreationItemType, index: number) => {
            return (
              <CreationItem
                key={index}
                label={item.label}
                mobileImage={item.mobileImage}
                desktopImage={item.desktopImage}
              />
            );
          })}
        </ul>
        <button className="block md:hidden mt-8 uppercase border border-black px-10 py-2 text-black mx-auto font-alata tracking-[.3em]  hover:text-white hover:bg-black">
          See all
        </button>
      </HorizontalWrapper>
    </section>
  );
};

export default CreationSection;
