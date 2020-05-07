
const itemDetails = (state, action) => {

  if (state === undefined) {
    return {
      item: {},
      loading: true,
      activeLi: null,
      itemsId: null
    };
  }

  switch (action.type) {
    case 'SHOW_ITEM_DETAILS':
      return {
        ...state.itemDetails,
        item: action.payload,
        loading: false
      };

    case 'CLOSE_ITEM_DETAILS':
      return {
        ...state.itemDetails,
        item: {},
        loading: true
      };

    case 'SET_ACTIVE_LI':
      return {
        ...state.itemDetails,
        activeLi: action.payload
      };

    case 'DEACTIVATE_ACTIVE_LI':
      return {
        ...state.itemDetails,
        activeLi: null
      };
    
    case 'TRANSFER_ITEMS_ID':
      return {
        ...state.itemDetails,
        itemsId: action.payload
      };

    default: 
      return state.itemDetails;
  }
};

export default itemDetails;