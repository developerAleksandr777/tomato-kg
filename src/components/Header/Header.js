import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logo from "../../assets/icons/logo.ico";

const Header = ({ title }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 850) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    background: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
    transition: "0.7s",
    boxShadow: scrolled ? "0 4px 25px 2px black" : "",
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <div className={s.header__wrap}>
          <a href="#">
            <img src={logo} alt="logo tomato kg" />
          </a>

          <ul>
            <NavLink to="/">Главная</NavLink>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
