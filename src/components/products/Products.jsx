import React, { useState, useEffect } from "react";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { addToCart } from "../../context/cartSlice";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import Rating from "../../assets/rating.png";
import Skeleton from "../skeleton/Skeleton";
import { useGetCategoryQuery } from "../../context/categoryApi";
import { useGetProductsQuery } from "../../context/productApi";

const Products = ({ title, category, data, loadMore, productLength }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const [visibleCount, setVisibleCount] = useState(productLength);
  const [selectedCategory, setSelectedCategory] = useState("/");
  const maxLength = 20;
  let { data: categories } = useGetCategoryQuery();
  const { isLoading } = useGetProductsQuery();

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const truncateText = (text, length) => {
    return text.length > length ? `${text.substring(0, length)}...` : text;
  };

  const filteredProducts = data?.filter(
    (el) =>
      selectedCategory === "/" || el.category === selectedCategory.slice(10),
  );

  let productItem = filteredProducts?.slice(0, visibleCount).map((el) => (
    <div key={el.id} className="product">
      <div className="product__img">
        <div className="product__hover">
          <button onClick={() => dispatch(toggleWishlist(el))}>
            {wishlist.some((s) => s.id === el.id) ? (
              <FaHeart size={17} color="red" />
            ) : (
              <FaRegHeart size={17} color="#40bfff" />
            )}
          </button>
          <button onClick={() => dispatch(addToCart(el))}>
            <TbShoppingCart size={17} color="#40bfff" />
          </button>
        </div>
        <img src={el.image} alt={el.title} />
      </div>
      <div className="product__content">
        <Link to={`/product/${el.id}`}>
          <h2>{truncateText(el.title, maxLength)}</h2>
        </Link>
        <img src={Rating} alt={el.rating.rate} />
        <div className="product__content-prices">
          <h3 className="product__prices-price">${el.price}</h3>
          <h4 className="product__prices-oldPrice">${el.price * 2}</h4>
          <h3 className="product__prices-dis">24% Off</h3>
        </div>
      </div>
    </div>
  ));

  if (isLoading) {
    return <Skeleton count={8} />;
  }

  return (
    <section className="products">
      <div className="container products__content">
        <div className="products__top">
          <h2>{title}</h2>
          {category ? (
            <ul className="tabs__list">
              <li>
                <data
                  onClick={() => setSelectedCategory("/")}
                  value="/"
                  className={selectedCategory === "/" ? "active" : ""}
                >
                  All
                </data>
              </li>
              {categories?.map((el) => (
                <li key={el}>
                  <data
                    onClick={() => {
                      setSelectedCategory(`/category/${el}`);
                      setVisibleCount(productLength);
                    }}
                    value={`/category/${el}`}
                    className={
                      selectedCategory === `/category/${el}` ? "active" : ""
                    }
                  >
                    {el}
                  </data>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className="products__list">{productItem}</div>
        {loadMore &&
        selectedCategory === "/" &&
        visibleCount < filteredProducts.length ? (
          <button className="load-more__btn" onClick={handleLoadMore}>
            LOAD MORE
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Products;
