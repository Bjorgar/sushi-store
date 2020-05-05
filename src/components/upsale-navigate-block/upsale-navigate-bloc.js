import React from 'react';
import { Link } from 'react-router-dom';
import './upsale-navigate-bloc.css';
import Slider from '../slider';

const UpsaleNavigateBloc = () => {
  return(
    <div className="upsale-navigate-bloc">
      <Slider />
      <div className="navigate-btns">
        <Link to="/rools/">
          <div className="navigate-btn rolls">
            <div className="background-nav">Роллы</div>
          </div>
        </Link>
        <Link to="/sets/">
          <div className="navigate-btn sets">
            <div className="background-nav">Сеты</div>
          </div>
        </Link>
        <Link to="/noodles/">
          <div className="navigate-btn noodles">
            <div className="background-nav">Лапша</div>
          </div>
        </Link>
        <Link to="/salads/">
          <div className="navigate-btn salads">
            <div className="background-nav">Салаты</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpsaleNavigateBloc;