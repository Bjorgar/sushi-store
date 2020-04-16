import React from 'react';
import './list-item.css';
import Ingredients from '../ingredients';
import { routingToDetailsPage } from '../utils';
import { withRouter } from 'react-router-dom';

const ListItem = ({ item, onAddedToCart, history }) => {

  const { type, id, name, weight, price, image, ingredients } = item;

  return(
    <div className="main-box">
      <div className="item-name-box"> 
        <h1 className="item-name" >{name}</h1>
      </div>
      <div className="image-box">
        <img alt="item" src={image} />
      </div>
      <div className="description-box">
        <h2>Состав</h2>
        <ul>
          <Ingredients ingredients={ingredients} type={type} pref={'main-page'} />
        </ul>
      </div>
      <div className="weigth-price">
        <p>вес: {weight}г</p>
        <p>цена: {price}грн</p>
      </div>
      <div className="buttons-box">
        <button
          className="buttons cart-btn-add"
          onClick={() => onAddedToCart(id)}>
            В корзину
        </button>
        <button
          className="buttons cart-btn-details"
          onClick={() => routingToDetailsPage(item, history)}>
            Детали
        </button>
      </div>
    </div>
  );
};

export default withRouter(ListItem);
