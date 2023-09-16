import React from "react";
import { TbPaw } from "react-icons/tb";
import { Link } from "react-router-dom";
import coverageimg from "../assets/svgs/coverage.png";
const Back = (props) => {
  return (
    <div className="back-content" data-aos="zoom-out">
      <div className="back-main">
        <h1>{props.page}</h1>
        <div className="tohome">
          <Link to="/">Ana səhifə</Link>
          <TbPaw className="pawicon" />
        </div>
      </div>
      <img src={coverageimg} className="back-foot" alt="" />
    </div>
  );
};

export default Back;
