import React from "react";
import { GiStarsStack, GiSittingDog } from "react-icons/gi";
import { FaPaw, FaTrophy } from "react-icons/fa";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div className="success">
      <div className="success-cards">
        <div className="scards-left" data-aos="fade-right">
          <div className="s-card sm-card">
            <div className="s-card-left">
              <GiStarsStack className="success-icons" />
            </div>
            <div className="s-card-right">
              <h1>
                <CountUp start={500} end={700} duration={2} />+
              </h1>
              <h3>Müştəriyə Xidmət</h3>
            </div>
          </div>
          <div className="s-card">
            <div className="s-card-left">
              <FaPaw className="success-icons" />
            </div>
            <div className="s-card-right">
              <h1>
                <CountUp end={500} duration={2} />+
              </h1>
              <h3>Daimi müştəri</h3>
            </div>
          </div>
        </div>

        <div className="scards-right" data-aos="fade-left">
          <div className="s-card sm-card">
            <div className="s-card-left">
              <GiSittingDog className="success-icons" />
            </div>
            <div className="s-card-right">
              <h1>
                <CountUp end={10000} duration={2} />
              </h1>
              <h3>Mil gəzinti</h3>
            </div>
          </div>
          <div className="s-card">
            <div className="s-card-left">
              <FaTrophy className="success-icons" />
            </div>
            <div className="s-card-right">
              <h1>
                <CountUp end={5} duration={2} />
              </h1>
              <h3>İl təcrübə</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
