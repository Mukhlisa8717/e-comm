import React, { useEffect, useState } from "react";
import "./SingleProduct.scss";
import { useGetProductsQuery } from "../../context/productApi";
import { useParams } from "react-router-dom";
import axios from "axios";
import rating from "../../assets/rating.png";
import { FaFacebookF, FaHeart, FaRegHeart, FaTwitter } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCart, incrementCart } from "../../context/cartSlice";
import { toggleWishlist } from "../../context/wishlistSlice";

const API_URL = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const { data } = useGetProductsQuery();

  useEffect(() => {
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  const handleIncrement = () => {
    dispatch(incrementCart(product));
  };

  const handleDecrement = () => {
    dispatch(decrementCart(product));
  };

  const cartItem = cart.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 1;
  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product__cont">
          <div className="single-product__details">
            <div className="single-product__details-left">
              <img src={product.image} alt="image" className="single-product__main-img"/>
              <div className="single-product__details-left__bottom">
                <img src={product.image} alt="image" />
                <img src={product.image} alt="image" />
                <img src={product.image} alt="image" />
                <img src={product.image} alt="image" />
              </div>
            </div>
            <div className="single-product__details-right">
              <h1>{product?.title}</h1>
              <div className="single-product__details-right-1">
                <img src={rating} alt="rating" />
                <p>0 reviews</p>
                <h3>Submit a review</h3>
              </div>
              <hr />
              <div className="single-product__details-right-2">
                <h3>${totalPrice}</h3>
                <h4>${(totalPrice * 2).toFixed(2)}</h4>
                <h3 className="product__price-disc">24% Off</h3>
              </div>
              <div className="single-product__details-right-3">
                <div className="single-product__details-right-3-1">
                  <h4>Availability:</h4>
                  <h4>Category:</h4>
                  <h4>Free shipping</h4>
                </div>
                <div className="single-product__details-right-3-2">
                  <h4>In stock</h4>
                  <h4>Accessories</h4>
                </div>
              </div>
              <hr />
              <div className="single-product__details-right-4">
                <h4>Select Color:</h4>
                <button className="single-btn-1"></button>
                <button className="single-btn-2"></button>
                <button className="single-btn-3"></button>
                <button className="single-btn-4"></button>
              </div>
              <div className="single-product__details-right-5">
                <h4>Size</h4>
                <select name="" id="">
                  <option value="">XS</option>
                  <option value="">XL</option>
                  <option value="">2XL</option>
                  <option value="">3XL</option>
                </select>
              </div>
              <div className="single-product__details-right-6">
                <div className="single-product__details-right-6-1">
                  <button onClick={handleDecrement}>-</button>
                  <p>{quantity}</p>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div className="single-product__details-right-6-2">
                  <button onClick={handleAddToCart}>
                    <BsCart3 />
                    Add To Cart
                  </button>
                  <button onClick={handleToggleWishlist}>
                    {wishlist.some((s) => s.id === product.id) ? (
                      <FaHeart size={17} color="red" />
                    ) : (
                      <FaRegHeart size={17} color="#40bfff" />
                    )}
                  </button>
                </div>
              </div>
              <hr />
              <div className="single-product__details-right-7">
                <button className="single__btn-facebook">
                  <FaFacebookF />
                  Share on Facebook
                </button>
                <button className="single__btn-twitter">
                  <FaTwitter />
                  Share on Twitter
                </button>
              </div>
            </div>
          </div>
          <div className="single-product__right">
            <h2>BEST SELLER</h2>
            <div className="product">
              <div className="product__img">
                <img src={product.image} alt="image" />
              </div>
              <div className="product__info">
                <h1>{product.title}</h1>
                <img src={rating} alt="rating" />
                <div className="product__price">
                  <h3>${product.price}</h3>
                  <h4>${product.price * 2}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
