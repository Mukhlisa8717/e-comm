import React from "react";
import emptyImg from "../../assets/emptyImg.png";
import "./Empty.scss";

const Empty = () => {
  return (
    <div className="empty">
      <img src={emptyImg} alt="empty" />
    </div>
  );
};

export default Empty;
