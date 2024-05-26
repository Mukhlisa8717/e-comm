import React, { useEffect } from "react";
import "./Hero.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateTimeLeft } from "../../context/timerSlice";

const Hero = ({ targetDate }) => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state) => state.timer.timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, targetDate]);
  return (
    <section className="hero">
      <div className="container hero__cont">
        <h1>
          Super Flash Sale <br /> 50% Off
        </h1>
        <div className="hero__countdown">
          <div>
            <span>{timeLeft.days}</span>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.hours}</span>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.minutes}</span>
          </div>
          <span>:</span>
          <div>
            <span>{timeLeft.seconds}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
