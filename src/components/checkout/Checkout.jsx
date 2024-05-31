import React, { useEffect, useState } from "react";
import "./Checkout.scss";
import { useDispatch } from "react-redux";
import { clearCart } from "../../context/cartSlice";
import { toast } from "react-toastify";
import { FaArrowLeft, FaXmark } from "react-icons/fa6";
import { FiCreditCard } from "react-icons/fi";
import { TbBrandPaypalFilled, TbBuildingBank } from "react-icons/tb";

const BOT_TOKEN = "6984601542:AAHCF1HdL0BTa71xaByGNiITcVnhiFoCY_k";
const CHAT_ID = "-4276448242";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  number: "",
  address: "",
};

const Checkout = ({ products, closeModal }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialState);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "";
    text += `Ism: ${data.firstname} %0A`;
    text += `Familiya: ${data.lastname} %0A`;
    text += `Email: ${data.email} %0A`;
    text += `Telefon: ${data.number} %0A`;
    text += `Address: ${data.address} %0A%0A`;
    text += `Tolov usuli: ${paymentMethod} %0A%0A`;

    let quantity = 1;
    products.forEach((el) => {
      text += `<b>Maxsulot: ${quantity}</b> %0A%0A`;
      text += `Nomi: ${el.title} %0A`;
      text += `Miqdor: ${el.quantity} %0A`;
      text += `Narx: $${el.price} %0A%0A`;
      quantity++;
    });

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    closeModal(false);
    dispatch(clearCart());
    window.scrollTo(0, 0);
    toast.success("Your order has been accepted, we will contact you soon");
  };

  return (
    <div className="modal">
      <div className="modal__cont">
        <div className="modal__top">
          <button onClick={() => closeModal(false)} className="modal__top-btn">
            <FaArrowLeft color="#40BFFF" size={22} />
          </button>
          <h2>Make Payment</h2>
          <button onClick={() => closeModal(false)} className="modal__top-btn">
            <FaXmark color="#40BFFF" size={22} />
          </button>
        </div>
        <form className="form">
          <div className="form__cont">
            {Object.keys(initialState)?.map((el) => (
              <input
                key={el}
                value={data[el]}
                placeholder={el}
                onChange={handleChange}
                type="text"
                name={el}
                required
              />
            ))}
            <ul className="form__cards">
              <li className="form__cards-item">
                <div className="form__cards-item-name">
                  <FiCreditCard color="#40BFFF" size={18} />
                  <h4>Credit Card Or Debit</h4>
                </div>
                <input
                  type="radio"
                  id="creditCard"
                  name="payment"
                  value="creditCard"
                  onChange={handlePaymentChange}
                />
                <label htmlFor="creditCard"></label>
              </li>
              <li className="form__cards-item">
                <div className="form__cards-item-name">
                  <TbBrandPaypalFilled color="#1565C0" size={18} />
                  <h4>Paypal</h4>
                </div>
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  value="paypal"
                  onChange={handlePaymentChange}
                />
                <label htmlFor="paypal"></label>
              </li>
              <li className="form__cards-item">
                <div className="form__cards-item-name">
                  <TbBuildingBank color="#40BFFF" size={18} />
                  <h4>Bank Transfer</h4>
                </div>
                <input
                  type="radio"
                  id="bankTransfer"
                  name="payment"
                  value="bankTransfer"
                  onChange={handlePaymentChange}
                />
                <label htmlFor="bankTransfer"></label>
              </li>
            </ul>
          </div>
          <button onClick={handleSubmit}>Go to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
