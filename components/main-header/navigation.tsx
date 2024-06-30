"use client";

import MenuOverlay from "@/components/main-header/menu-overlay";
import React, { useState } from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

type NavigationItemType = {
  label: string;
  path: string;
};

const navigationItems: Array<NavigationItemType> = [
  {
    label: "About",
    path: "/",
  },
  {
    label: "Careers",
    path: "/",
  },
  {
    label: "Events",
    path: "/",
  },
  {
    label: "Products",
    path: "/",
  },
  {
    label: "Support",
    path: "/",
  },
];

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="flex">
      <ul className="hidden md:flex space-x-6 font-alata">
        {navigationItems.map((item: NavigationItemType, index) => {
          return (
            <motion.li
              initial="hidden"
              whileHover="visible"
              variants={{
                hidden: {},
                visible: {},
              }}
              key={index}
              className="relative"
            >
              <span>{item.label}</span>
              <motion.span
                variants={{
                  hidden: {
                    width: 0,
                  },
                  visible: {
                    width: 30,
                  },
                }}
                className="absolute -bottom-2 left-1/2 translate-x-[-50%] h-0.5 bg-white"
              ></motion.span>
            </motion.li>
          );
        })}
      </ul>
      <motion.button
        variants={{
          initial: {
            scale: 1,
          },
          hover: {
            scale: 1.1,
          },
        }}
        initial="initial"
        whileHover="hover"
        onClick={() => setMenuOpen(true)}
        className="w-[26px] h-[26px] md:hidden"
      >
        <Image
          src="/icon-hamburger.svg"
          alt="hamburger-button"
          width="26"
          height="26"
        />
      </motion.button>
      {true && (
        <MenuOverlay
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          navigationItems={navigationItems}
        />
      )}
    </nav>
  );
};

export default MainNavigation;
