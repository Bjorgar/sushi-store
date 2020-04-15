
const updateItemsList = (state, action) => {

  if (state === undefined) {
    return {
      items: [],
      loading: true,
      hasError: null,
    };
  }

  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        items: [],
        hasError: null,
        loading: true
      };

    case 'FETCH_ITEMS_FAILURE':
      return {
        items: [],
        loading: false,
        hasError: action.payload
      };

    case 'FETCH_ITEMS_SUCCESS':
      return {
        items: action.payload,
        loading: false,
        hasError: null
      };

    default: 
      return state.itemsList;
  }

};

export default updateItemsList;