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

const closePopUpDetails = () => {
  return {
    type: 'CLOSE_POP_UP_DETAILS'
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
  closePopUpDetails,
  transferValue,
  showFoundedItems,
  searchError,
  searchEnded,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition
};