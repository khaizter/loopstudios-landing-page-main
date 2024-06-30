import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { motion } from "framer-motion";

interface CreationItemProps {
  label: string;
  mobileImage: string | StaticImport;
  desktopImage: string | StaticImport;
}

const CreationItem: React.FC<CreationItemProps> = (props) => {
  const { label, mobileImage, desktopImage } = props;
  return (
    <motion.li
      variants={{ initial: {}, hover: {} }}
      initial="initial"
      whileHover="hover"
      className="p-6 flex items-end min-h-32 lg:min-h-96 bg-blue-300 relative text-xl text-neutral-50 group"
    >
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
      <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-stone-900 to-transparent group-hover:from-transparent group-hover:to-transparent"></div>
      <motion.div
        variants={{
          initial: {
            width: "var(--from-width,100%)",
            height: "var(--from-height,100%)",
          },
          hover: {
            width: "var(--to-width,100%)",
            height: "var(--to-height,100%)",
          },
        }}
        className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-t from-stone-300 to-stone-200 opacity-75 
        [--from-width:0] [--to-width:100%]
        lg:[--from-height:0] lg:[--to-height:100%]
        lg:[--from-width:100%] lg:[--to-width:100%]"
      ></motion.div>
      <div className="relative z-10 uppercase max-w-[6.5rem] group-hover:text-neutral-950">
        {label}
      </div>
    </motion.li>
  );
};

export default CreationItem;
