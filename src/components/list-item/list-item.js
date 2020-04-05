import React from 'react';
import './list-item.css';
import Ingredients from '../ingredients';

const ListItem = ({ item, onAddedToCart, onItemDetails }) => {

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
        onClick={() => onItemDetails(id)}>
          Details
      </button>
    </div>
  );
};

export default ListItem;
