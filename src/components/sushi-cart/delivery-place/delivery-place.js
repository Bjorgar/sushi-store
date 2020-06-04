import React, { Component } from 'react';
import { connect } from 'react-redux';
import './delivery-place.scss';
import { transferPlaceValue, transferSelectedPlace, openCloseSelectList } from '../../../actions';

class DeliveryPlace extends Component {

  checkingInput = (labels, selectedPlace) => {
    const form = document.querySelector('.select-form');
    const inputs = form.querySelectorAll('input');
    let checkedLabel;
    let uncheckedInput;

    labels.forEach((label) => {
      if (label.textContent === selectedPlace) {
        checkedLabel = label;
      }
    });

    inputs.forEach((input) => {
      if (input.id === checkedLabel.htmlFor) {
        uncheckedInput = input;
      }
    });

    uncheckedInput.checked = true;
  };

  componentDidMount() {
    const labels = document.querySelectorAll('.label-select');
    const { transferSelectedPlace, selectedPlace } = this.props;

    labels.forEach((label) => {
      label.addEventListener('click', (e) => {
        const place = e.target.textContent;
        transferSelectedPlace(place);
      })
    });

    if (selectedPlace !== 'выберите район') {
      this.checkingInput(labels, selectedPlace);
    };
  }

  selectPlace = (e) => {
    const { transferPlaceValue } = this.props;
    const value = e.target.value;
    transferPlaceValue(value);
  }

  unCheckInput = () => {
    const checkedInput = document.querySelector('input:checked');
    if (!checkedInput) {
      return
    }
    checkedInput.checked = false
  }

  render() {
    const { isDelivery, selectedPlace, isOpenSelectList, openCloseSelectList, distance } = this.props;

    if (!isDelivery) {
      this.unCheckInput();
    }

    const formDirection = (distance > 235) ? '' : 'select-form-up';

    const clazz = (isDelivery) ? '' : 'select-place-hide';

    const selListClazz = (isOpenSelectList) ? '' : 'select-form-hide';

    const selArrowClazz = (isOpenSelectList) ? 'select-arrow-down' : 'select-arrow-up';

    return(
      <div className={`select-place ${clazz}`}>

        <div className="select-div">
          <h2
          className="select-h2"
          onClick={() => openCloseSelectList(!isOpenSelectList)}
          >{selectedPlace} <i className={`fas fa-arrows-alt-v ${selArrowClazz}`}></i></h2>
          <form
            onChange={this.selectPlace}
            className={`select-form ${formDirection} ${selListClazz}`}>

            <input id="selectPlace0" type="radio" value="30" name="selectPlace"/>
            <label htmlFor="selectPlace0" className="label-select">Центр города</label>

            <input id="selectPlace1" type="radio" value="70" name="selectPlace"/>
            <label htmlFor="selectPlace1" className="label-select">Малая Жмеринка</label>

            <input id="selectPlace2" type="radio" value="50" name="selectPlace"/>
            <label htmlFor="selectPlace2" className="label-select">р-н Поле Чудес</label>

            <input id="selectPlace3" type="radio" value="100" name="selectPlace"/>
            <label htmlFor="selectPlace3" className="label-select">с. Леляки</label>

            <input id="selectPlace4" type="radio" value="50" name="selectPlace"/>
            <label htmlFor="selectPlace4" className="label-select">р-н ТЕЦ</label>

            <input id="selectPlace5" type="radio" value="50" name="selectPlace"/>
            <label htmlFor="selectPlace5" className="label-select">р-н Корчевка</label>

            <input id="selectPlace6" type="radio" value="70" name="selectPlace"/>
            <label htmlFor="selectPlace6" className="label-select">р-н Сектор</label>

            <input id="selectPlace7" type="radio" value="40" name="selectPlace"/>
            <label htmlFor="selectPlace7" className="label-select">р-н Постройки</label>

            <input id="selectPlace8" type="radio" value="80" name="selectPlace"/>
            <label htmlFor="selectPlace8" className="label-select">р-н 5й км</label>
          </form>
        </div>
      </div>
    );
  };
};

const mapStateToProps = ({
  shoppingCart: { isDelivery, selectedPlace, isOpenSelectList, distance } }) => ({
    isDelivery, selectedPlace, isOpenSelectList, distance });

const mapDispatchToProps = { transferPlaceValue, transferSelectedPlace, openCloseSelectList };

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryPlace);
