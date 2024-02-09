import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/core/utils/StyledComponentsRegistry";
import Header from "@/core/modules/common/header";
import Providers from "@/core/utils/Providers";
import localFont from "@next/font/local";
const myFont = localFont({ src: "./IRANSansWeb(FaNum)_Medium.woff2" });
import CarImageConatiner from "@/core/modules/common/carImage";

export const metadata: Metadata = {
  title: "insurance",
  description: "not set",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <StyledComponentsRegistry>
        <body className={`h-screen overflow-hidden ${myFont.className}`}>
          <Providers>
            <Header />
            <div className="mt-[40px] md:flex md:h-[calc(100vh-90px)] md:mt-[90px] ">
              <div className="md:w-[46%]">{children}</div>
              <div className="flex justify-end md:items-end md:w-[54%] relative ">
                <div className="w-1/2 bg-[#FFFBEB] md:block md:h-screen hidden" />
                <div className="w-2/3 md:w-auto p-2 md:absolute">
                  <CarImageConatiner />
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
