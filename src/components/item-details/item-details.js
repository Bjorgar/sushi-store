import React from 'react';
import './item-details.css';

const ItemDetails = ({ item, onAddedToCart, ingredientslist, closePopUpWindow }) => {

  const { id, name, weight, price, image } = item;
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
            {ingredientslist}
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

export default ItemDetails;
