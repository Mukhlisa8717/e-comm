import React from 'react'
import homeBanner from "../../assets/homeBanner.png"
import './HomeBanner.scss'

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="container home-banner__cont">
        <div className="home-banner__left">
          <h1>Adidas Men Running Sneakers</h1>
          <p>Performance and design. Taken right to the edge.</p>
          <button>SHOP NOW</button>
        </div>
        <div className="home-banner__left2">
          <h1>Recomended Product</h1>
          <p>We recommend the best for you</p>
        </div>
        <div className="home-banner__right">
          <img src={homeBanner} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner
