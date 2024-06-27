import React from "react";
import Image from "next/image";
import HorizontalWrapper from "@/components/wrapper/wrapper";

type NavigationItemType = {
  label: string;
  path: string;
};

type SocialType = {
  label: string;
  icon: string;
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

const socials: Array<SocialType> = [
  {
    label: "facebook",
    icon: "/icon-facebook.svg",
  },
  {
    label: "twitter",
    icon: "/icon-twitter.svg",
  },
  {
    label: "pinterest",
    icon: "/icon-pinterest.svg",
  },
  {
    label: "instagram",
    icon: "/icon-instagram.svg",
  },
];

const MainFooter = () => {
  return (
    <footer className="bg-black">
      <HorizontalWrapper className="flex flex-col lg:flex-row lg:justify-between items-center py-12">
        <div className="flex flex-col items-center lg:items-start">
          <Image src="/logo.svg" alt="logo" width="132" height="26" />
          <nav className="mt-8">
            <ul className="lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-4 text-center font-alata">
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
          </nav>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <ul className="flex items-center space-x-4 mt-8 lg:mt-0">
            {socials.map((item: SocialType, index: number) => {
              return (
                <li
                  key={index}
                  className="relative hover:after:absolute hover:after:-bottom-2 hover:after:left-1/2 hover:after:translate-x-[-50%] hover:after:h-0.5 hover:after:w-10/12 hover:after:bg-white"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width="26"
                    height="26"
                  />
                </li>
              );
            })}
          </ul>
          <div className="mt-6 text-neutral-400 font-alata">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </HorizontalWrapper>
    </footer>
  );
};

export default MainFooter;
