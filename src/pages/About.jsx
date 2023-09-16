import React from "react";
import Back from "../components/Back";
import Faq from "../components/Faq";
import Comment from "../components/Comment";
import Team from "../components/Team";
import { AiOutlineArrowUp } from "react-icons/ai";

const About = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Haqqımızda" />
      <Faq />
      <Comment />
      <Team />
    </>
  );
};

export default About;
