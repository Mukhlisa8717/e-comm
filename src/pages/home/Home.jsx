import React, { useEffect } from "react";
import Hero from "../../components/hero/Hero";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import Category from "../../components/category/Category";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../context/productApi";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import WhyUsBanner from "../../components/whyUsBanner/WhyUsBanner'";
import NewsBanner from "../../components/newsBanner/NewsBanner";
import Featured from "../../components/featured/Featured";



const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useGetProductsQuery();
  const targetDate = "2024-07-07T23:59:59";
  return (
    <main>
      <Hero targetDate={targetDate} />
      <HeroBanner />
      <Category />
      <Products title={"BEST SELLER"} tabs={true} data={data} loadMore={true} productLength={8}/>
      <HomeBanner />
      <WhyUsBanner />
      <NewsBanner />
      <Featured />
    </main>
  );
};

export default Home;
