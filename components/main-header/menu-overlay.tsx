import React from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import { Variants, motion } from "framer-motion";

type NavigationItemType = {
  label: string;
  path: string;
};

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  navigationItems: Array<NavigationItemType>;
}

const MenuOverlay: React.FC<MenuOverlayProps> = (props) => {
  const { open, onClose, navigationItems } = props;

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed z-50 inset-0 bg-black text-white">
        <HorizontalWrapper>
          <header className="flex items-center justify-between px-6 py-10 fixed left-0 top-0 w-full">
            <Image src="/logo.svg" alt="logo" width="132" height="26" />
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
              onClick={onClose}
            >
              <Image
                src="/icon-close.svg"
                alt="hamburger-button"
                width="26"
                height="26"
              />
            </motion.button>
          </header>

          <nav className="h-screen flex items-center">
            <ul className="text-xl uppercase text-neutral-300 leading-loose font-josefin-sans">
              {navigationItems.map((item: NavigationItemType, index) => {
                return (
                  <motion.li
                    key={index}
                    variants={{
                      initial: {
                        color: "rgb(212 212 212)",
                      },
                      hover: {
                        color: "rgb(163 163 163)",
                      },
                    }}
                    initial="initial"
                    whileHover="hover"
                    className="relative pr-4"
                  >
                    {item.label}
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </HorizontalWrapper>
      </div>
    </>,
    document.getElementById("menu-portal") as HTMLElement
  );
};

export default MenuOverlay;
