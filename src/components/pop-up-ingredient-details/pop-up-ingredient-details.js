import React from 'react';
import './pop-up-ingredient-details.css';
import { connect } from 'react-redux';
import { itemAddedToCart, closePopUpIngredientDetails } from '../../actions';
import Ingredients from '../ingredients';

const PopUpIngredientDetails = ({ ingredient, isOpenPopUp, onAddedToCart, onClosePopUp }) => {

  const { type, id, image, name, ingredients=[], price, weight } = ingredient;

  const clazz = (isOpenPopUp) ? 'pop-up-main' : 'pop-up-main-hide';

  return(
    <div className={clazz}>
      <div className="pop-up-img-div">
        <img alt="roll" src={image} />
      </div>
      <div className="pop-up-description-div">
        <h1>
          {name}
        </h1>
        <ul>
          <Ingredients type={type} ingredients={ingredients} pref={'pop-up'} />
        </ul>
        <p>price: {price}</p>
        <p>weight: {weight}</p>
        <button
          onClick={() => onAddedToCart(id)} >
          Add to cart
        </button>
      </div>
      <button
        onClick={onClosePopUp} >
        cross
      </button>
    </div>
  );
};

const mapStateToProps = ({ popUpIngredients: { ingredient, isOpenPopUp } }) => ({
  ingredient,
  isOpenPopUp
});

const mapDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  onClosePopUp: closePopUpIngredientDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUpIngredientDetails);
