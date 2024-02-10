"use client";
import { ReactNode } from "react";
import Image from "next/image";
import greenCar from "@/public/car-green.svg";
import { StyledAppLayout } from "./styles";
import { AnimatePresence, motion } from "framer-motion";

type AppLayoutProps = {
  children: ReactNode;
};
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <StyledAppLayout>
      <div className="form-container">{children}</div>
      <div className="left-side-container">
        <div className="solid-bg" />
        <div className="car-container">
          <AnimatePresence>
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "linear",
              }}
            >
              <Image alt="greenCar" src={greenCar} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </StyledAppLayout>
  );
};

export default AppLayout;
