import React from "react";
import Back from "../components/Back";
import walkintro from "../assets/svgs/walking-intro.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

const Walking = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Gəzinti" />
      <div className="walking">
        <div className="walking-intro">
          <div className="walking-intro-left" data-aos="fade-up-right">
            <h4>Dostlarınızın gəzintisini bizə əmanət edə bilərsiniz</h4>
            <h1>Gəzinti xidmətimizlə tanış olun!</h1>
            <Link to="contact">
              <button id="gbtn" className="fbtn">
                Rezervasiya edin
              </button>
            </Link>
          </div>
          <div className="walking-intro-right" data-aos="fade-up-left">
            <img src={walkintro} className="walking-intro-img" alt="" />
          </div>
        </div>
        <div className="walking-main">
          <div className="main-title">
            <h1 data-aos="zoom-in">Gəzinti onlar üçün çox önəmlidir</h1>
          </div>
        </div>
        <div className="walking-price">
          <div className="walking-price-day" data-aos="flip-right">
            <h1 className="walking-content">Günlük gəzinti</h1>
            <h3>08:00 -- 09:00</h3>
            <h3>18:00 -- 19:00</h3>
            <h2 className="wprice">25$</h2>
          </div>
          <div className="walking-price-month" data-aos="flip-left">
            <h1 className="walking-content">Aylıq gəzinti</h1>
            <h3>08:00 -- 09:00</h3>
            <h3>18:00 -- 19:00</h3>
            <h2 className="wprice">550$</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Walking;
