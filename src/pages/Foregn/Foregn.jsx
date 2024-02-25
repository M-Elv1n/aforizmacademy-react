import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import FirstImage from "../../img/lesson/foreign/1.jpeg";
import SecondImage from "../../img/lesson/foreign/2.jpeg";
import ThirdImage from "../../img/lesson/foreign/3.jpeg";
import './css/foregn.scss'

export default function Foregn() {
  return (
    <>
      <Header />
      <div className="foreign container">
        <div className="foreign__img">
          <img src={FirstImage} alt="" />
          <img src={SecondImage} alt="" />
          <img src={ThirdImage} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}
