import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/core/utils/StyledComponentsRegistry";
import Header from "@/core/modules/common/component/header";
import Providers from "@/core/utils/Providers";
import localFont from "next/font/local";
const myFont = localFont({ src: "./IRANSansWeb(FaNum)_Medium.woff2" });
import AppLayout from "@/core/modules/common/component/AppLayout";

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
            <AppLayout>{children}</AppLayout>
          </Providers>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
