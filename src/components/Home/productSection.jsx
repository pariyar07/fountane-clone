import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../productCard";
import ImageOne from "../../assets/productOne.png";
import ImageTwo from "../../assets/productTwo.svg";

const Product = () => {
  const productList = [
    {
      title: "Product Strategy",
      description:
        "Validate the problem to identify, document and prioritize the feature requirements in order to create the most effective product roadmap",
      image: ImageOne,
    },
    {
      title: "Product Execution",
      description:
        "implement the product roadmap through handcrafted design and methodical development, through a series of agile sprints to bring ideas to life",
      image: ImageTwo,
    },
  ];
  return (
    <section>
      <div className="flex gap-32 ml-32 mb-20">
        <h2 className="font-inter text-lightBlue md:text-5xl 2xl:text-7xl text-4xl font-extrabold">
          Digital Product
          <br />
          <span className="text-lightGray">Studio</span>
        </h2>
        <div className="mt-20">
          <p className="font-inter md:text-xl 2xl:text-4xl text-lg font-normal tracking-wide">
            Defying challenges by building
            <br />
            <span className="font-extrabold">superior</span> product experiences
          </p>
          <a
            className="flex gap-4 items-center font-poppins font-semibold mt-10"
            href="#how-we-do-this"
          >
            <div className="border-buttonGray border-2 rounded-full p-3 text-xl">
              <BsArrowRight />
            </div>
            <p className="tracking-wide text-sm 2xl:text-xl">Our approach</p>
          </a>
        </div>
      </div>
      <ul>
        {productList.map((product, i) => {
          return (
            <li key={i}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Product;
