import React, { useState } from 'react';
import './Carousel.css';

const images = [
  '/shoeImages/black1.png',
  '/shoeImages/parrot1.png',
  '/shoeImages/red1.png',
  '/shoeImages/blue1.png',
  '/shoeImages/green1.png',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-wrapper" id='gallery'>
      <h2 className="carousel-title">Pulse Colors</h2>

      <div className="carousel-container">
        <button className="nav left" onClick={prev}>❮</button>

        <div className="carousel">
          {images.map((img, index) => {
            let className = 'slide';
            if (index === currentIndex) className += ' active';
            else if ((index === (currentIndex + 1) % images.length)) className += ' next';
            else if ((index === (currentIndex - 1 + images.length) % images.length)) className += ' prev';
            else className += ' hidden';

            return (
              <img key={index} src={img} className={className} alt={`Slide ${index}`} />
            );
          })}
        </div>

        <button className="nav right" onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default Carousel;
