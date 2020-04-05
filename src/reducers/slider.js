
const updateSlider = (state, action) => {

  if (state === undefined) {
    return {
      slides: [],
      displayedSlide: {}
    };
  }
  
  switch (action.type) {
    case 'LOADED_SLIDES_FROM_SERVICE':
      return {
        ...state.slider,
        slides: action.payload
      };

    case 'SLIDE_SELECTED':
      const slideId = action.payload;
      const displayedSlide = state.slider.slides.find(({ id }) => id === slideId);

      return {
        ...state.slider,
        displayedSlide
      };
      
    default:
      return state.slider;
  }
};

export default updateSlider;