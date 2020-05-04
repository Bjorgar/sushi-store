import React from 'react';

const Slide = ({ displayedSlide, leafingSlide }) => {

  const slideSrc = displayedSlide.src;
  const slideId = displayedSlide.id;

  return(
    <div className="slider-box">
      <button
        className="left-arr-slider"
        onClick={() => leafingSlide(slideId, 'dec')}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="slide">
        <img alt="slide" src={slideSrc}/>
      </div>
      <button
        className="right-arr-slider"
        onClick={() => leafingSlide(slideId, 'inc')}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Slide;