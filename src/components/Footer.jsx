import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import footertop from "../assets/svgs/footer_top.png";
import phoneicon from "../assets/icons/phone-icon.svg";
import emailicon from "../assets/icons/email-icon.svg";
import locicon from "../assets/icons/location-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={footertop} alt="" width="100%" />
      <div className="footer-content">
        <div className="contacts">
          <h3>Əlaqələr</h3>
          <div id="tel-contact" className="footer-data">
            <div className="icon">
              <img src={phoneicon} alt="" />
            </div>
            <div className="tellinks">
              <h6 className="flink">
                <a href="tel:+8801761111456">+880 176 1111 456</a>
              </h6>
              <h6 className="slink">
                <a href="tel:+8801701111000">+880 170 1111 000</a>
              </h6>
            </div>
          </div>
          <div id="email-contact" className="footer-data">
            <div className="icon">
              <img src={emailicon} alt="" />
            </div>
            <div className="links">
              <h6 className="flink">
                <a href="mailto:info@example.com">info@example.com</a>
              </h6>
              <h6 className="slink">
                <a href="mailto:info@support.com">info@support.com</a>
              </h6>
            </div>
          </div>
          <div id="location-info" className="footer-data">
            <div className="icon">
              <img src={locicon} alt="" />
            </div>
            <div className="links">
              <h6 className="flink">
                <a>168/170, Avenue 01, Mirpur</a>
              </h6>
              <h6 className="slink">
                <a>DOHS, Bangladesh</a>
              </h6>
            </div>
          </div>
        </div>
        <div className="question">
          <h1>
            Ən yaxın dostlarınızı <br /> mərkəzimizə gətirmək istəyirsiniz?
          </h1>
          <Link to="contact">
            <button id="fbtn" className="fbtn">
              Rezervasiya edin
            </button>
          </Link>
        </div>
        <div className="working-time">
          <h3 id="slink" className="slink">
            İş saatlarımız
          </h3>
          <h6 className="slink">B.e - Cümə: 8.00 - 20.00</h6>
          <h6 className="slink">Şənbə: 8.00 - 18.00</h6>
          <h6 className="slink">Bazar: Bağlıdır</h6>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
