import React from 'react';
import { connect } from 'react-redux';
import { switchOrderStep } from '../../../actions';
import './order-details.scss';

const OrderDetails = ({
  items,
  deliveryPrice,
  selectedPlace,
  totalPrice,
  switchOrderStep,
  clientName,
  clientPhone }) => {

  const renderList = (item) => {
    const { name, count, total } = item;
    return(
      <div key={name} className="OD-list-item">
        <p className="OD-name">{name}</p>
        <p className="OD-count">{count}</p>
        <p className="OD-price">{total}</p>
      </div>
    );
  };

  return(
    <div className="OD-main">
      <h2 className="h2-title">Оформление заказа</h2>
      <div className="OD-client-data">
        <h2>Заказчик</h2>
        <p>имя: {clientName}</p>
        <p>телефон: {clientPhone}</p>
      </div>
      <p className="OD-title">Корзина</p>
      <div className="OD-list">
        {
          items.map(renderList)
        }
      </div>
      <p className="OD-title">Доставка</p>
      <div className="OD-list-item OD-list-item-delivery">
        <p className="OD-name">{selectedPlace}</p>
        <p className="OD-price">{deliveryPrice}</p>
      </div>
      <p className="OD-sum">к оплате: {totalPrice}</p>
      <div className="cart-btns-BN">
        <button
          className="cart-btn-back"
          onClick={() => switchOrderStep(1)}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button
          onClick={() => switchOrderStep(3)}
          className="cart-btn-next">
          далее
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  shoppingCart: { cartItems, deliveryPrice, selectedPlace, totalPrice },
  clientInfo: { clientName, clientPhone }
  }) => ({ items:cartItems, deliveryPrice, selectedPlace, totalPrice, clientName, clientPhone });

const mapDispatchToProps = {
  switchOrderStep
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
