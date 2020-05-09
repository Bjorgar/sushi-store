import React, { Fragment } from 'react';
import PopUpIngredientDetails from '../pop-up-ingredient-details';
import ItemDetailsIngredientsList from './item-details-ingredients-list';

const ItemDetails = ({
  item,
  onAddedToCart,
  closeDetailsPage }) => {

  const { id, name, weight, price, image } = item;
  return(
    <Fragment>
      <div className="DP-img-div">
        <PopUpIngredientDetails />
        <img alt="item" src={image} />
      </div>
      <div className="DP-desc-div">
        <div className="DP-name-div">
          <h1 className="DP-name">{name}</h1>
        </div>
        <div className="DP-ing">
          <h2>Состав</h2>
          <ItemDetailsIngredientsList item={item}/>
        </div>
        <div className="DP-p-div">
          <p>вес: {weight}г</p>
          <p>цена: {price}грн</p>
        </div>
        <div className="DP-buttons">
          <button
            className="DP-add-to-cart-btn"
            onClick={() => onAddedToCart(id)}>
            <i className="fas fa-cart-arrow-down"></i>
          </button>
          <button
            className="DP-close-btn"
            onClick={closeDetailsPage}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetails;
