import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/Home/hero";
import Product from "../../components/Home/productSection";
import GridSection from "../../components/Home/gridSection";
import Footer from "../../components/footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <GridSection />
      <Footer />
    </div>
  );
};

export default Homepage;
