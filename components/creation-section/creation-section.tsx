import CreationItem from "@/components/creation-section/creation-item";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CreationItemType = {
  label: string;
  image: string | StaticImport;
};

const creationItems: Array<CreationItemType> = [
  {
    label: "Deep earth",
    image: "/mobile/image-deep-earth.jpg",
  },
  {
    label: "Night arcade",
    image: "/mobile/image-night-arcade.jpg",
  },
  {
    label: "Soccer team VR",
    image: "/mobile/image-soccer-team.jpg",
  },
  {
    label: "The Grid",
    image: "/mobile/image-grid.jpg",
  },
  {
    label: "From up above VR",
    image: "/mobile/image-from-above.jpg",
  },
  {
    label: "Pocket borealis",
    image: "/mobile/image-pocket-borealis.jpg",
  },
  {
    label: "The curiosity",
    image: "/mobile/image-curiosity.jpg",
  },
  {
    label: "Make it fisheye",
    image: "/mobile/image-fisheye.jpg",
  },
];

const CreationSection = () => {
  return (
    <section className="py-20 bg-white">
      <HorizontalWrapper>
        <h2 className="text-3xl text-neutral-900 uppercase text-center">
          Our creations
        </h2>
        <ul className="mt-10 space-y-6">
          {creationItems.map((item: CreationItemType, index: number) => {
            return (
              <CreationItem key={index} label={item.label} image={item.image} />
            );
          })}
        </ul>
      </HorizontalWrapper>
    </section>
  );
};

export default CreationSection;