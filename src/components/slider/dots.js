import React from 'react';

const Dots = ({ slides, selectSlide, displayedSlide }) => {

  const slideId = displayedSlide.id;

  return(
    <div className="dots-box">
      {
        slides.map(({ id }) => {
          const clazz = (id === slideId) ? 'dots active-dot' : 'dots';
          return(
            <div
              className={clazz}
              key={id}
              onClick={() => selectSlide(id)}>
            </div>
          );
        })
      }
    </div>
  );
};

export default Dots;