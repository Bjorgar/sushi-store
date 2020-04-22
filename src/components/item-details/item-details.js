import React from 'react';
import './item-details.css';
import PopUpIngredientDetails from '../pop-up-ingredient-details';
import { routingToDetailsPage } from '../utils';
import { withRouter } from 'react-router-dom';
import ItemDetailsIngredientsList from './item-details-ingredients-list';

const ItemDetails = ({ item, onAddedToCart, closeDetailsPage, itemsId, history, closePopUpIngredientDetails }) => {

  const setItem = (id, action) => {
    const actualIdx = itemsId.findIndex((itemId) => itemId === id);
    let setIdx;

    if (action === 'inc') {
      setIdx = (actualIdx === (itemsId.length - 1)) ? 0 : actualIdx + 1;
    } else if (action === 'dec') {
      setIdx = (actualIdx === 0) ? itemsId.length - 1 : actualIdx - 1;
    }

    routingToDetailsPage(
      {
        type: item.type,
        id: itemsId[setIdx]
      }, history)
  };

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
              <ItemDetailsIngredientsList item={item}/>
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
      <button
        onClick={() => {
          setItem(id, 'dec');
          closePopUpIngredientDetails()}}
        className="switch-btn switch-btn-left"><i className="fas fa-chevron-left"></i></button>
      <button
        onClick={() => {
          setItem(id, 'inc')
          closePopUpIngredientDetails()}}
        className="switch-btn switch-btn-right"><i className="fas fa-chevron-right"></i></button>
    </div>
  );
};

export default withRouter(ItemDetails);
