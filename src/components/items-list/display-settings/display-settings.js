import React, { Component } from 'react';
import './display-settings.scss';
import { connect } from 'react-redux';
import {
  transferQuantity,
  transferOrder,
  openCloseQuantitySettings,
  openCloseOrderSettings } from '../../../actions';

class DisplaySettings extends Component {

  makeClickableElementsAndTransferingData = (element, transferValue, openCloseElement) => {
    element.forEach((li) => {
      const value = li.innerHTML;
      li.onclick = () => {
        transferValue(value);
        openCloseElement(false);
      };
    })
  };
 
  componentDidMount() {
    const {
      transferQuantity,
      transferOrder,
      openCloseQuantitySettings,
      openCloseOrderSettings } = this.props;

    const quantityLi = document.querySelectorAll('.quantity-li');
    const orderLi = document.querySelectorAll('.order-li');

    this.makeClickableElementsAndTransferingData(quantityLi, transferQuantity, openCloseQuantitySettings);
    this.makeClickableElementsAndTransferingData(orderLi, transferOrder, openCloseOrderSettings);
  }

  onOpenCloseQuantitySettings = () => {
    const {
      openCloseQuantitySettings,
      isActiveQuantitySettings } = this.props;
    
    if (isActiveQuantitySettings) {
      openCloseQuantitySettings(false)
    } else {
      openCloseQuantitySettings(true);
    }
  };

  onOpenCloseOrderSettings = () => {
    const {
      openCloseOrderSettings,
      isActiveOrderSettings } = this.props;

    if (isActiveOrderSettings) {
      openCloseOrderSettings(false)
    } else {
      openCloseOrderSettings(true)
    }
  };

  render() {

    const {
      quantity,
      order,
      isActiveQuantitySettings,
      isActiveOrderSettings,
      itemsKind } = this.props;

    const quantityUlClass = (isActiveQuantitySettings) ? '' : 'DS-ul-hide';
    const orderUlClass = (isActiveOrderSettings) ? '' : 'DS-ul-hide';
    const arrQuantityClass = (isActiveQuantitySettings) ? 'arr-down' : 'arr-up';
    const arrOrderClass = (isActiveOrderSettings) ? 'arr-down' : 'arr-up';

  return(
      <div className="display-settings-main">
        <div className="items-kind">{itemsKind}</div>
        <h2 className="DS-h2">товара на странице:</h2>
        <div className="select-div quantity-div">
          <div
            onClick={this.onOpenCloseQuantitySettings}
            className="button-div butd-q" >
            <h3>{quantity}</h3>
            <div className="arrow">
              <i className={`fas fa-chevron-down ${arrQuantityClass}`}></i>
            </div>
          </div>
          <ul className={`DS-ul ${quantityUlClass}`}>
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
            onClick={this.onOpenCloseOrderSettings}
            className="button-div butd-o">
            <h3>{order}</h3>
            <div className="arrow">
              <i className={`fas fa-chevron-down ${arrOrderClass}`}></i>
            </div>
          </div>
          <ul className={`DS-ul ${orderUlClass}`}>
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
  openCloseQuantitySettings,
  openCloseOrderSettings
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySettings);
