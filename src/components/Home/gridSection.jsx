import React from "react";
import ImageOne from "../../assets/gridOne.png";
import ImageTwo from "../../assets/gridTwo.png";
import ImageThree from "../../assets/productOne.png";
import ImageFour from "../../assets/gridFour.png";
import LogoOne from "../../assets/gridOneLogo.svg";
import LogoTwo from "../../assets/gridTwoLogo.svg";
import LogoThree from "../../assets/gridThreeLogo.svg";
import LogoFour from "../../assets/gridFourLogo.svg";
import { BsArrowRight } from "react-icons/bs";

const GridSection = () => {
  const gridList = [
    {
      icon: LogoOne,
      title:
        "Marketplace connecting large retail solutions with small scale suppliers",
      image: ImageOne,
    },
    {
      icon: LogoTwo,
      title: "Future of education begins with Scirque!",
      image: ImageTwo,
    },
    {
      icon: LogoThree,
      title: "One-of-a-kind digital platform for 3D design teams",
      image: ImageThree,
    },
    {
      icon: LogoFour,
      title: "Introducing the easiest way to move packages!",
      image: ImageFour,
    },
  ];

  return (
    <section className="mx-36">
      <ul className="grid grid-cols-2 gap-14 justify-between mt-40 mb-28">
        {gridList.map((item, i) => {
          return (
            <li
              className={`flex flex-col items-start justify-center ${
                i === 3
                  ? "bg-gridLightBlue"
                  : i === 1
                  ? "bg-gridLightGreen"
                  : i === 2
                  ? "bg-gridDarkBlue -mt-12"
                  : ""
              } rounded-tl-[2.5rem] p-10`}
              key={i}
            >
              <img src={item.icon} alt="Logo" />
              <div
                className={`flex flex-col gap-14 ${
                  i === 0
                    ? "text-textGray"
                    : i === 1
                    ? "text-dark44"
                    : i === 2
                    ? "text-lemonYellow"
                    : "text-gridBlue"
                } font-inter`}
              >
                <h3 className="md:text-2xl lg:text-4xl 2xl:text-5xl 2xl:leading-snug text-xs font-extrabold md:mt-7 mt-2">
                  {item.title}
                </h3>
                <div
                  className={`flex items-center gap-4 md:text-base text-xs ${
                    i === 2
                      ? "text-lemonYellow"
                      : i === 3
                      ? "text-gridBlue"
                      : "text-linkGray"
                  }`}
                >
                  <BsArrowRight />
                  <p>View work</p>
                </div>
              </div>
              <img src={item.image} alt="Grid work" className="m-auto w-full" />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 justify-center items-center font-poppins font-semibold mb-40 mx-auto">
        <p className="tracking-wide text-sm 2xl:text-xl">
          Check out our client work
        </p>
        <div className="border-buttonGray border-2 rounded-full p-3 text-xl">
          <BsArrowRight />
        </div>
      </div>
    </section>
  );
};

export default GridSection;
