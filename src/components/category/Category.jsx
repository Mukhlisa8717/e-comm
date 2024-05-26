import React, { useState } from 'react'
import './Category.scss'
import { PiBaseballCap, PiBriefcaseBold, PiDress, PiEyeglasses, PiHandbag, PiShirtFolded, PiTShirt, PiWatch } from 'react-icons/pi';

const Category = () => {
    const [showAll, setShowAll] = useState(false);

    const handleMoreClick = () => {
      setShowAll(!showAll);
    };
  return (
    <section className="category">
      <div className="container">
        <div className="category__top">
          <h3>Category</h3>
          <button className="more__btn" onClick={handleMoreClick}>
            {showAll ? "Show Less" : "More Category"}
          </button>
        </div>
        <ul className={`category__list ${showAll ? "show-all" : ""}`}>
          <li className="category__list-item">
            <PiShirtFolded size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiDress size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiBriefcaseBold size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiHandbag size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiEyeglasses size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiTShirt size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiWatch size={18} color="#40bfff" />
          </li>
          <li className="category__list-item">
            <PiBaseballCap size={18} color="#40bfff" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Category
