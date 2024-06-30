"use client";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import { motion, AnimatePresence } from "framer-motion";

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
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;

  return ReactDom.createPortal(
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={{
              hidden: {
                x: "100%",
                opacity: 1,
                transition: {
                  when: "afterChildren",
                  ease: "easeInOut",
                },
              },
              visible: {
                x: "0",
                opacity: 1,
                transition: {
                  when: "beforeChildren",
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed z-50 inset-0 bg-black text-white"
          >
            <HorizontalWrapper>
              <motion.header
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                  },
                }}
                className="flex items-center justify-between px-6 py-10 fixed left-0 top-0 w-full"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{
                    ease: "easeInOut",
                  }}
                >
                  <Image src="/logo.svg" alt="logo" width="132" height="26" />
                </motion.div>
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
              </motion.header>

              <nav className="h-screen flex items-center">
                <motion.ul
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        when: "beforeChildren",
                        staggerChildren: 0.05,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  className="text-xl uppercase text-neutral-300 leading-loose font-josefin-sans"
                >
                  {navigationItems.map((item: NavigationItemType, index) => {
                    return (
                      <motion.li
                        key={index}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                          },
                        }}
                        className="pr-4"
                      >
                        <motion.div
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
                        >
                          {item.label}
                        </motion.div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>
            </HorizontalWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>,
    document.getElementById("menu-portal") as HTMLElement
  );
};

export default MenuOverlay;
