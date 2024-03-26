import { createPortal } from "react-dom";
import Card from "./Card";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return createPortal(
    <>
      <Backdrop closeModal={props.closeModal} />
      <aside className="w-[16rem] h-screen bg-green z-10 absolute right-0 top-0">
        {props.children}
      </aside>
    </>,
    document.getElementById("modal-container")
  );
};

export default Modal;
