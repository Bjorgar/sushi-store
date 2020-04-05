import SushistoreService from '../services/sushi-store-service';

const sushistoreService = new SushistoreService();

sushistoreService.getAllItems()
  .then((data) => items = data);
  
let items;

const updateCartItems = (cartItems, newItem, idx) => {

  if (newItem.count === 0) {
    return [
      ...cartItems.slice(0 ,idx),
      ...cartItems.slice(idx + 1)
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      newItem
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    newItem,
    ...cartItems.slice(idx + 1)
  ];
}

const createItem = (item, itemInCart = {}, quantity, ItemPrice) => {

  const {
    id = item.id,
    name = item.name,
    count = 0,
    total = 0,
    price = item.price
  } = itemInCart

  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity*ItemPrice,
    price
  };
};

const updateOrder = (state, id, quantity) => {
  const itemId = id;
  const { shoppingCart: { cartItems, total, totalCount } } = state;
  const item = items.find((item) => item.id === itemId);
  const idx = cartItems.findIndex(({ id }) => id === itemId);
  const itemInCart = cartItems[idx];
  const ItemPrice = (item) ? item.price : itemInCart.price;

  const newItem = createItem(item, itemInCart, quantity, ItemPrice);

  return {
    cartItems: updateCartItems(cartItems, newItem, idx),
    total: total + quantity*ItemPrice,
    totalCount: totalCount + quantity
  }
};

const updateShoppingCart = (state, action) => {
  
  if (state === undefined) {
    return {
      cartItems: [],
      total: 0,
      totalCount: 0,
    };
  }

  switch (action.type) {
    case 'ITEM_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1)

    case 'DELETED_ITEM_FROM_CART':
      return updateOrder(state, action.payload, -1)
    
    case 'DELETED_ALL_ITEMS_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
      return updateOrder(state, action.payload, -item.count);
    
    default: 
      return state.shoppingCart
  }
};

export default updateShoppingCart;