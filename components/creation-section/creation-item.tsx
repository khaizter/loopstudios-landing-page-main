import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CreationItemProps {
  label: string;
  mobileImage: string | StaticImport;
  desktopImage: string | StaticImport;
}

const CreationItem: React.FC<CreationItemProps> = (props) => {
  const { label, mobileImage, desktopImage } = props;
  return (
    <li className="p-6 flex items-end min-h-32 lg:min-h-96 bg-blue-300 relative text-xl text-neutral-50 group">
      <Image
        className="lg:hidden object-cover object-left-top"
        src={mobileImage}
        alt={label}
        fill
      />
      <Image
        className="hidden lg:block object-cover object-left-top"
        src={desktopImage}
        alt={label}
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-stone-900 to-transparent group-hover:from-stone-300 group-hover:to-stone-200 group-hover:opacity-75"></div>
      <div className="relative z-10 uppercase max-w-[6.5rem] group-hover:text-neutral-950">
        {label}
      </div>
    </li>
  );
};

export default CreationItem;
