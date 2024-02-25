import React from 'react'
import './css/ofis.scss'
import Header from '../../components/header'
import Footer from '../../components/Footer'
import FirstImage from "../../img/lesson/comp/ofis.jpeg";
import SecondImage from "../../img/lesson/comp/1.jpeg";
import ThirdImage from "../../img/lesson/comp/2.jpeg";
import FourthImage from "../../img/lesson/comp/3.jpeg";

export default function Offis() {
  return (
    <div>
      <Header/>
      <div className="prog container">
      <div className="prog__img">
        <img src={FirstImage} alt="" />
        <img src={SecondImage} alt="" />
        <img src={ThirdImage} alt="" />
        <img src={FourthImage} alt="" />
      </div>
    </div>
      <Footer/>
    </div>
  )
}
