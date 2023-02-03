import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const ProductCard = ({ product: { title, description, image }, i }) => {
  return (
    <div
      className={`flex justify-between ${
        i === 0 ? "bg-productGreenDark" : "bg-productBlueDark"
      } text-white py-16 px-10 mx-32 rounded-tl-[2.5rem] overflow-hidden relative`}
    >
      <div
        className={`${
          i === 0
            ? "bg-productGreenLight rotate-12 -right-36"
            : "bg-productBlueLight -rotate-12 -right-60"
        } absolute transform w-1/2 slantedCard -top-20`}
      ></div>
      <div className="flex flex-col gap-8 w-3/5 pr-20 pb-20 z-10">
        <h3 className="md:text-3xl lg:text-5xl text-xl font-extrabold  font-inter">
          {title}
        </h3>
        <p className="md:text-lg lg:text-xl 2xl:text-2xl text-xs font-poppins font-normal md:leading-9 md:tracking-wide tracking-tighter-2 leading-5 md:w-auto w-9/12">
          {description}
        </p>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-6 text-poppins font-semibold tracking-wide mt-6"
        >
          <BsArrowRight />
          <p>Learn more</p>
        </motion.div>
      </div>
      <img
        src={image}
        alt="Product"
        className={`${i === 0 ? "productCardOne" : "productCardTwo mr-8"} z-10`}
      />
    </div>
  );
};

export default ProductCard;
