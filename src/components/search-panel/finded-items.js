import React from 'react';
import { routingToDetailsPage } from '../utils';
import { withRouter } from 'react-router-dom';

const FindedItems = ({ items, onShowDeatailsModal, onHideDetailsModal, onInitialPosition, onAddedToCart, history }) => {

  return(
    items.map((item) => {
      return <li>
                <span
                  className='show-item'
                  key={item.id}
                  onMouseOver={() => onShowDeatailsModal(item)}
                  onMouseOut={onHideDetailsModal}
                  onMouseMove={onInitialPosition}
                  onClick={() => routingToDetailsPage(item, history)}
                >
                  {item.name}
                </span>
                <span
                  className="add-item"
                  onClick={() => onAddedToCart(item.id)}
                >
                  <i className="fas fa-cart-plus"></i>
                </span>
              </li>
      }
    )
  );
};

export default withRouter(FindedItems);
