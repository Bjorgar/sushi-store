import React from 'react';

const Slide = ({ displayedSlide, leafingSlide }) => {

  const slideSrc = displayedSlide.src;
  const slideId = displayedSlide.id;

  return(
    <div className="slider-box">
      <button
        onClick={() => leafingSlide(slideId, 'dec')}>
        <i className="far fa-arrow-alt-circle-left"></i>
      </button>
      <div className="slide">
        <img alt="slide" src={slideSrc}/>
      </div>
      <button
        onClick={() => leafingSlide(slideId, 'inc')}>
        <i className="far fa-arrow-alt-circle-right"></i>
      </button>
    </div>
  );
};

export default Slide;