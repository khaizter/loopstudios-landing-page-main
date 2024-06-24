"use client";

import MenuOverlay from "@/components/main-header/menu-overlay";
import React, { useState } from "react";
import Image from "next/image";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="flex">
      {/* <ul className="flex">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul> */}
      <button onClick={() => setMenuOpen(true)} className="w-[26px] h-[26px]">
        <Image
          src="/icon-hamburger.svg"
          alt="hamburger-button"
          width="26"
          height="26"
        />
      </button>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
};

export default MainNavigation;
