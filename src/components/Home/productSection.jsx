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
    <section id="how-we-do-this" className="mt-20 pt-40">
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
            <p className="font-poppins font-semibold text-textGray tracking-wide 2xl:text-xl">
              Our approach
            </p>
          </a>
        </div>
      </div>
      <ul className="flex flex-col gap-10 mb-40">
        {productList.map((product, i) => {
          return (
            <li key={i}>
              <ProductCard product={product} i={i} />
            </li>
          );
        })}
      </ul>
      <div className="flex gap-60 ml-32 mb-20">
        <h2 className="font-inter text-lightBlue md:text-5xl 2xl:text-7xl text-4xl font-extrabold">
          Ventures
          <br />
          <span className="text-lightGray">Lab</span>
        </h2>
        <div className="mt-6 ml-16">
          <p className="font-inter md:text-xl 2xl:text-4xl text-lg font-normal tracking-wide">
            Co-create together
            <br />
            We build. You market
            <br />
          </p>
          <p className="font-inter md:text-xl 2xl:text-4xl text-lg font-normal tracking-wide mt-2">
            Strategically embedded tech partner that
            <br />
            will be with you for the long run.
          </p>
          <a
            className="flex gap-4 items-center font-poppins font-semibold mt-10"
            href="#how-we-do-this"
          >
            <div className="border-buttonGray border-2 rounded-full p-3 text-xl">
              <BsArrowRight />
            </div>
            <p className="font-poppins font-semibold text-textGray tracking-wide 2xl:text-xl">
              Learn more
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Product;
