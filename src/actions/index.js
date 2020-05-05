const itemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  }
};

const itemsLoaded = (items) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: items
  }
};

const catchError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  }
};

const itemAddedToCart = (id) => {
  return {
    type: 'ITEM_ADDED_TO_CART',
    payload: id
  }
};

const deletedItemFromCart = (id) => {
  return {
    type: 'DELETED_ITEM_FROM_CART',
    payload: id
  }
};

const deletedAllItemsFromCart = (id) => {
  return {
    type: 'DELETED_ALL_ITEMS_FROM_CART',
    payload: id
  }
};

const loadedSlides = (slides) => {
  return {
    type: 'LOADED_SLIDES_FROM_SERVICE',
    payload: slides
  }
};

const showSlide = (slideNum) => {
  return {
    type: 'SLIDE_SELECTED',
    payload: slideNum
  }
};

const showItemDetails = (item) => {
  return {
    type: 'SHOW_ITEM_DETAILS',
    payload: item
  }
};

const closeItemDetails = () => {
  return {
    type: 'CLOSE_ITEM_DETAILS'
  }
};

const transferValue = (term) => {
  return {
    type: 'SEARCHING_ACTIVATED',
    payload: term
  };
};

const showFoundedItems = (items) => {
  return {
    type: 'ITEMS_FOUNDED',
    payload: items
  };
};

const searchError = (err) => {
  return {
    type: 'SEARCHING_FAILURE',
    payload: err
  };
};

const searchEnded = () => {
  return {
    type: 'SEARCH_ENDED'
  };
};

const showDeatailsModal = (item) => {
  return {
    type: 'SHOW_DETAILS_MODAL',
    payload: item
  };
};

const hideDetailsModal = () => {
  return {
    type: 'HIDE_DETAILS_MODAL'
  };
};

const initialPosition = (x, y) => {
  return {
    type: 'INITIAL_POSITION',
    payloadX: x,
    payloadY: y
  };
};

const openPopUpIngredientDetails = (ingredient) => {
  return {
    type: 'OPEN_POP_UP_ING_DETAILS',
    payload: ingredient
  };
};

const closePopUpIngredientDetails = () => {
  return {
    type: 'CLOSE_POP_UP_ING_DETAILS'
  };
};

const transferQuantity = (quantity) => {
  return {
    type: 'TRANSFER_QUANTITY',
    payload: quantity
  };
};

const transferOrder = (order) => {
  return {
    type: 'TRANSFER_ORDER',
    payload: order
  };
};

const showQuantitySettings = () => {
  return {
    type: 'SHOW_QUANTITY_SETTINGS'
  };
};

const showOrderSettings = () => {
  return {
    type: 'SHOW_ORDER_SETTINGS'
  };
};

const closeQuantitySettings = () => {
  return {
    type: 'CLOSE_QUANTITY_SETTINGS'
  };
};

const closeOrderSettings = () => {
  return {
    type: 'CLOSE_ORDER_SETTINGS'
  };
};

const setActiveLi = (id) => {
  return {
    type: 'SET_ACTIVE_LI',
    payload: id
  };
};

const deactivateActiveLi = () => {
  return {
    type: 'DEACTIVATE_ACTIVE_LI'
  };
};

const transferItemsId = (itemsId) => {
  return {
    type: 'TRANSFER_ITEMS_ID',
    payload: itemsId
  };
};

const selectPageNumber = (idx) => {
  return {
    type: 'PAGE_NUMBER_SELECTED',
    payload: idx
  };
};

const saveItemsType = (type) => {
  return {
    type: 'SAVE_ITEMS_TYPE',
    payload: type
  }
};

const openShoppingCart = () => {
  return {
    type: 'CART_OPENED'
  };
};

const closeShoppingCart = () => {
  return {
    type: 'CART_CLOSED'
  };
};

const changeDeliveryValue = (value) => {
  return {
    type: 'DELIVERY_VALUE_CHANGED',
    payload: value
  };
};

const transferPlaceValue = (value) => {
  return {
    type: 'PLACE_VALUE_TRANSFERED',
    payload: value
  };
};

const transferSelectedPlace = (place) => {
  return {
    type: 'PLACE_SELECTED',
    payload: place
  };
};

const openCloseSelectList = (boolean) => {
  return {
    type: 'CHANGED_SELECT_LIST_VISIBLE',
    payload: boolean
  };
};

const showHidePopUpCartViewer = () => {
  return {
    type: 'CHANGED_CART_VIEWER_VISIBILITY'
  };
};

export {
  itemAddedToCart,
  deletedItemFromCart,
  deletedAllItemsFromCart,
  loadedSlides,
  showSlide,
  catchError,
  itemsLoaded,
  itemsRequested,
  showItemDetails,
  closeItemDetails,
  transferValue,
  showFoundedItems,
  searchError,
  searchEnded,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition,
  openPopUpIngredientDetails,
  closePopUpIngredientDetails,
  transferQuantity,
  transferOrder,
  showQuantitySettings,
  showOrderSettings,
  closeQuantitySettings,
  closeOrderSettings,
  setActiveLi,
  deactivateActiveLi,
  transferItemsId,
  selectPageNumber,
  saveItemsType,
  openShoppingCart,
  closeShoppingCart,
  changeDeliveryValue,
  transferPlaceValue,
  transferSelectedPlace,
  openCloseSelectList,
  showHidePopUpCartViewer
};