import React from "react";
import { Link } from "react-router-dom";
const ServicesCards = ({ title, content }) => {
  return (
    <div className="servicesCards">
      <div className="content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Link to="contact">
        <button id="sbtn" className="fbtn">
          Rezervasiya edin
        </button>
      </Link>
    </div>
  );
};

export default ServicesCards;
