
const updateItemsList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      loading: true,
      hasError: null,
      pageNumber: 0
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

    default: 
      return state.itemsList;
  }

};

export default updateItemsList;