import React from 'react';
import './completed-order.css';
import { connect } from 'react-redux';
import { wipeCartData } from '../../../actions';
import { Link } from 'react-router-dom';

const CompletedOrder = ({ clientName, wipeCartData }) => {

  return(
    <div>
      <h2 className="h2-title">Завершение заказа</h2>
      <div className="CO-message">
        <h3>{clientName}, благодарим за заказ</h3>
        <p>
          Ожидайте, пока разработчик освоит Back End,<br/>
          и сможет передать ваш заказ на сервер.<br/>
          Мы очень ценим ваше время, поэтому:<br/>
          сварите пельменей и выпейте пепси.
        </p>
        <Link to="/">
          <button
            onClick={wipeCartData}
            className="cart-btn-next">
            завершить
          </button>
        </Link>
      </div>
      
    </div>
  );
}

const mapStateToProps = ({ clientInfo: { clientName } }) => ({ clientName });
const mapDispatchToProps = { wipeCartData };

export default connect(mapStateToProps, mapDispatchToProps)(CompletedOrder);
