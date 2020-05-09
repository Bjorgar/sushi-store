import React, { Component } from 'react';
import { connect } from 'react-redux';
import './client-info.css';
import {
  transferUserData,
  switchOrderStep,
  transferHandleInput,
  transferValidation,
  transferFormValid } from '../../actions';

class ClientInfo extends Component {

  handleUserInput = (e) => {
    const { transferHandleInput } = this.props;
    const name = e.target.name;
    const value = e.target.value;
    
    transferHandleInput(name, value);
    this.validateField(name, value)
  }

  validateField = (field, value) => {
    const { transferValidation } = this.props;

    switch (field) {
      case 'nameField':
        const NameValue = (value === '') ? '' : value.match(/[а-яА-Я]{2,}/);
        transferValidation('nameValid', NameValue);
        break

      case 'phoneField':
        const PhoneValue = (value === '') ? '' : value.match(/^(\d|\+|\s|\(|\)){10,}/);
        transferValidation('phoneValid', PhoneValue);
        break;

      default:
        break;
    };

      
  };

  componentDidUpdate(prevProps) {

    const { nameValid, phoneValid, transferFormValid } = this.props;

    if (nameValid !== prevProps.nameValid || phoneValid !== prevProps.phoneValid) {
      transferFormValid(nameValid && phoneValid);
    }
    return
  }
  
  render() {

    const { nameField, phoneField, transferUserData, switchOrderStep, nameValid, phoneValid, formValid } = this.props;

    const nameClass = (nameValid === null) ? 'CI-input-err' : '';
    const phoneClass = (phoneValid === null) ? 'CI-input-err' : '';

    const btnClass = (!formValid) ? 'cart-btn-next-disable' : '';

    return(
      <div className="CI-main">
        <h2 className="h2-title">Оформление заказа</h2>
        <p className="CI-inst">Для продолжения заполните данные</p>
        <form className="CI-form">
          <div className="CI-data-box">
            <input              
              onChange={this.handleUserInput}
              className={`CI-input ${nameClass}`} id="name" name="nameField" value={nameField} placeholder=' ' />
            <label className="CI-label" htmlFor="name">имя</label>
          </div> 
          <div className="CI-data-box">
            <input            
              onChange={this.handleUserInput}
              className={`CI-input ${phoneClass}`} id="phone" name="phoneField" value={phoneField} placeholder=' ' />
            <label className="CI-label" htmlFor="phone">телефон</label>
          </div>
        </form>
        <div className="cart-btns-BN">
          <button
            className="cart-btn-back"
            onClick={() => switchOrderStep(0)}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            className={`cart-btn-next ${btnClass}`}
            onClick={() => {
              transferUserData(nameField, phoneField);
              switchOrderStep(2);
            }}>
            далее
          </button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = ({ clientInfo: { nameField, phoneField, nameValid, phoneValid, formValid } }) => 
  ({ nameField, phoneField, nameValid, phoneValid, formValid });

const mapDispatchToProps = {
  transferValidation,
  transferHandleInput,
  transferUserData,
  switchOrderStep,
  transferFormValid
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientInfo);
