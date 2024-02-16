import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <dialog
      className="backdrop-sepia-0 backdrop-blur-md p-4 rounded-md shadow-md"
      open
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
