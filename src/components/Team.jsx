import React from "react";
import fTeam from "../assets/svgs/fTeam.png";
import sTeam from "../assets/svgs/sTeam.png";
import tTeam from "../assets/svgs/tTeam.png";

const Team = () => {
  return (
    <>
      <h1 className="team-title" data-aos="fade-up">
        Komandamız
      </h1>

      <div className="team">
        <div className="member-card" data-aos="flip-left">
          <div className="member-card-top">
            <img src={fTeam} alt="" />
          </div>
          <div className="member-card-bottom">
            <h1>Emilia Johnson</h1>
            <h3>Bağça idarəçisi</h3>
          </div>
        </div>

        <div className="member-card" data-aos="flip-left">
          <div className="member-card-top">
            <img src={sTeam} alt="" />
          </div>
          <div className="member-card-bottom">
            <h1>Peter Ronson</h1>
            <h3>Gəzinti koordinatoru</h3>
          </div>
        </div>

        <div className="member-card" data-aos="flip-left">
          <div className="member-card-top">
            <img src={tTeam} alt="" />
          </div>
          <div className="member-card-bottom">
            <h1>Barbra Stevens</h1>
            <h3>Groomer & Baytar</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
