import React from "react";
import { StyledModal } from "./styles";
import { motion } from "framer-motion";
import { ModalProps } from "./types";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="modal"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
        </div>
      </motion.div>
    </StyledModal>
  );
};

export default Modal;
