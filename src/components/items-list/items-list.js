import React from 'react';
import ListItem  from '../list-item';

const ItemsList = ({ items, onAddedToCart }) => {
  return(
    <main>
      {
       items.map((item) => {
         return <ListItem
            key={item.id}
            item={item}
            onAddedToCart={onAddedToCart} />
       })
      }
    </main>
  );
}

export default ItemsList;