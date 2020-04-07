import React from 'react';
import './list-item.css';
import Ingredients from '../ingredients';
import { routingToDetailsPage } from '../utils';
import { withRouter } from 'react-router-dom';

const ListItem = ({ item, onAddedToCart, history }) => {

  const { type, id, name, weight, price, image, ingredients } = item;

  return(
    <div className="main-box">
      <div className="image-box">
        <img alt="item" src={image} />
      </div>
      <div className="description-box">
        <h1>{name}</h1>
        <ul>
          <Ingredients ingredients={ingredients} type={type} />
        </ul>
        <p>weight: {weight}</p>
        <p>price: {price}</p>
      </div>
      <button
        className="cart-btn-add"
        onClick={() => onAddedToCart(id)}>
          Add to cart
      </button>
      <button
        className="cart-btn-details"
        onClick={() => routingToDetailsPage(item, history)}>
          Details
      </button>
    </div>
  );
};

export default withRouter(ListItem);
