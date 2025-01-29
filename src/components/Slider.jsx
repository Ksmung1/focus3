import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    { id: 1, content: <div><img className='slide-image' src="/images/slide.jpg" alt="" /></div> },
    { id: 2, content: <div><img className='slide-image' src="/images/slide1.jpg" alt="" /></div> },
    { id: 3, content: <div><img className='slide-image' src="/images/slide2.jpg" alt="" /></div> },
    { id: 4, content: <div><img className='slide-image' src="/images/slide3.jpg" alt="" /></div> }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // Mouse or touch start event
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  };

  // Mouse or touch end event
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Mouse or touch move event
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;

    if (diff > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (diff < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  return (
    <div 
      className="slider-container" 
      ref={sliderRef} 
      onMouseDown={handleTouchStart} 
      onMouseMove={handleTouchMove} 
      onMouseUp={handleTouchEnd} 
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slider flex row"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-in-out'
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="col">
            {slide.content}
          </div>
        ))}
      </div>

      {/* Manual controls */}
      {/* <div className="controls">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default Slider;
