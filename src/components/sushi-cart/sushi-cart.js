import React from 'react';
import './sushi-cart.css';
import { connect } from 'react-redux';
import { itemAddedToCart, deletedItemFromCart, deletedAllItemsFromCart } from '../../actions';
import { bindActionCreators } from 'redux';

const SushiCart = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return(
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn">
            + 1
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            - 1
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-warning btn-sm float-right">
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return(
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>
      
      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, total } }) => {

  return {
    total,
    items: cartItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onIncrease: itemAddedToCart,
    onDecrease: deletedItemFromCart,
    onDelete: deletedAllItemsFromCart,
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SushiCart);

