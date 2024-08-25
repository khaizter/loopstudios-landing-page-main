import type { Metadata } from "next";
import "./globals.css";

import { alata, josefinSans } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Loopstudios Landing Page",
  description: "Sample of landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`box-border ${alata} ${josefinSans}`}>
        {children}
        <div id="menu-portal"></div>
      </body>
    </html>
  );
}
