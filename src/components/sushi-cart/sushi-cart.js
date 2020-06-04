import React, { Fragment, Component } from 'react';
import './sushi-cart.scss';
import { connect } from 'react-redux';
import {
  closeShoppingCart,
  changeDeliveryValue,
  wipeCartData,
  openCloseAttentionWindow } from '../../actions';
import CartWithItems from './cart-with-items';
import OrderDetails from './order-details';
import ClientInfo from './client-info';
import CompletedOrder from './completed-order';
import CartAttentionWindow from './cart-attention-window';

const EmptyCart = ({ closeShoppingCart }) => {
  return(
    <Fragment>
      <h2>Ваша корзина пуста</h2>
      <div className="back-to-shopping-div">
        <button
          onClick={closeShoppingCart}
          className="back-to-shopping-btn">вернуться к покупкам
        </button>
      </div>
    </Fragment>
  );
};

class SushiCart extends Component  {

  componentDidUpdate() {
    const { totalCount, changeDeliveryValue } = this.props;
    if (totalCount === 0) {
      changeDeliveryValue(false);
    };
  }

  checkAndCloseCart = () => {
    const { totalCount, openCloseAttentionWindow, wipeCartData } = this.props;
    if (totalCount === 0) { wipeCartData() }
    else { openCloseAttentionWindow(true) };
  };

  render() {

    const { totalCount, onClose, isOpen, orderStep, wipeCartData } = this.props;

    const display = (totalCount === 0) ? <EmptyCart closeShoppingCart={wipeCartData} /> :
      (orderStep === 0) ? <CartWithItems /> :
      (orderStep === 1) ? <ClientInfo /> : 
      (orderStep === 2) ? <OrderDetails /> : <CompletedOrder />;

    const cartClass = (isOpen === 'hide') ? 'shopping-cart-hide' :
      (!isOpen) ? 'shopping-cart-close' : '';

    return(
      <div className={`shopping-cart ${cartClass}`}>
        <div className="help-background">
          <div className="cart-background">
            <CartAttentionWindow />
            {display}
            <div className="close-btn-background">
              <button
                onClick={onClose}
                className="close-btn hide">
                <i className="far fa-window-minimize"></i>
              </button>
              <button
                onClick={this.checkAndCloseCart}
                className="close-btn wipe">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ shoppingCart: { cartItems, totalCount, isOpen, orderStep } }) => {

  return {
    totalCount,
    isOpen,
    items: cartItems,
    orderStep
  }
};

const mapDispatchToProps = { onClose: closeShoppingCart, changeDeliveryValue, openCloseAttentionWindow, wipeCartData };

export default connect(mapStateToProps, mapDispatchToProps)(SushiCart);
