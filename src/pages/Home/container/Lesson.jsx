import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import FirstImage from "../../../img/lesson/child/2.jpeg";
import SecondImage from "../../../img/lesson/comp/ofis.jpeg";
import ThirdImage from "../../../img/lesson/etc/science.jpg";
import FourthImage from "../../../img/lesson/foreign/f.jpg";
import "../css/lesson.scss";

const Lessons = () => {
  return (
    <div className="lessons" id="lessons">
      <h1>Dərslər</h1>
      <div className="container lessons__container">
        <div className="lessons__container--item">
          <img src={FirstImage} alt="" />{" "}
          <div className="lessons__container--text">
            <NavLink to="/ibtidai-sinifler">Ibtidai siniflər üçün</NavLink>
          </div>
        </div>
        <div className="lessons__container--item">
          <img src={SecondImage} alt="" />
          <div className="lessons__container--text">
            <NavLink to="/offis-proqramlari">Ofis Proqramları</NavLink>
          </div>
        </div>
        <div className="lessons__container--item">
          <img src={ThirdImage} alt="" />
          <div className="lessons__container--text">
          <NavLink to="/ferdi-hazirliqlar">Fərdi Hazırlıqlar</NavLink>
          </div>
        </div>
        <div className="lessons__container--item">
          <img src={FourthImage} alt="" />
          <div className="lessons__container--text">
            <NavLink to="/xarici-diller">Xarici Dillər</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
