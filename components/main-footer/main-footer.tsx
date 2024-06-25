import React from "react";
import Image from "next/image";
import HorizontalWrapper from "@/components/wrapper/wrapper";
const MainFooter = () => {
  return (
    <footer className="bg-black">
      <HorizontalWrapper className="flex flex-col items-center py-12">
        <Image src="/logo.svg" alt="logo" width="132" height="26" />
        <nav className="mt-8">
          <ul className="space-y-4 text-center font-alata">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <ul className="flex items-center space-x-4 mt-8">
          <li>
            <Image
              src="/icon-facebook.svg"
              alt="facebook"
              width="26"
              height="26"
            />
          </li>
          <li>
            <Image
              src="/icon-twitter.svg"
              alt="twitter"
              width="26"
              height="26"
            />
          </li>
          <li>
            <Image
              src="/icon-pinterest.svg"
              alt="pinterest"
              width="26"
              height="26"
            />
          </li>
          <li>
            <Image
              src="/icon-instagram.svg"
              alt="instagram"
              width="26"
              height="26"
            />
          </li>
        </ul>
        <div className="mt-6 text-neutral-400 font-alata">
          © 2021 Loopstudios. All rights reserved.
        </div>
      </HorizontalWrapper>
    </footer>
  );
};

export default MainFooter;
