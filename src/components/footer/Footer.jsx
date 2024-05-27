import React from "react";
import "./Footer.scss"
import logo from "../../assets/logo.png"
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import brands from "../../assets/Brands.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cont">
          <div className="footer__top">
            <div className="footer__top-cont">
              <div className="footer__top-logo">
                <img src={logo} alt="logo" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="footer__top-cont">
              <h1>Follow Us</h1>
              <p>
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="footer__top-logo">
                <FaFacebookF color="#385c8f" />
                <FaTwitter color="#03A9F4" />
              </div>
            </div>
            <div className="footer__top-cont">
              <h1>Contact Us</h1>
              <p>
                E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
              </p>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-top">
              <ul className="footer__list">
                <h4>Infomation</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer__list">
                <h4>Service</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer__list">
                <h4>My Account</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
              <ul className="footer__list">
                <h4>Our Offers</h4>
                <li>About Us</li>
                <li>Infomation</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <hr />
            <div className="footer__bottom-bottom">
              <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
              <img src={brands} alt="brands" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
