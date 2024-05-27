import React from "react";
import "./Featured.scss";
import { FEATURED__PRODUCTS } from "../../context";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container featured__all">
        <div className="featured__cont">
          <h1>FEATURED PRODUCTS</h1>
          <div className="featured__wrapper">
            {FEATURED__PRODUCTS?.map((el) => (
              <div key={el.id} className="featured__card">
                <div className="featured__card-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="featured__card-info">
                  <h2>{el.title}</h2>
                  <img src={el.rating} alt="rating" />
                  <div className="featured__card-info-prices">
                    <h3>{el.price}</h3>
                    <h4>{el.oldPrice}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="search__product">
          <input type="text" placeholder="Search query..." />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
