import React from "react";
import GroomingTabs from "../components/GroomingTabs";
import { Link } from "react-router-dom";
import welcome from "../assets/svgs/grooming-page.png";
import dogGrooming from "../assets/svgs/tab-dog.jpg";
import catGrooming from "../assets/svgs/tab-cat.jpg";
import firstDog from "../assets/svgs/dog.svg";
import secondDog from "../assets/svgs/dog2.svg";
import thirdDog from "../assets/svgs/dog3.svg";
import groomer from "../assets/svgs/groomer.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Back from "../components/Back";
import { AiOutlineArrowUp } from "react-icons/ai";

const Grooming = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Grooming" />
      <div className="grooming">
        <div className="g-intro">
          <div className="g-intro-left" data-aos="fade-right">
            <h4>PROFESYONAL HEYVANLARA BAXIM SALONUMUZ</h4>
            <h1>
              Grooming salonumuza <br /> xoş gəlmisiniz!
            </h1>
            <Link to="contact">
              <button id="gbtn" className="fbtn">
                Rezervasiya edin
              </button>
            </Link>
          </div>
          <div className="g-intro-right" data-aos="fade-left">
            <img src={welcome} width="100%" height="100%" alt="" />
          </div>
        </div>

        <div className="about-groomer">
          <div className="groomer-left" data-aos="fade-right">
            <img width="100%" height="100%" src={groomer} alt="" />
          </div>
          <div className="groomer-right" data-aos="fade-left">
            <h4>Our Master Groomer</h4>
            <h1>Katie Salamon</h1>
            <p>
              Amerika Milli Heyvan Baxımı Assosiasiyası tərəfindən
              sertifikatlaşdırılmışdır. Katie bütün dünyada, Koreyada,
              Almaniyada, Səudiyyə Ərəbistanda, İtaliyada və Panamada itlərə
              qulluq edib və indi o, ev heyvanlarına qulluq salonunu idarə edir.
            </p>
          </div>
        </div>

        <div className="grooming-menu" data-aos="fade-down">
          <Tabs id="tab">
            <TabList className="tabname">
              <Tab>
                <h1 className="tabtitle">İtlər</h1>
              </Tab>
              <Tab>
                <h1 className="tabtitle">Pişiklər</h1>
              </Tab>
            </TabList>

            <TabPanel className="grooming-panel">
              <div className="d-grooming" width="100%" height="100%">
                <div className="d-left">
                  <GroomingTabs
                    priceGrooming="7$"
                    catchingNails="5$"
                    earCleaning="6$"
                    shower="9$"
                    dentalHygiene="11$"
                    fullPacket="20$"
                  />
                </div>
                <div className="d-right">
                  <img
                    className="tabimg"
                    height="100%"
                    width="100%"
                    src={dogGrooming}
                    alt=""
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel className="grooming-panel">
              <div className="c-grooming " width="100%" height="100%">
                <div className="c-left">
                  <img
                    className="tabimg"
                    height="100%"
                    width="100%"
                    src={catGrooming}
                    alt=""
                  />
                </div>
                <div className="c-right">
                  <GroomingTabs
                    priceGrooming="17$"
                    catchingNails="15$"
                    earCleaning="16$"
                    shower="19$"
                    dentalHygiene="21$"
                    fullPacket="40$"
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <div className="about-dg">
          <div className="about-dg-left" data-aos="fade-right">
            <h1>Bədən ölçüsü</h1>
            <p>
              Biz ev heyvanlarına qulluq etmək məsuliyyətini çox ciddi qəbul
              edirik. Onlar sizin ailənizdir.
            </p>
            <Link to="contact">
              <button id="dg-btn" className="fbtn">
                Rezervasiya edin
              </button>
            </Link>
          </div>
          <div className="about-dg-right" data-aos="fade-left">
            <div className="dg-right-left dg-right-card">
              <h1>Kiçik</h1>
              <img src={firstDog} alt="" />
              <h3>40$</h3>
            </div>
            <div className="dg-right-center dg-right-card">
              <h1>Orta</h1>
              <img src={secondDog} alt="" />
              <h3>20$</h3>
            </div>
            <div className="dg-right-right dg-right-card">
              <h1>Böyük</h1>
              <img src={thirdDog} alt="" />
              <h3>60$</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Grooming;
