import React, { useState } from "react";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import { GoHome, GoTag } from "react-icons/go";
import { PiBellBold } from "react-icons/pi";

const Navbar = () => {
  const navigate = useNavigate();
  let [shrink, setShrink] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setShrink(true)
    } else{
      setShrink(false)
    }
  })

  const handleLoginClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="navbar navbar__top">
          <div className="navbar__selects">
            <select name="language" id="language">
              <option value="en">EN</option>
            </select>
            <select name="currency" id="currency">
              <option value="usd">USD</option>
            </select>
          </div>
          <div className="navbar__menu">
            <div onClick={handleLoginClick} style={{ cursor: "pointer" }}>
              <FaRegUser size={21} color="black" />
            </div>
            <NavLink to={"/wishlist"}>
              <AiOutlineHeart size={24} color="black" />
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart size={21} color="black" />
            </NavLink>
            <h5 className="navbar__menu-text">Items</h5>
            <div className="search">
              <input type="text" placeholder="$0.00" className="search__inp" />
              <button className="search__btn">
                <IoSearchSharp size={20} />
              </button>
            </div>
          </div>
          <div className="navbar__top-menu">
            <div className="navbar__top-menu-search">
              <span>
                <IoSearchSharp size={14} color="#40bfff" />
              </span>
              <input type="text" placeholder="Search Product" />
            </div>
            <div className="navbar__top-menu-links">
              <NavLink to={"/wishlist"}>
                <FaRegHeart size={24} color="#8f97b0" />
              </NavLink>
              <NavLink to={"/news"}>
                <PiBellBold size={24} color="#8f97b0" />
              </NavLink>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar__bottom">
          <NavLink to={"/"}>
            <img src={Logo} alt="logo" className="navbar__logo" />
          </NavLink>
          <div className="navbar__links">
            <NavLink to={"/"}>
              <span>Home</span>
            </NavLink>
            <NavLink to={"/bags"}>
              <span>Bags</span>
            </NavLink>
            <NavLink to={"/sneakers"}>
              <span>Sneakers</span>
            </NavLink>
            <NavLink to={"/belt"}>
              <span>Belt</span>
            </NavLink>
            <NavLink to={"/contact"}>
              <span>Contact</span>
            </NavLink>
          </div>
          <div className="navbar__bottom-links">
            <NavLink to={"/"}>
              <GoHome size={24} color="#8f97b0" />
            </NavLink>
            <NavLink to={"/search"}>
              <IoSearchSharp size={24} color="#8f97b0" />
            </NavLink>
            <NavLink to={"/cart"}>
              <FiShoppingCart size={24} color="#8f97b0" />
            </NavLink>
            <NavLink to={"/contact"}>
              <GoTag size={24} color="#8f97b0" />
            </NavLink>
            <div onClick={handleLoginClick} style={{ cursor: "pointer" }}>
              <FaRegUser size={24} color="#8f97b0" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
