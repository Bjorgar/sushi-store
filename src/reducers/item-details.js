
const itemDetails = (state, action) => {

  if (state === undefined) {
    return {
      item: {},
      loading: true
    };
  }

  switch (action.type) {
    case 'SHOW_ITEM_DETAILS':
      return {
        item: action.payload,
        loading: false
      };

    case 'CLOSE_ITEM_DETAILS':
      return {
        item: {},
        loading: true
      };
    
    default: 
      return state.itemDetails;
  }
};

export default itemDetails;