import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/Home/hero";
import Product from "../../components/Home/productSection";
import Footer from "../../components/footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Footer />
    </div>
  );
};

export default Homepage;
