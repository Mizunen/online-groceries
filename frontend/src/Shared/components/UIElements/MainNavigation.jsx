import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import MobileNavbar from "./MobileNavbar";

import classes from "./MainNavigation.module.css";
import navbarIcon from "../../assets/images/InstaPantry.png";
import iconMenuOpen from "../../assets/navigation/icon-menu.svg";
import iconMenuClose from "../../assets/navigation/icon-menu-close.svg";
import Searchbar from "../Util/Searchbar";
function MainNavigation() {
  const [width, setWidth] = useState();
  const [navbarVisible, setNavbarVisible] = useState();

  const handleNavbarVisibility = () => {
    setNavbarVisible((prevState) => {
      return !prevState;
    });
  };
  const handleWindowResize = (event) => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    let { innerWidth: initialWidth, innerHeight: initialHeight } = window;
    setWidth(initialWidth);
  }, []);

  window.addEventListener("resize", handleWindowResize);

  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/products/explore", text: "Explore" },
    { path: "/auth", text: "Login / Signup" },
  ];

  return (
    <header className="h-[5rem] w-full bg-green p-5 text-white fixed top-0 z-10 ">
      <nav className="flex md:flex-row h-auto sm:pl-10 align-center justify-between ">
        <figure id="logo" className="h-10 mb-8 w-[8rem]">
          <a href="/">
            <img
              src={navbarIcon}
              alt="ourGroceries icon"
              className="w-full"
            ></img>
          </a>
        </figure>
        {!navbarVisible && width <= 767 && (
          <figure className={`h-10 ${navbarVisible && "hidden"} mt-2`}>
            <img
              className="h-6"
              src={iconMenuOpen}
              onClick={handleNavbarVisibility}
            />
          </figure>
        )}

        {navbarVisible && width <= 767 && (
          <MobileNavbar
            links={navLinks}
            closeModal={handleNavbarVisibility}
          ></MobileNavbar>
        )}
        {width > 767 && (
          <ul className="text-2xl flex flex-row ">
            <li>
              <Searchbar classes="w-[20rem] h-10 bg-yellow text-green rounded-none focus:outline-none p-[1rem] pl-[2rem] opacity-2" />
            </li>
            {navLinks.map((link) => {
              return (
                <li key={link.text}>
                  <NavLink
                    exact
                    className={({ isActive }) => {
                      return `ml-[2rem] hover:text-[1.75rem] ${
                        isActive && classes.active
                      }`;
                    }}
                    to={link.path}
                  >
                    {link.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default MainNavigation;
