import { useEffect, useState } from "react";
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../context/cartSlice";
import { Link } from "react-router-dom";
import Empty from "../../components/empty/Empty";
import Checkout from "../../components/checkout/Checkout";
import { IoMdClose } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { toggleWishlist } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const wishlist = useSelector((state) => state.wishlist.value);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    setSubtotal(subtotal);
    setTotal(subtotal);
  }, [cart]);

  let items = cart?.map((el) => (
    <div className="cart__product" key={el.id}>
      <div className="cart__img">
        <Link to={`/product/${el.id}`}>
          <img src={el.image} alt="image" />
        </Link>
        <h1>{el.title}</h1>
        <button
          className="cart__img-btn"
          onClick={() => dispatch(toggleWishlist(el))}
        >
          {wishlist.some((s) => s.id === el.id) ? (
            <FaHeart size={17} color="red" />
          ) : (
            <FaRegHeart size={17} color="#40bfff" />
          )}
        </button>
      </div>
      <div className="cart__info">
        <p className="cart__info-price">${el.price}</p>
        <div className="cart__btns">
          <div className="cart__btns-cont">
            <button
              disabled={el.quantity === 1}
              onClick={() => dispatch(decrementCart(el))}
            >
              -
            </button>
            <span>{el.quantity}</span>
            <button onClick={() => dispatch(incrementCart(el))}>+</button>
          </div>
        </div>
        <p>${el.price * el.quantity}</p>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(el))}
        className="delete__one-cart"
      >
        <MdOutlineClose color="#ff4252" />
      </button>
    </div>
  ));

  return (
    <section>
      <div className="container">
        {cart.length ? (
          <div className="cart">
            <div className="cart__top">
              <h4 className="cart__top-title-1">PRODUCT</h4>
              <h4 className="cart__top-title">Your Cart</h4>
              <div className="cart__top-list">
                <h4>PRICE</h4>
                <h4>QTY</h4>
                <h4>UNIT PRICE</h4>
              </div>
            </div>
            {items}
            <div className="cart__bottom">
              <div className="cart__vaucher">
                <input type="text" placeholder="Voucher code" />
                <button>Redeem</button>
              </div>
              <div className="cart__total">
                <div className="cart__total-item">
                  <p>Subtotal:</p>
                  <p>${subtotal}</p>
                </div>
                <div className="cart__total-item">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="cart__total-item">
                  <p>Cupon:</p>
                  <p>No</p>
                </div>
                <hr />
                <div className="cart__total-item">
                  <h2>TOTAL:</h2>
                  <h2>${total}</h2>
                </div>
                <div className="cart__total-btn">
                  <button onClick={() => setModal(true)}>Check out</button>
                </div>
              </div>
            </div>
            {modal ? <Checkout data={cart} closeModal={setModal} /> : <></>}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
};

export default Cart;
