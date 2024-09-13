import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open, onClose, className = "" }) => {
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
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-hook")
  );
};

export default Modal;
