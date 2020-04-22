
const updateItemsList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      loading: true,
      hasError: null,
      pageNumber: 0,
      itemsType: '',
      savedType: ''
    };
  }

  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        ...state.itemsList,
        items: [],
        hasError: null,
        loading: true
      };

    case 'FETCH_ITEMS_FAILURE':
      return {
        ...state.itemsList,
        items: [],
        loading: false,
        hasError: action.payload
      };

    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state.itemsList,
        items: action.payload,
        loading: false,
        hasError: null
      };

    case 'PAGE_NUMBER_SELECTED':
      return {
        ...state.itemsList,
        pageNumber: action.payload
      }

    case 'TRANSFER_ITEMS_TYPE':
      return {
        ...state.itemsList,
        itemsType: action.payload
      }

    case 'SAVE_ITEMS_TYPE':
      return {
        ...state.itemsList,
        savedType: action.payload
      }

    default: 
      return state.itemsList;
  }

};

export default updateItemsList;