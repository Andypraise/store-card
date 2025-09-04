import React, { useState, useEffect } from "react";
import "./SliderCard.css";



function SliderCard({ slides }) {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval); // cleanup
  }, [slides.length]);

  

  return (
    <div className="slider-card">


      <div className="slide-container">
        <img
          src={slides[current].image}
          alt={`slide-${current}`}
          className="slide-img"
        />
        {slides[current].caption && (
          <div className="slide-caption">{slides[current].caption}</div>
        )}
      </div>

  
    </div>
  );
}

export default SliderCard;
