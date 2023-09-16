import fComment from "../assets/svgs/f-comment.png";
import sComment from "../assets/svgs/s-comment.png";
import tComment from "../assets/svgs/t-comment.png";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";

const Comment = () => {
  return (
    <>
      <h1 className="commenth">Müştəri rəyi</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          740: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div className="comment-section" data-aos="fade-down">
          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={fComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Michael Mason</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>Bütün xidmətlərin bir məkanda toplanması mükəmməldir.</p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={sComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Sebastian Ethan</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Daim müraciət etdiyim işinin peşəkarları ilə dolu məkan.
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={tComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Maverick Elias</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Xidmətləriniz çox önəmlidir. Bağçanın olması isə
                    mükəmməldir.{" "}
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={fComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Michael Mason</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>Bütün xidmətlərin bir məkanda toplanması mükəmməldir.</p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={sComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Sebastian Ethan</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Daim müraciət etdiyim işinin peşəkarları ilə dolu məkan.
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={tComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Maverick Elias</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Xidmətləriniz çox önəmlidir. Bağçanın olması isə
                    mükəmməldir.{" "}
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={fComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Michael Mason</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>Bütün xidmətlərin bir məkanda toplanması mükəmməldir.</p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={sComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Sebastian Ethan</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Daim müraciət etdiyim işinin peşəkarları ilə dolu məkan.
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={tComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Maverick Elias</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Xidmətləriniz çox önəmlidir. Bağçanın olması isə
                    mükəmməldir.{" "}
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={fComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Michael Mason</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>Bütün xidmətlərin bir məkanda toplanması mükəmməldir.</p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={sComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Sebastian Ethan</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Daim müraciət etdiyim işinin peşəkarları ilə dolu məkan.
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="comment-card">
              <div className="ccard-top">
                <div className="ccard-img">
                  <img src={tComment} alt="" />
                </div>
                <div className="ccard-name">
                  <h4>Maverick Elias</h4>
                </div>
              </div>
              <div className="ccard-bottom">
                <div className="comment-main">
                  <p>
                    Xidmətləriniz çox önəmlidir. Bağçanın olması isə
                    mükəmməldir.{" "}
                  </p>
                </div>
                <div className="rate">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};

export default Comment;
