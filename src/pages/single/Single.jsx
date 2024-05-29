import React, { useEffect } from "react";
import SingleProduct from "../../components/sigleProduct/SingleProduct";
import Products from "../../components/products/Products";
import { useGetProductsQuery } from "../../context/productApi";

const Single = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const { data } = useGetProductsQuery();
  return (
    <main>
      <SingleProduct />
      <Products
        title={"RELATED PRODUCTS"}
        tabs={false}
        data={data}
        loadMore={false}
        productLength={4}
      />
    </main>
  );
};

export default Single;
