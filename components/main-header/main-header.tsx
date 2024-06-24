import MainNavigation from "@/components/main-header/navigation";
import HorizontalWrapper from "@/components/wrapper/wrapper";
import Image from "next/image";

const MainHeader = () => {
  return (
    <header>
      <HorizontalWrapper className="flex items-center justify-between py-10">
        <Image src="/logo.svg" alt="logo" width="132" height="26" />
        <MainNavigation />
      </HorizontalWrapper>
    </header>
  );
};

export default MainHeader;
