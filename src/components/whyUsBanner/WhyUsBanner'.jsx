import React from "react";
import "./WhyUsBanner.scss"
import { WHY_US_BANNER } from "../../context";

const WhyUsBanner = () => {
  return (
    <section className="whyUs-banner">
      <div className="container">
        <div className="whyUs-banner__wrapper">
          {WHY_US_BANNER?.map((el) => (
            <div key={el.id} className="whyUs__card">
              <img src={el.img} alt="image" />
              <h1>{el.title}</h1>
              <p>
               {el.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsBanner;
