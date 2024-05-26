import React from "react";
import Hero from "../../components/hero/Hero";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../context/productApi";

const Home = () => {
  const { data } = useGetProductsQuery();
  const targetDate = "2024-07-07T23:59:59";
  return (
    <main>
      <Hero targetDate={targetDate} />
      <HeroBanner />
      <Category />
      <Products title={"BEST SELLER"} tabs={true} data={data} />
    </main>
  );
};

export default Home;
