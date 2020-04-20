import React, { Component } from 'react';
import './display-settings.css';
import { connect } from 'react-redux';
import {
  transferQuantity,
  transferOrder,
  showQuantitySettings,
  showOrderSettings,
  closeQuantitySettings,
  closeOrderSettings } from '../../actions';

class DisplaySettings extends Component {

  makeClickableElementsAndTransferingData = (element, selectValue, transferValue, closeElement) => {
    element.forEach((li) => {
      const value = li.innerHTML;
      li.onclick = () => {
        transferValue(value);
        selectValue();
        closeElement();
      };
    })
  };
 
  componentDidMount() {
    const {
      selectQuantity,
      selectOrder,
      transferQuantity,
      transferOrder,
      closeQuantitySettings,
      closeOrderSettings } = this.props;

    const quantityLi = document.querySelectorAll('.quantity-li');
    const orderLi = document.querySelectorAll('.order-li');

    this.makeClickableElementsAndTransferingData(quantityLi, selectQuantity, transferQuantity, closeQuantitySettings);
    this.makeClickableElementsAndTransferingData(orderLi, selectOrder, transferOrder, closeOrderSettings);
  }

  render() {

    const {
      quantity,
      order,
      showQuantitySettings,
      showOrderSettings,
      isActiveQuantitySettings,
      isActiveOrderSettings } = this.props;

    const quantityUlClass = (isActiveQuantitySettings) ? 'DS-ul' : 'DS-ul-hide';
    const orderUlClass = (isActiveOrderSettings) ? 'DS-ul' : 'DS-ul-hide';

  return(
      <div className="display-settings-main">
        <h2 className="DS-h2">товара на странице:</h2>
        <div className="select-div quantity-div">
          <div
            onClick={() => showQuantitySettings()}
            className="button-div butd-q" >
            <h3>{quantity}</h3>
            <div className="arrow"></div>
          </div>
          <ul className={quantityUlClass}>
            <li className="quantity-li">6</li>
            <li className="quantity-li">12</li>
            <li className="quantity-li">18</li>
            <li className="quantity-li">24</li>
            <li className="quantity-li">30</li>
            <li className="quantity-li">42</li>
          </ul>
        </div>
        <h2 className="DS-h2">сортировать по:</h2>
        <div className="select-div order-div">
          <div
            onClick={() => showOrderSettings()}
            className="button-div butd-o">
            <h3>{order}</h3>
            <div className="arrow"></div>
          </div>
          <ul className={orderUlClass}>
            <li className="order-li">возростанию цены</li>
            <li className="order-li">убыванию цены</li>
            <li className="order-li">возростанию веса</li>
            <li className="order-li">уменьшению веса</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ displaySettings:
  { quantity,
    order,
    isActiveQuantitySettings,
    isActiveOrderSettings } }) => ({ quantity, order, isActiveQuantitySettings, isActiveOrderSettings });

const mapDispatchToProps = {
  transferQuantity,
  transferOrder,
  showQuantitySettings,
  showOrderSettings,
  closeQuantitySettings,
  closeOrderSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettings);
