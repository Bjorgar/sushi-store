
const itemDetails = (state, action) => {

  if (state === undefined) {
    return {
      item: {},
      loading: true,
      error: false,
      activeLi: null,
      itemsData: null,
    };
  }

  switch (action.type) {
    case 'SHOW_ITEM_DETAILS':
      return {
        ...state.itemDetails,
        item: action.payload,
        loading: false,
        error: false
      };

    case 'FETCH_DETAILS_REQUEST':
      return {
        ...state.itemDetails,
        loading: true,
        error: false
      };

    case 'FETCH_DETAILS_FAILURE':
      return {
        ...state.itemDetails,
        item: [],
        loading: true,
        error: true
      }

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
    
    case 'TRANSFER_ITEMS_DATA':
      return {
        ...state.itemDetails,
        itemsData: action.payload
      };

    default: 
      return state.itemDetails;
  }
};

export default itemDetails;