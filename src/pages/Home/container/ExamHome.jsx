import React from "react";
import FirstImage from "../../../img/lesson/imt/imt.jpeg";
import SecondImage from "../../../img/lesson/imt/ans.jpg";
import { NavLink } from 'react-router-dom'
import "../css/examehome.scss";

const ExameHome = () => {
  return (
    <div className="exame">
      <h1 className="container">Imtahanlar</h1>
      <div className="container exame__container">
        <div className="exame__container--item">
          <img src={FirstImage} alt="" />
          <div className="exame__container--text">
            <NavLink to="/imtahan-tarixleri">Imtahan Tarixiləri</NavLink>
          </div>
        </div>
        <div className="exame__container--item">
          <img src={SecondImage} alt="" />
          <div className="exame__container--text">
            <NavLink to="/imtahan-cavablari">Imtahan Cavabları</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExameHome;
