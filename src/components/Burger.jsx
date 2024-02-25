import "./css/burger.scss";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../img/logo/logo.png";
import Phone from "../img/svg/phone.svg"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("lock-scroll");
    } else {
      body.classList.remove("lock-scroll");
    }
  }, [isOpen]);

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <div className="burger-contan">
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <img src={Logo} alt="" width={50} />
        <button className="burger-menu__button" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
        <div className="burger-menu__items">
          <ul>
            <li>
              <NavLink to="/" onClick={handleNavLinkClick}>
                ƏSAS SƏHİFƏ
              </NavLink>
            </li>
            <li className="burger-menu-contact">
              <img src={Phone} width={26} alt="" />
              <a href="tel:+994998919281">+994998919281</a>
            </li>
            <li className="burger-menu-contact">
              <img src={Phone} width={26} alt="" />
              <a href="tel:+994515919281">+994515919281</a>
            </li>
            <li className="burger-menu-contact">
              <img src={Phone} width={26} alt="" />
              <a href="tel:+9940708919281">+994708919281</a>
            </li>
            <li className="dropdown-burger-content">
              <NavLink to="/imtahan-tarixleri">Imtahan Tarixiləri</NavLink>
              <NavLink to="/imtahan-cavablari">Imtahan Cavabları</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
