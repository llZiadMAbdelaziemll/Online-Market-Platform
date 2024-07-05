import React from "react";
import Hero from "../features/home/Hero";
import Categories from "../features/home/Categories";
import Services from "../ui/Services";
import PopularProducts from "../ui/PopularProducts";
import ColoredProducts from "../features/home/ColoredProducts";
import Deal from "../features/home/Deal";
import Blogs from "../features/home/Blogs";
import Testimonials from "../features/home/Testimonials";

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
