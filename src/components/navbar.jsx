import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const navbarItems = [
    "Home",
    "Who We Are",
    "What We Do",
    "Case Studies",
    "Life at Fountane",
    "Fueled by Fountane",
    "Contact Us",
  ];
  return (
    <nav className="flex justify-between px-12 py-6 fixed bg-white z-30 w-full">
      <img src={Logo} alt="Fountane logo" className="cursor-pointer"></img>
      <ul className="flex gap-12">
        {navbarItems.map((item, i) => {
          return (
            <li
              key={i}
              className={`${
                i === 0 ? "font-extrabold" : ""
              } font-poppins cursor-pointer`}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
