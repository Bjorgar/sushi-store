import React from 'react';
import { withRouter } from 'react-router-dom';


const FindedItems = ({ items, onShowDeatailsModal, onHideDetailsModal, onInitialPosition, onAddedToCart, history }) => {

  const openDetailsPage = ({ id, type }) => {

    if (type === 'rools') {
      history.push(`/rools/${id}`)
    } else {
      history.push(`/sets/${id}`)
    }
  };

  return(
    items.map((item) => {
      return <li>
                <span
                  className='show-item'
                  key={item.id}
                  onMouseOver={() => onShowDeatailsModal(item)}
                  onMouseOut={onHideDetailsModal}
                  onMouseMove={onInitialPosition}
                  onClick={() => openDetailsPage(item)}
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