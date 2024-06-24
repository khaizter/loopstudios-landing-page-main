import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CreationItemProps {
  label: string;
  image: string | StaticImport;
}

const CreationItem: React.FC<CreationItemProps> = (props) => {
  const { label, image } = props;
  return (
    <li className="p-6 pt-10 bg-blue-300 relative text-xl text-neutral-200">
      <Image src={image} alt={label} fill />
      <div className="relative z-10 uppercase max-w-24">{label}</div>
    </li>
  );
};

export default CreationItem;
