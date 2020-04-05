
const updateSearching = (state, actoin) => {
  if (state === undefined) {
    return {
      term: '',
      loading: true,
      isActive: false,
      items: [],
      error: false
    }
  }

  switch (actoin.type) {
    case 'SEARCHING_ACTIVATED': 
      return {
        term: actoin.payload,
        loading: true,
        isActive: true,
        error: false,
        items: []
      };
    
    case 'ITEMS_FOUNDED':
      return {
        ...state.itemsSearch,
        loading: false,
        items: actoin.payload,
        isActive: true,
        error: false
      };
    
    case 'SEARCHING_FAILURE':
      return {
        loading: false,
        error: actoin.payload,
        items: [],
        isActive: true,
        ...state.itemsSearch
      }

    case 'SEARCH_ENDED':
      return {
        term: '',
        loading: false,
        isActive: false,
        items: [],
        error: false
      };      
    
    default:
      return state.itemsSearch;
  };

};

export default updateSearching;