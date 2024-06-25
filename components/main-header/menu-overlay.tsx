import React from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import HorizontalWrapper from "@/components/wrapper/wrapper";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = (props) => {
  const { open, onClose } = props;

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="fixed z-50 inset-0 bg-black text-white">
        <HorizontalWrapper>
          <header className="flex items-center justify-between px-6 py-10 fixed left-0 top-0 w-full">
            <Image src="/logo.svg" alt="logo" width="132" height="26" />
            <button onClick={onClose}>
              <Image
                src="/icon-close.svg"
                alt="hamburger-button"
                width="26"
                height="26"
              />
            </button>
          </header>

          <nav className="h-screen flex items-center">
            <ul className="text-xl uppercase text-neutral-300 leading-loose font-josefin-sans">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </nav>
        </HorizontalWrapper>
      </div>
    </>,
    document.getElementById("menu-portal") as HTMLElement
  );
};

export default MenuOverlay;
