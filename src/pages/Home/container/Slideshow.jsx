import React, { useState, useEffect } from "react";
import FirstImage from "../../../img/er/1.jpg";
import SecondImage from "../../../img/er/2.jpg";
import ThirdImage from "../../../img/er/2.webp";
import { NavLink } from "react-router-dom";
import "../css/slider.scss";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      id: 0,
      image: FirstImage,
      text: "IMTAHAN TARİXLƏRİ ÜÇÜN DAXİL OLUN",
      link: "/imtahan-tarixleri",
    },
    {
      id: 1,
      image: SecondImage,
      text: "IMTAHAN TARİXLƏRİ ÜÇÜN DAXİL OLUN",
      link: "/imtahan-tarixleri",
    },
    {
      id: 2,
      image: ThirdImage,
      text: "IMTAHAN TARİXLƏRİ ÜÇÜN DAXİL OLUN",
      link: "/imtahan-tarixleri",
    },
  ];

  return (
    <div className="slideshow-container">
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`slides ${slideIndex === slide.id ? "fade" : ""}`}
        >
          <div className="image-container">
            <img src={slide.image} style={{ width: "100%" }} alt="" />
            <div className="text-container">
              <div className="text">{slide.text}</div>
              <button>
              <NavLink to={slide.link}>DAXIL OL</NavLink>
              </button>
            </div>
            <div className="text-container_mob">
              <div className="text">{slide.text}</div>
              <button>
                <NavLink to={slide.link}>DAXIL OL</NavLink>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
