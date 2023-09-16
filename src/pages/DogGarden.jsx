// import React,{ Component } from 'react';
import Back from "../components/Back";
import intro from "../assets/svgs/intro.png";
import { Link } from "react-router-dom";
import catgarden from "../assets/svgs/cat-garden.jpg";
import dogsgarden from "../assets/svgs/dog-garden.png";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

// import { render } from 'react-dom';
// import Typed from 'react-typed';
import coverageimg from "../assets/svgs/coverage.png";

const DogGarden = () => {
  return (
    <>
      {/* <a href="">
        <AiOutlineArrowUp className="gotopbtn" />
      </a> */}
      <Back page="Bağça" />
      <div className="dog-garden">
        <div className="garden-intro">
          <div className="garden-intro-left" data-aos="fade-right">
            <h4>SEVIMLI DOSTLARINIZ ÜÇÜN BAĞÇA</h4>
            <h1>Əyləncə mərkəzimizə xoş gəlmisiniz!</h1>
            <Link to="contact">
              <button id="gbtn" className="fbtn">
                Rezervasiya edin
              </button>
            </Link>
            {/* <h1>Dostlarınız bizə əmanət</h1> */}
            {/* <p>Özəl günlərinizdə dostlarınızın mərkəzimizdə istirahət etməsi,əylənməsi,yeni dostlar qazanması,salonumuzda saatlarla vaxt keçirməsi üçün nəzərdə tutulmuşdur.</p> */}
            {/* <Typed
                strings={[
                    'İstirahətinizdən zövq alın',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop >
                    
                </Typed> */}
          </div>
          <div className="garden-intro-right" data-aos="fade-left">
            <img src={intro} className="garden-intro-img" alt="" />
          </div>
        </div>

        <section className="cat-garden">
          <div className="cat-garden-left" data-aos="fade-right">
            <img src={catgarden} className="cat-garden-img" alt=""></img>
          </div>
          <div className="cat-garden-right" data-aos="fade-left">
            <h1>Pişik otaqları</h1>
            <p>
              Tətilə çıxmağı planlaşdırırsınızsa və ev heyvanınıza etibarlı bir
              mütəxəssisin baxmasını istəyirsinizsə, biz az sayda ev heyvanı
              üçün evdən uzaqda təcrübə təqdim edirik.
            </p>
          </div>
        </section>

        <section className="dogs-garden">
          <div className="dogs-garden-left" data-aos="fade-right">
            <h1>It otaqları</h1>
            <p>
              Sevimli dostunuzun evdən ayrılıq narahatlığı varsa, sizə ev kimi
              qoxuyan bir şey gətirməyi tövsiyə edirik.Bu ən sevdiyi oyuncağı da
              ola bilər.
            </p>
          </div>
          <div className="dogs-garden-right" data-aos="fade-left">
            <img src={dogsgarden} className="dogs-garden-img" alt=""></img>
          </div>
        </section>

        <section className="normal-room">
          <div className="room-card" data-aos="flip-left">
            <h1>Ümumi oyun zalı</h1>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Yeni Dostlar</h3>
            </div>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Etibarlı nəzarət</h3>
            </div>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Canlı izləmə</h3>
            </div>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Qida</h3>
            </div>
            <h2>1saat - 150$</h2>
          </div>
        </section>

        <section className="viproom">
          <div className="room-card" data-aos="flip-left">
            <h1>VIP otaqlar</h1>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Etibarlı nəzarət</h3>
            </div>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Canlı izləmə</h3>
            </div>
            <div className="room-card-main">
              <BsPatchCheck className="checkicon" />
              <h3>Qida</h3>
            </div>
            <h2>1 saat - 300$</h2>
          </div>
          <img
            src={coverageimg}
            id="garden-foot"
            className="back-foot"
            alt=""
          />
        </section>
      </div>
    </>
  );
};

export default DogGarden;
