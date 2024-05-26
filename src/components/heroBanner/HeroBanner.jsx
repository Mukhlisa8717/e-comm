import React from "react";
import "./HeroBanner.scss";
import { FLASH_SALE } from "../../context";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner__wrapper">
          {FLASH_SALE?.map((el) => (
            <div
              key={el.id}
              style={{
                backgroundImage: `url(${el.image})`,
              }}
              className="hero-banner__card"
            >
              <h3 className="hero-banner__card-title">{el.title}</h3>
              <div className="hero-banner__card-bottom">
                <div className="hero-banner__card-old-prices">
                  <p>${el.oldPrice}</p>
                  <h4>{el.discount}</h4>
                </div>
                <h2>${el.price}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
