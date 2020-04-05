import React from 'react';
import './item-details.css';
import Ingredients from '../ingredients';
import { withRouter } from 'react-router-dom';

const ItemDetails = ({ item={}, closeItemDetails, onAddedToCart, history }) => {

  const closePopUpWindow = () => {
    history.go(-1);
    closeItemDetails()
  };

  const { type, id, name, weight, price, image, ingredients } = item;
  return(
    <div className="details-background">
      <div className="details-body">
        <div className="img-div">
          <img alt="item" src={image} />
        </div>
        <h1 className="details-name">{name}</h1>
        <div className="details-div">
          <h2>Состав</h2>
          <ul>
            <Ingredients ingredients={ingredients} type={type}/>
          </ul>
          <p>{weight}</p>
          <p>{price}</p>
        </div>
        <button className="d-btn-close"
          onClick={closePopUpWindow}>close</button>
        <button className="d-btn-add"
          onClick={() => onAddedToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default withRouter(ItemDetails);
