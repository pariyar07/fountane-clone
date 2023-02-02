import React from "react";
import Arrow from "../assets/footerArrow.svg";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  const footerItems = {
    firstRow: [
      "Contact",
      "1330 Lagoon Ave",
      "Minneapolis, MN 55408",
      "info@fountane.com",
    ],
    secondRow: [
      "Menu",
      "Who We Are",
      "What We Do",
      "Life at Fountane",
      "Loot <strong><sup>[new]</sup></strong>",
      "Contact Us",
      "URL Shortner",
    ],
  };
  return (
    <footer className="flex justify-around bg-footerBlue py-28">
      <div className="flex">
        <ul className="font-poppins">
          {footerItems?.firstRow.map((item, i) => {
            return (
              <li
                className={`${
                  i === 0
                    ? "text-white tracking-widest md:text-xl text-xs md:mb-5 mb-3 font-bold"
                    : "text-footerGray md:text-xl text-xs font-poppins md:mb-7 mb-2 font-normal"
                }`}
                key={i}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul className="font-poppins pl-40">
          {footerItems?.secondRow.map((item, i) => {
            const newNotifText = "<span>[new]</span>";
            return (
              <li
                className={`${
                  i === 0
                    ? "text-white tracking-widest md:text-xl text-xs md:mb-5 mb-3 font-bold"
                    : "text-footerGray md:text-xl text-xs font-poppins md:mb-7 mb-2 font-normal"
                }`}
                key={i}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="flex gap-6 items-center cursor-pointer text-white font-extrabold">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-inter font-black text-white-0 tracking-widefont">
              LET'S
            </p>
            <p className="text-5xl font-inter font-black text-white-0 tracking-widefont">
              TALK
            </p>
          </div>
          <img src={Arrow} alt="Arrow" />
        </div>
        <div className="flex gap-10 text-footerGray text-2xl mt-8">
          <AiOutlineLinkedin />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
