import AllProducts from "@/components/common/AllProducts";
import CTA from "@/components/common/CTA";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProductGallery from "@/components/home/ProductGallery";
import Products from "@/components/home/Products";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <ProductGallery />
      <AllProducts />
      <CTA />
    </>
  );
};

export default page;
