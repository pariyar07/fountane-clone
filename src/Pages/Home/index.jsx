import React from "react";
import Hero from "../../components/Home/hero";
import Product from "../../components/Home/productSection";
import GridSection from "../../components/Home/gridSection";

const Homepage = () => {
  return (
    <div className="m-auto">
      <Hero />
      <Product />
      <GridSection />
    </div>
  );
};

export default Homepage;
