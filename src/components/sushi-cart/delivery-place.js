import React, { Component } from 'react';
import { connect } from 'react-redux';
import './delivery-place.css';
import { transferPlaceValue } from '../../actions';

class DeliveryPlace extends Component {


  selectPlace = (e) => {
    const { transferPlaceValue } = this.props;
    const value = e.target.value;
    transferPlaceValue(value);
  }

  render() {

    const { isDelivery, deliveryPrice } = this.props;

    const clazz = (isDelivery) ? 'select-place' : 'select-place-hide';

    return(
      <div className={clazz}>
        <p>Раён доставки:</p>
        <select
          onChange={this.selectPlace}
          value={deliveryPrice}>
          <option defaultChecked value="0">выберите раён</option>
          <option value="30">Центр города</option>
          <option value="70">Малая Жмеринка</option>
          <option value="50">р-н Поле Чудес</option>
          <option value="100">с. Леляки</option>
          <option value="50">р-н ТЕЦ</option>
          <option value="50">р-н Корчевка</option>
          <option value="70">р-н Сектор</option>
          <option value="40">р-н Постройки</option>
          <option value="80">р-н 5й км</option>
        </select>
      </div>
    );
  };
};

const mapStateToProps = ({
  shoppingCart: { isDelivery, deliveryPrice } }) => ({
    isDelivery, deliveryPrice });

const mapDispatchToProps = { transferPlaceValue };

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPlace);
