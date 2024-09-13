import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, className = "" }) => {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;

    // open and close a modal
    // option 1
    if (open) {
      modal.showModal();
    }
    return () => modal.close();

    // option 2
    // open ? modal.showModal() : modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
