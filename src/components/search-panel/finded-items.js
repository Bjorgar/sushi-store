import React from 'react';


const FindedItems = ({ items, onShowDeatailsModal, onHideDetailsModal, onInitialPosition }) => {

  return(
    items.map((item) => {
      return <li key={item.id}
              onMouseOver={() => onShowDeatailsModal(item)}
              onMouseOut={onHideDetailsModal}
              onMouseMove={onInitialPosition}
              >{item.name}</li>
      }
    )
  );
};

export default FindedItems;