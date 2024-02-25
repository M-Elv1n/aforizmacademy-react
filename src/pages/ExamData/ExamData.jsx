import React from "react";
import Header from "../../components/header";
import Footer from "../../components/Footer";
import FirstImage from "../../img/lesson/imt/imt2.jpeg";
import "./css/examdata.scss";

export default function ExamData() {
  return (
    <div>
      <Header />
      <div class="exdata">
        <div className="exdata__img container">
          <img src={FirstImage} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
