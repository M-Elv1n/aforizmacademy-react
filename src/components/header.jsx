import React, { useState } from "react";
import "./css/header.scss";
import Logo from "../img/logo/logo.png";
import Phone from "../img/svg/phone.svg";
import Burger from './Burger';
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} width={50} alt="Logo" />
          </NavLink>
        </div>
        <div className="header__list">
          <ul>
            <li>
              <NavLink to="/">ƏSAS SƏHİFƏ</NavLink>
            </li>
            <li>
              <a href="tel:+994998919281" className="header__list--phone">
                <img src={Phone} width="20" alt="" />
                +994998919281
              </a>
            </li>
            <li>
              <a href="tel:+994515919281" className="header__list--phone">
                <img src={Phone} width="20" alt="" />
                +994515919281
              </a>
            </li>
            <li>
              <a href="tel:+9940708919281" className="header__list--phone">
                <img src={Phone} width="20" alt="" />
                +994708919281
              </a>
            </li>
            <li>
              <div className="dropdown">
                <div className="dropdown-btn" onClick={handleDropdownClick}>
                  Imtahanlar<span className="arrow"></span>
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/imtahan-tarixleri">Imtahan Tarixiləri</NavLink>
                    <NavLink to="/imtahan-cavablari">Imtahan Cavabları</NavLink>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Burger/>
    </header>
  );
}
