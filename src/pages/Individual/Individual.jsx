import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import FirstImage from "../../img/lesson/etc/1.jpeg";
import SecondImage from "../../img/lesson/etc/2.jpeg";
import ThirdImage from "../../img/lesson/etc/3.jpeg";
import FourthImage from "../../img/lesson/etc/5.jpeg";
import Fifth from '../../img/lesson/etc/6.jpeg'
import './css/individual.scss'

function Individual() {
  return (
    <>
      <Header />
      <div className="individual container">
        <div className="individual__img">
          <img src={FirstImage} alt="" />
          <img src={SecondImage} alt="" />
          <img src={ThirdImage} alt="" />
          <video
            src={require("../../img/lesson/etc/4.mp4")}
            type="video/mp4"
            controls
            autoPlay
          ></video>
          <img src={FourthImage} alt="" />
          <img src={Fifth} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Individual;
