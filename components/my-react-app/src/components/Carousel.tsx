import React, { useState } from 'react';
import { CarouselProps, CarouselItem } from '../types';
import './Carousel.css';

const Carousel: React.FC<CarouselProps> = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  const currentItem: CarouselItem = items[currentIndex];

  return (
    <div className="carousel">
      {/* Main Card */}
      <div className="carousel-card">
        <div className="card-content">
          <div className="card-image">
            <img src={currentItem.image} alt={currentItem.title} />
          </div>
          <div className="card-text">
            <h2 className="card-title">{currentItem.title}</h2>
            <p className="card-description">{currentItem.description}</p>
            <button className="card-button">{currentItem.buttonText}</button>
          </div>
        </div>
      </div>

      {/* Progress Bar and Navigation */}
      <div className="carousel-navigation">
        <div className="progress-bar">
          {items.map((_, index) => (
            <div
              key={index}
              className={`progress-segment ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="nav-button prev" onClick={prevSlide}>
            &lt;
          </button>
          <button className="nav-button next" onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel; 