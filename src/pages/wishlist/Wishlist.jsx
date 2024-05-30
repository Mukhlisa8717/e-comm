import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Products from "../../components/products/Products.jsx"
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
    const wishList = useSelector((state) => state.wishlist.value);
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  return (
    <>
        {wishList.length ? (
          <main>
          <Products
            data={wishList}
            title={"Wishlist"}
            category={false}
            loadMore={false}
          />
          </main>
        ) : (
          <Empty />
        )}
    </>
  );
}

export default Wishlist
