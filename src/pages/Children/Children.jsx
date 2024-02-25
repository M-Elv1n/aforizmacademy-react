import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import First from '../../img/lesson/child/1.jpeg'
import Second from '../../img/lesson/child/2.jpeg'
import './css/child.scss'

export default function Children() {
  return (
    <div>
      <Header />
      <div class="child container">
        <div class="child__img">
          <img src={First} alt="" />
          <img src={Second} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
