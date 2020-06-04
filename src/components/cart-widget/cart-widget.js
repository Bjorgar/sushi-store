import React from 'react';
import './cart-widget.scss';
import { connect } from 'react-redux';
import { openShoppingCart, showHidePopUpCartViewer } from '../../actions';
import PopUpCartViewer  from '../sushi-cart/pop-up-cart-viewer';

const CartWidget = ({ totalPrice, totalCount, openShoppingCart, showHidePopUpCartViewer }) => {

  const onShowHidePopUpCartViewer = (action) => {
    if (totalCount === 0) {
      return;
    }

    switch(action) {
      case 'show':
        showHidePopUpCartViewer(true);
        break;
      case 'hide':
        showHidePopUpCartViewer(false);
        break;
      default:
        break;
    };
  };

  const isActive = (totalPrice === 0) ? 'cart-icon-unactive' : '';

  return(
    <div
      className="cart-widget-main">
      <span
        onClick={openShoppingCart}
        onMouseOver={() => onShowHidePopUpCartViewer('show')}
        onMouseOut={() => onShowHidePopUpCartViewer('hide')}
        className={`${isActive} cart-icon`}>
        <i className="fas fa-shopping-cart"></i>
      </span>
      <span className="total-count">{totalCount}</span>
      <span className="total-price">{totalPrice}</span>
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
