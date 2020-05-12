import React from 'react';
import { routingToDetailsPage } from '../utils';
import { withRouter } from 'react-router-dom';

const FoundedItems = ({
  items,
  onShowDeatailsModal,
  onHideDetailsModal,
  onInitialPosition,
  onAddedToCart,
  history,
  searchEnded }) => {

  return(
    items.map((item) => {
      return <li
              key={`search-panel ${item.id}`}
             >
              <span
                className='show-item'
                onMouseOver={() => onShowDeatailsModal(item)}
                onMouseOut={onHideDetailsModal}
                onMouseMove={onInitialPosition}
                onClick={() => {
                  routingToDetailsPage(item, history);
                  searchEnded();
                  onHideDetailsModal();
                }}
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

export default withRouter(FoundedItems);
