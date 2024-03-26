import { createPortal } from "react-dom";
import styles from "./Backdrop.module.css";
const Backdrop = (props) => {
  const handleOnClick = () => {
    props.closeModal();
  };
  return createPortal(
    <div
      className="w-screen h-screen bg-backdrop 
       z-[2] absolute"
      onClick={handleOnClick}
    ></div>,
    document.getElementById("backdrop-container")
  );
};

export default Backdrop;
