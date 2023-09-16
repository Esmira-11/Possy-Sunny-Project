import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/svgs/transparent-logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
function Navbar() {
  //useref hook geriye current yeni cari kliklenen yeri qaytarir
  const overlayMenuRef = useRef();
  function openOverlayMenu(e) {
    const clicked = e.target;
    if (clicked.classList.contains("bars-icon")) {
      overlayMenuRef.current.classList.add("aktiv");
    }
  }

  function closeOverlayMenu(e) {
    const clicked = e.target;
    if (clicked.classList.contains("cross-icon")) {
      overlayMenuRef.current.classList.remove("aktiv");
    }
  }

  const [navbar, setNavbar] = useState(false);
  // const showButton = () => {
  //   if(window.innerWidth <= 960){
  //     setButton(false);
  //   }
  //   else{
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);
  // window.addEventListener('resize',showButton);

  const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "navbar active" : "navbar"}>
      <div className="overlay" ref={overlayMenuRef}>
        <GiCrossMark className="cross-icon" onClick={closeOverlayMenu} />
        <div className="overlay-content">
          <Link className="links" to="/">
            Ana səhifə
          </Link>
          <Link className="links" to="about">
            Haqqımızda
          </Link>
          <div className="links dropdown">
            Xidmətlər
            <div className="dropdown-content">
              <Link to="veteriner">Baytar</Link>
              <Link to="grooming">Grooming</Link>
              <Link to="doggarden">Bağça</Link>
              <Link to="walking">Gəzinti</Link>
            </div>
          </div>
          <a className="links" href="#">
            Our Clients
          </a>
          <Link className="links" to="contact">
            Əlaqə
          </Link>
        </div>
      </div>
      <div className="logo">
        <img src={logo} alt="Possy Sunny" />
      </div>
      <FaBars className="bars-icon" onClick={openOverlayMenu} />
      <nav className="nav-links">
        <Link className="links" to="/">
          Ana səhifə
        </Link>
        <Link className="links" to="about">
          Haqqımızda
        </Link>
        <div className="links dropdown">
          Xidmətlər
          <div className="dropdown-content">
            <Link to="veteriner">Baytar</Link>
            <Link to="grooming">Grooming</Link>
            <Link to="doggarden">Bağça</Link>
            <Link to="walking">Gəzinti</Link>
          </div>
        </div>
        <Link className="links" to="contact">
          Əlaqə
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
