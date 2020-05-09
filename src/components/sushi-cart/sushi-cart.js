import React, { Fragment, Component } from 'react';
import './sushi-cart.css';
import { connect } from 'react-redux';
import { closeShoppingCart, changeDeliveryValue } from '../../actions';
import CartWithItems from './cart-with-items';
import OrderDetails from './order-details';
import ClientInfo from './client-info';

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

  render() {

    const { totalCount, onClose, isOpen, orderStep } = this.props;

    const display = (totalCount === 0) ? <EmptyCart closeShoppingCart={onClose} /> :
      (orderStep === 0) ? <CartWithItems /> :
      (orderStep === 1) ? <ClientInfo /> : 
      (orderStep === 2) ? <OrderDetails /> : '';

    const clazz = (isOpen) ? 'shopping-cart' : 'shopping-cart-hide';

    return(
      <div className={clazz}>
        <div className="cart-background">
          {display}
          <div className="close-btn-background">
            <button
              onClick={onClose}
              className="close-btn">
              <i className="fas fa-times"></i>
            </button>
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

const mapDispatchToProps = { onClose: closeShoppingCart, changeDeliveryValue };

export default connect(mapStateToProps, mapDispatchToProps)(SushiCart);
