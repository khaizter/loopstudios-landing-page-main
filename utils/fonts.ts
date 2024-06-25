import { Alata, Josefin_Sans } from "next/font/google";

const alataInit = Alata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alata",
});

const josefinSansInit = Josefin_Sans({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-josefin-sans",
});

export const alata = alataInit.variable;
export const josefinSans = josefinSansInit.variable;
