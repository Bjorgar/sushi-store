
const itemDetails = (state, action) => {

  if (state === undefined) {
    return {
      item: {},
      isOpen: false
    };
  }

  switch (action.type) {
    case 'SHOW_ITEM_DETAILS':
      return {
        item: action.payload,
        isOpen: true
      };

    case 'CLOSE_POP_UP_DETAILS':
      return {
        item: {},
        isOpen: false
      };

    default: 
      return state.itemDetails;
  }
};

export default itemDetails;