"use client";

import MenuOverlay from "@/components/main-header/menu-overlay";
import React, { useState } from "react";
import Image from "next/image";

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
            <li
              key={index}
              className="relative hover:after:absolute hover:after:-bottom-2 hover:after:left-1/2 hover:after:translate-x-[-50%] hover:after:h-0.5 hover:after:w-6 hover:after:bg-white"
            >
              {item.label}
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setMenuOpen(true)}
        className="w-[26px] h-[26px] md:hidden"
      >
        <Image
          src="/icon-hamburger.svg"
          alt="hamburger-button"
          width="26"
          height="26"
        />
      </button>
      <MenuOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </nav>
  );
};

export default MainNavigation;
