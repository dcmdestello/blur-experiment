import React from "react";
import "./Carousel.css";
import { slides } from "../data";

const Carousel = () => {
  return (
    <div className="carousel">
      {slides.map((slide) => (
        <div key={slide.title} className="slide">
          <img src={slide.backgroundImage} alt={slide.title} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
