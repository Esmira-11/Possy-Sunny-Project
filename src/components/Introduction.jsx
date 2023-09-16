import React from "react";
import "../App.css";
import coverageimg from "../assets/svgs/coverage.png";

const Introduction = () => {
  return (
    <div className="introduction" data-aos="zoom-out">
      <div className="introduction-title" data-aos="fade-up">
        <h1>
          Onlar <br /> bizim ailəmizdir
        </h1>
      </div>
      <img src={coverageimg} alt="" />
    </div>
  );
};

export default Introduction;
