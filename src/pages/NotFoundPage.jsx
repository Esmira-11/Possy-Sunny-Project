import React from "react";
import Errorimg from "../assets/svgs/error-img.png";
import homeicon from "../assets/icons/home-icon.svg";
import { Link } from "react-router-dom";
import Back from "../components/Back";
import { AiOutlineArrowUp } from "react-icons/ai";

const NotFoundPage = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Error 404" />
      <div className="error">
        <img src={Errorimg} alt="404 FOUND" id="errorimg" />
        <h1>Səhifə Tapılmadı</h1>
        <small>
          Zəhmət olmasa ünvanın doğruluğundan əmin olun və ya ana səhifəyə geri
          dönün
        </small>
        <Link className="links" to="/">
          <button className="homebtn">
            <img src={homeicon} alt="HOME" id="homeicon" /> Ana səhifə
          </button>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
