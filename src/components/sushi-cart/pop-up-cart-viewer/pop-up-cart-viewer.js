import React from 'react';
import { connect } from 'react-redux';
import './pop-up-cart-viewer.css';

const PopUpCartViewer = ({ items, isCartViewerVisible }) => {

  const clazz = (!isCartViewerVisible) ? 'cart-viewer-box-hide' : '';

  return(
    <div className={`cart-viewer-box ${clazz}`}>
      <div className="triangle"></div>
      <ul>
        {
          items.map((item) => {
            return(
              <li key={`${item.id} cart-viewer`}>
                <span>{item.name}</span>
                <span>{item.count}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, isCartViewerVisible } }) => ({ items: cartItems, isCartViewerVisible });

export default connect(mapStateToProps)(PopUpCartViewer);
