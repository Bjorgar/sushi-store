import React from 'react';
import './cart-widget.css';
import { connect } from 'react-redux';
import { openShoppingCart, showHidePopUpCartViewer } from '../../actions';
import PopUpCartViewer  from '../sushi-cart/pop-up-cart-viewer';

const CartWidget = ({ totalPrice, totalCount, openShoppingCart, showHidePopUpCartViewer }) => {

  const isActive = (totalPrice === 0) ? 'pop-up-viewer-btn-unactice' : '';

  return(
    <div className="cart-widget-main">
      <div
        className="cart">
        <span
          onClick={openShoppingCart}
          className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <span className="total-count">{totalCount}</span>
        <span className="total-price">{totalPrice}</span>
        <button
          className={`pop-up-viewer-btn ${isActive}`}
          onClick={showHidePopUpCartViewer}>
          <i className="fas fa-question"></i>
        </button>
      </div>
      <PopUpCartViewer />
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { totalPrice, totalCount } }) => {
  return {
    totalPrice,
    totalCount
  };
};

const mapDispatchToProps = {
  openShoppingCart,
  showHidePopUpCartViewer
};

export default connect(mapStateToProps, mapDispatchToProps)(CartWidget);
