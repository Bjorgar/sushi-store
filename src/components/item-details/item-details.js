import React from 'react';
import './item-details.css';
import { connect } from 'react-redux';
import { closePopUpDetails, itemAddedToCart } from '../../actions';
import Ingredients from '../ingredients';

const ItemDetails = ({ item={}, isOpen, closePopUpDetails, onAddedToCart }) => {

  const clazz = isOpen ? 'details-background' : 'hiden-details';

  const { type, id, name, weight, price, image, ingredients } = item;
  return(
    <div className={clazz}>
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
          onClick={closePopUpDetails}>close</button>
        <button className="d-btn-add"
          onClick={() => onAddedToCart(id)}>Add to cart</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ itemDetails: { isOpen } }) => ({ isOpen });

const mapDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  closePopUpDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
