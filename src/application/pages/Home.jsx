import React from "react";
import Hero from "../ui/Hero";
import Categories from "../ui/Categories";
import Services from "../ui/Services";
import PopularProducts from "../ui/PopularProducts";
import ColoredProducts from "../ui/ColoredProducts";
import Deal from "../ui/Deal";
import Blogs from "../ui/Blogs";
import Testimonials from "../ui/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <PopularProducts />
      <ColoredProducts />
      <Services />
      <Deal />
      <Testimonials />
      <Blogs />
    </>
  );
};

export default Home;
