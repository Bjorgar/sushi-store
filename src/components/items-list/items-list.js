import React from 'react';
import ListItem  from '../list-item';
import './items-list.css';

const ItemsList = ({ items, onAddedToCart, onItemDetails }) => {
  return(
    <main>
      {
       items.map((item) => {
         return <ListItem
            key={item.id}
            item={item}
            onAddedToCart={onAddedToCart}
            onItemDetails={onItemDetails} />
       })
      }
    </main>
  );
}

export default ItemsList;