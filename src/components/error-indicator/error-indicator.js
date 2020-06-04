import React from 'react';
import './error-indicator.scss';
import rollError from '../../images/others/roll-error.png';


const ErrorIndicator = () => {

  return (
    <div className="error-main">
      <img src={rollError} alt="error" />
      <h2>Произошла ошибка!</h2>
      <p>Без паники!</p>
      <p>Уже занимаемся проблемой</p>
    </div>
  );
};

export default ErrorIndicator;