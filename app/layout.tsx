import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import greenCar from "@/public/car-green.svg";

const inter = Inter({ subsets: ["latin"] });

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
      <body className=" h-screen">
        <header className="h-[40px] md:h-[90px]  bg-green-500">header1</header>
        <div className=" md:flex md:h-[calc(100vh-100px)]">
          <div className="md:w-[46%]">{children}</div>
          <div className="flex justify-end md:items-end md:w-[54%] relative ">
            <div className="w-1/2 bg-slate-500 md:block md:h-screen hidden">
              test
            </div>
            <div className="w-2/3 md:w-auto p-2 absolute">
              <Image alt="" src={greenCar} />
              {/* <div className="w-1/2 bg-slate-500 mt-[-40px] h-80 ">test</div> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
