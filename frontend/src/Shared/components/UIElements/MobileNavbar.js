import { NavLink } from "react-router-dom";
import Modal from "./Modal";

import iconMenuClose from "../../assets/navigation/icon-menu-close.svg";

const MobileNavbar = (props) => {
  return (
    <Modal className="w-[20rem]" closeModal={props.closeModal}>
      <ul
        className={`flex flex-col md:flex-row h-20 align-center pt-[2.8rem] text-4xl text-white text-left pl-[2rem]`}
      >
        <li>
          <figure
            className="h-10 absolute top-8 right-[2rem]"
            onClick={props.closeModal}
          >
            <img src={iconMenuClose} alt="close icon" />
          </figure>
        </li>
        {props.links.map((link) => {
          return (
            <li key={link.text} className="mt-10">
              <NavLink to={link.path} onClick={props.closeModal}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </Modal>
  );
};

export default MobileNavbar;
