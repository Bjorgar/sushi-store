import React, { Component } from "react";
import { withSushistoreService } from '../hoc';
import { connect } from 'react-redux';
import { loadedSlides, showSlide } from '../../actions';
import { compose } from '../utils';
import Slide from './slide';
import Dots from './dots';
import './slider.css';

class SliderContainer extends Component {

  slideNum = 1;
  interval = 2000;

  componentDidMount() {
    const { loadedSlides, getData } = this.props;
    const data = getData();  

    loadedSlides(data);  

    this.runSlideshow();
    this.slideShowInterval();

  }

  runSlideshow = () => {
    const { showSlide, slides } = this.props;
    const num = (this.slideNum === slides.length) ? 1
                  : this.slideNum + 1;
                    
    showSlide(this.slideNum);
    
    this.slideNum = num;
  };

  slideShowInterval = () => {
    this.slideShow = setInterval(this.runSlideshow, this.interval)
  };

  selectSlide = (slideId) => {
    this.updateSlideNumAndRestartSlider(slideId);
  };

  leafingSlide = (slideId, action) => {
    this.updateSlideNumAndRestartSlider(slideId, action);
  };

  updateSlideNumAndRestartSlider = (slideId, action) => {
    clearInterval(this.slideShow);
    this.setSlideNum(slideId, action);
    this.runSlideshow();    
    this.slideShowInterval();
  };

  setSlideNum = (slideId, action = null) => {

    const { slides } = this.props;
    const maxNum = slides.length;

    if (action === 'inc') {
      this.slideNum = (slideId === maxNum) ? 1 : slideId + 1;
    } else if (action === 'dec') {
      this.slideNum = (slideId === 1) ? maxNum : slideId -1;
    } else {
      this.slideNum = slideId;
    };
  };

  render() {
    const { slides, displayedSlide } = this.props
    return(
      <div className="carousel-box">
        <Slide
          displayedSlide={displayedSlide}
          leafingSlide={this.leafingSlide}
        />
        <Dots
          slides={slides}
          displayedSlide={displayedSlide}
          selectSlide={this.selectSlide}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ slider: { slides, displayedSlide } }) => {
  return { 
    slides,
    displayedSlide
   }
};

const mapDispatchToProps = {
  loadedSlides,
  showSlide
};

const mapSlidesToProps = (sushistoreService) => {
  return {
    getData: sushistoreService.getSlides
  };
};

export default compose(
  withSushistoreService(mapSlidesToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(SliderContainer);
