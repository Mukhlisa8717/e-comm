import React from 'react'
import "./NewsBanner.scss"
import { NEWS__BANNER } from '../../context';

const NewsBanner = () => {
  return (
    <section className="news-banner">
      <div className="container">
        <div className="news-banner__cont">
          <h1>LATEST NEWS</h1>
          <div className="news-banner__wrapper">
            {NEWS__BANNER?.map((el) => (
              <div key={el.id} className="news__card">
                <div className="news__card-img">
                  <img src={el.img} alt="" />
                </div>
                <div className="news__card-info">
                  <p className='news__card-info-date'>01 Jan, 2015</p>
                  <h1>{el.title}</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsBanner
