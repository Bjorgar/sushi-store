import React, { Fragment } from 'react';
import './sushi-cart.css';
import { connect } from 'react-redux';
import { closeShoppingCart } from '../../actions';
import CartWithItems from './cart-with-items';

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

const SushiCart = ({ totalCount, onClose, isOpen }) => {

  const display = (totalCount === 0) ? <EmptyCart closeShoppingCart={onClose} /> : <CartWithItems />;

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
};

const mapStateToProps = ({ shoppingCart: { cartItems, totalCount, isOpen } }) => {

  return {
    totalCount,
    isOpen,
    items: cartItems
  }
};

const mapDispatchToProps = { onClose: closeShoppingCart };

export default connect(mapStateToProps, mapDispatchToProps)(SushiCart);
