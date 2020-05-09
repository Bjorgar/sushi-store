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
    image = item.image,
    id = item.id,
    name = item.name,
    type = item.type,
    ingredients = item.ingredients,
    count = 0,
    total = 0,
    price = item.price
  } = itemInCart

  return {
    image,
    id,
    name,
    type,
    ingredients,
    count: count + quantity,
    total: total + quantity*ItemPrice,
    price
  };
};

const updateOrder = (state, id, quantity) => {
  const itemId = id;
  const { shoppingCart: { cartItems, itemsPrice, totalCount, deliveryPrice } } = state;
  const item = items.find((item) => item.id === itemId);
  const idx = cartItems.findIndex(({ id }) => id === itemId);
  const itemInCart = cartItems[idx];
  const ItemPrice = (item) ? item.price : itemInCart.price;

  const newItem = createItem(item, itemInCart, quantity, ItemPrice);

  return {
    ...state.shoppingCart,
    cartItems: updateCartItems(cartItems, newItem, idx),
    itemsPrice: itemsPrice + quantity*ItemPrice,
    totalCount: totalCount + quantity,
    totalPrice: (itemsPrice + quantity*ItemPrice) + deliveryPrice
  }
};

const updateShoppingCart = (state, action) => {
  
  if (state === undefined) {
    return {
      cartItems: [],
      itemsPrice: 0,
      totalCount: 0,
      isOpen: false,
      isDelivery: false,
      deliveryPrice: 0,
      totalPrice: 0,
      isSelectListActive: false,
      selectedPlace: 'выберите район',
      isOpenSelectList: false,
      isCartViewerVisible: false,
      distance: null,
      orderStep: 0
    };
  }

  switch (action.type) {
    case 'ITEM_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'DELETED_ITEM_FROM_CART':
      return updateOrder(state, action.payload, -1);
    
    case 'DELETED_ALL_ITEMS_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload)
      return updateOrder(state, action.payload, -item.count);

    case 'CART_OPENED':
      return {
        ...state.shoppingCart,
        isOpen: true
      };
    
    case 'CART_CLOSED':
      return {
        ...state.shoppingCart,
        isOpen: false
      };

    case 'DELIVERY_VALUE_CHANGED':
      if (!action.payload) {
        return {
          ...state.shoppingCart,
          isDelivery: action.payload,
          selectedPlace: 'выберите район',
          deliveryPrice: 0,
          totalPrice: state.shoppingCart.itemsPrice
        }
      }
      return {
        ...state.shoppingCart,
        isDelivery: action.payload
      };

    case 'PLACE_VALUE_TRANSFERED':
      return {
        ...state.shoppingCart,
        deliveryPrice: +action.payload,
        totalPrice: state.shoppingCart.itemsPrice + +action.payload
      };

    case 'PLACE_SELECTED':
      return {
        ...state.shoppingCart,
        selectedPlace: action.payload
      };

    case 'CHANGED_SELECT_LIST_VISIBLE':
      return {
        ...state.shoppingCart,
        isOpenSelectList: action.payload
      };

    case 'CHANGED_CART_VIEWER_VISIBILITY':
      return {
        ...state.shoppingCart,
        isCartViewerVisible: !state.shoppingCart.isCartViewerVisible
      };

    case 'DISTANCE_TO_BOTTOM_TRANSFERED':
      return {
        ...state.shoppingCart,
        distance: action.payload
      };
    
    case 'ORDER_STEP_CHANGED':
      return {
        ...state.shoppingCart,
        orderStep: action.payload
      };

    default: 
      return state.shoppingCart
  }
};

export default updateShoppingCart;