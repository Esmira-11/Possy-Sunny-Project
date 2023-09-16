import React from "react";
import Back from "../components/Back";
import vetintro from "../assets/svgs/veteriner-intro.jpg";
import { Link } from "react-router-dom";
import vetimg from "../assets/svgs/home1.png";
import { AiOutlineArrowUp } from "react-icons/ai";

const Veteriner = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Baytar" />
      <div className="veteriner-page">
        <div className="veteriner-intro">
          <div className="veteriner-intro-left" data-aos="fade-right">
            <h4>7/24 xidmətinizdəyik</h4>
            <h1>Onları sadəcə peşəkarlara əmanət edin!</h1>
            <Link to="contact">
              <button id="gbtn" className="fbtn">
                Rezervasiya edin
              </button>
            </Link>
          </div>
          <div className="veteriner-intro-right" data-aos="fade-left">
            <img src={vetintro} className="veteriner-intro-img" alt="" />
          </div>
        </div>
        <div className="veteriner-main">
          <div className="vmain-left" data-aos="fade-right">
            <img src={vetimg} alt="" />
          </div>
          <div className="vmain-right" data-aos="fade-left">
            <h1>Vəzifələrimiz</h1>
            <h3>Şəraitlərin diaqnostikası</h3>
            <h3>Peyvəndlərin verilməsi</h3>
            <h3>Dərmanların təyin edilməsi</h3>
            <h3>Əməliyyatların aparılması</h3>
            <h3>Diaqnostik testlərin tamamlanması</h3>
            <h3>Heyvan sahiblərinin maarifləndirilməsi</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Veteriner;
