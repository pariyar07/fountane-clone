import React from "react";
import { BsInstagram, BsTwitter, BsArrowDown } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="px-12 pt-32 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4 text-footerGray text-xl">
          <BsInstagram className="cursor-pointer" />
          <AiOutlineLinkedin className="cursor-pointer" />
          <BsTwitter className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-20 font-inter ml-40">
          <div className="flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="font-extrabold sm:text-xl lg:text-7xl md:text-5xl 2xl:text-9xl text-6xl text-primaryGray z-20"
            >
              We Are{" "}
              <span className="text-white bg-lightBlue pl-1 pr-8">
                Fountane
              </span>
            </motion.h1>
            <motion.h2
              initial={{
                opacity: 0,
                scale: 0.2,
                translateX: -150,
                translateY: 100,
              }}
              animate={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 1 }}
              className="md:text-4xl lg:text-4xl 2xl:text-6xl text-4xl font-airbnb md:w-11/12 lg:w-9/12 xl:6/12 2xl:w-8/12 2xl:leading-snug md:leading-snug w-full font-extrabold text-lightGray leading-tight mt-3 pr-80"
            >
              Turning Practical Problems Into{" "}
              <span className="text-lightBlue">
                High Growth Technology Opportunities
              </span>
            </motion.h2>
          </div>
          <div className="font-poppins text-primaryGray m-auto">
            <p className="md:text-2xl 2xl:text-4xl text-lg text-left tracking-wide">
              One part digital product studio.
            </p>
            <p className="md:text-2xl 2xl:text-4xl text-lg text-left tracking-wide">
              One part ventures lab.
            </p>
            <p className="md:text-2xl 2xl:text-4xl text-lg text-left tracking-wide">
              Two parts hustle.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-20 w-full">
        <div className="flex justify-between w-1/2">
          <a
            className="flex gap-4 items-center font-poppins font-semibold"
            href="#how-we-do-this"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ type: "spring", duration: 5, bounce: 0.6 }}
              className="border-buttonGray border-2 rounded-full p-3 text-xl"
            >
              <BsArrowDown />
            </motion.div>
            <p className="tracking-wide text-sm 2xl:text-xl">
              See how we do this
            </p>
          </a>
          <motion.a
            href="mailto:pariyarsatyam12@gmail.com?subject=Offer of Employment for Frontend Developer Role"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="flex items-center p-4 shadow rounded-full text-xl cursor-pointer"
          >
            <MdEmail />
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
