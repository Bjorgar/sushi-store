import React from 'react';
import './item-details.css';
import PopUpIngredientDetails from '../pop-up-ingredient-details';

const ItemDetails = ({ item, onAddedToCart, ingredientslist, closeDetailsPage }) => {

  const { id, name, weight, price, image } = item;
  return(
    <div className="details-background">
      <div className="details-body">
        <div className="DP-img-div">
          <PopUpIngredientDetails />
          <img alt="item" src={image} />
        </div>
        <div className="DP-desc-div">
          <h1 className="DP-name">{name}</h1>
          <div className="DP-ing">
            <h2>Состав</h2>
            <ul>
              {ingredientslist}
            </ul>
            <div className="DP-p-div">
              <p>вес: {weight}г</p>
              <p>цена: {price}грн</p>
            </div>
          </div>
          <div className="DP-buttons">
            <button
              onClick={() => onAddedToCart(id)}>в корзину
            </button>
            <button
              onClick={closeDetailsPage}>закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
