import React from "react";
import Introduction from "../components/Introduction";
import ServicesCards from "../components/ServicesCards";
import Success from "../components/Success";
import servicesData from "../servicesCards.json";
import { BsPatchCheck, BsPersonCircle, BsShieldCheck } from "react-icons/bs";
import { GiMedicalPackAlt } from "react-icons/gi";
import Comment from "../components/Comment";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home">
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Introduction />
      <div className="services-section" data-aos="fade-down">
        <h1>Xidmətlərimiz</h1>
        <div className="services-main">
          {servicesData.map((p) => (
            <ServicesCards
              title={p.cardTitle}
              content={p.cardContent}
              key={p.id}
            />
          ))}
        </div>
      </div>
      <section className="feature">
        <div className="feature-left" data-aos="fade-right">
          <div className="fleft-top features">
            <BsPersonCircle className="feaicon" />
            <h2>ID Nişanlı</h2>
          </div>
          <div className="fleft-bottom features">
            <BsPatchCheck className="feaicon" />
            <h2>DBS Yoxlanılıb</h2>
          </div>
        </div>
        <div className="feature-center" data-aos="zoom-in">
          <h1>
            Ev heyvanlarınız bizim qayğımızda <span>100% təhlükəsizdir.</span>
          </h1>
        </div>
        <div className="feature-right" data-aos="fade-left">
          <div className="fright-top features">
            <BsShieldCheck className="feaicon" />
            <h2>Tam Sığortalı</h2>
          </div>
          <div className="fright-bottom features">
            <GiMedicalPackAlt className="feaicon feamedic" />
            <h2>Heyvanlara İlk Yardım Təlimləri</h2>
          </div>
        </div>
      </section>
      <Success />
      <Comment />
    </div>
  );
};

export default Home;
