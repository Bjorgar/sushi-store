import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { onInitialPosition } from '../utils';
import DeliveryPlace from './delivery-place';
import {
  itemAddedToCart,
  deletedItemFromCart,
  deletedAllItemsFromCart,
  showDeatailsModal,
  hideDetailsModal,
  changeDeliveryValue } from '../../actions';


class CartWithItems extends Component {

  onChangeDeliveryValue = (e) => {
    const { changeDeliveryValue } = this.props;
    const value = e.target.checked;
    changeDeliveryValue(value);
  };

  render() {

    const {
      items,
      totalPrice,
      isDelivery,
      onIncrease,
      onDecrease,
      onDelete,
      showDeatailsModal,
      hideDetailsModal,
      itemsPrice,
      deliveryPrice } = this.props;

    
    const clazz = (isDelivery) ? 'idt-price' : 'idt-price-hide';

    const renderRow = (item) => {

      const { image, id, name, count, total } = item;

      return(
        <div className="row-div" key={id}>
          <div><img className="cart-item-img" src={image} alt="item" /></div>
          <div
            onMouseOver={() => showDeatailsModal(item)}
            onMouseLeave={hideDetailsModal}
            onMouseMove={onInitialPosition}
            className="cart-item-name">
            {name}</div>
          <div className="cart-item-count">
            <div className="btn-count-div">
              <button
                onClick={() => onDecrease(id)}
                className="btn-count btn-minus">
                <i className="fas fa-minus"></i>
              </button>
              <div className="btn-count count">
                {count}
              </div>
              <button
                onClick={() => onIncrease(id)}
                className="btn-count btn-plus">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="btn-count-total">{total}грн</div>
          </div>
          <div>
            <button
              onClick={() => {
                onDelete(id);
                changeDeliveryValue(false)}}
              className="delete-btn">
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      );
    };

    return(
      <Fragment>
        <h2>Ваш заказ</h2>
          {
            items.map(renderRow)
          }
        <div className="delivery">
          <form>
            <label>
              Заказать доставку:
              <input
                type="checkbox"
                checked={isDelivery}
                onChange={this.onChangeDeliveryValue}/>
            </label>
          </form>
          <DeliveryPlace />
        </div>
        <div className="total">
          <div className={clazz}>
            <p>заказ</p><p>{itemsPrice}</p>
          </div>
          <div className={clazz}>
            <p>доставка</p><p>{deliveryPrice}</p>
          </div>
          <div className="idt-price">
            <p>итого</p><p>{totalPrice}</p>
          </div>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = ({ shoppingCart: { cartItems, totalPrice, isOpen, itemsPrice, deliveryPrice, isDelivery } }) => {

  return {
    totalPrice,
    itemsPrice,
    deliveryPrice,
    isOpen,
    isDelivery,
    items: cartItems
  }
};

const mapDispatchToProps = {
  onIncrease: itemAddedToCart,
  onDecrease: deletedItemFromCart,
  onDelete: deletedAllItemsFromCart,
  showDeatailsModal,
  hideDetailsModal,
  changeDeliveryValue
};

export default connect(mapStateToProps, mapDispatchToProps)(CartWithItems);
