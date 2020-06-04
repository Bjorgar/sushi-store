import React from 'react';
import { connect } from 'react-redux';
import './cart-attention-window.scss';
import { wipeCartData, openCloseAttentionWindow } from '../../../actions';

const CartAttentionWindow = ({ isAttention, openCloseAttentionWindow, wipeCartData }) => {

  const cawClass = (!isAttention) ? 'CAW-main-hide' : '';

  return(
    <div className={`CAW-main ${cawClass}`}>
      <h3>Внимание!</h3>
      <p>
        Это действие приведет<br/>
        к очистке корзины. Продлжить?
      </p>
      <div className="CAW-btns">
        <button
          onClick={() => openCloseAttentionWindow(false)}>
          нет
        </button>
        <button
          onClick={wipeCartData}>
          да
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { isAttention } }) => ({ isAttention });
const mapDispatchToProps = {
  wipeCartData,
  openCloseAttentionWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(CartAttentionWindow);