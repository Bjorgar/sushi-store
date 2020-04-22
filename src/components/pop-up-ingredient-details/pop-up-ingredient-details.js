import React from 'react';
import './pop-up-ingredient-details.css';
import { connect } from 'react-redux';
import { itemAddedToCart, closePopUpIngredientDetails, deactivateActiveLi } from '../../actions';
import Ingredients from '../ingredients';

const PopUpIngredientDetails = ({ ingredient, isOpenPopUp, onAddedToCart, onClosePopUp, deactivateActiveLi }) => {

  const { type, id, image, name, ingredients=[], price, weight } = ingredient;

  const clazz = (isOpenPopUp) ? 'pop-up-main' : 'pop-up-main-hide';

  return(
    <div className={clazz}>
      <h1 className="pop-up-name-div">
        {name}
      </h1>
      <div className="pop-up-ImDesc-div">
        <div className="pop-up-img-p-div">
          <img alt="roll" src={image} />
          <div className="pop-up-p-div">
            <p>вес: {weight}г</p>
            <p>цена: {price}грн</p>
          </div>
        </div>
        <div className="pop-up-desc-div">
          <ul>
            <Ingredients type={type} ingredients={ingredients} pref={'pop-up'} />
          </ul>
        </div>
      </div>
      <div className="pop-up-btn-div">
        <button
          onClick={() => onAddedToCart(id)} >
          добавить ролл в корзину
        </button>
        <button
          onClick={() => {
            deactivateActiveLi()
            onClosePopUp()}} >
          скрыть ролл
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ popUpIngredients: { ingredient, isOpenPopUp } }) => ({
  ingredient,
  isOpenPopUp
});

const mapDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  onClosePopUp: closePopUpIngredientDetails,
  deactivateActiveLi
}

export default connect(mapStateToProps, mapDispatchToProps)(PopUpIngredientDetails);
