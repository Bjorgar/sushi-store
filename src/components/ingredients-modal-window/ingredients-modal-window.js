import React from 'react';
import './ingredients-modal-window.css';
import Ingredients from '../ingredients';
import { connect } from 'react-redux';

const IngredientsModalWindow = ({ type, ingredients, isActive, x, y }) => {

  const showModal = {
    position: 'absolute',
    top: `${y+5}px`,
    left: `${x+5}px`,
    zIndex: 999
  };

  const hideModal = {
    display: 'none'
  };

  const clazz = (isActive) ? showModal : hideModal;

  return(
    <div style={clazz}>
      <ul className="modal-list">
        <Ingredients type={type} ingredients={ingredients} pref={'searching'} />
      </ul>
    </div>
  ); 
};

const mapStateToProps = ({ itemDetailsModal: { type, ingredients, isActive, x, y } }) => {
  return {
    type,
    ingredients,
    isActive,
    x,
    y
  }
};

export default connect(mapStateToProps)(IngredientsModalWindow);
