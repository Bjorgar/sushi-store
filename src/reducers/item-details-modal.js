
const updateItemDetailsModal = (state, action) => {

  if (state === undefined) {
    return {
      type: '',
      ingredients: [],
      isActive: false,
      x: null,
      y: null
    }
  }

  switch(action.type) {
    case 'SHOW_DETAILS_MODAL':
      const item = action.payload;
      return {
        type: item.type,
        ingredients: item.ingredients,
        isActive: true
      };

    case 'HIDE_DETAILS_MODAL':
      return {
        ...state.itemDetailsModal,
        isActive: false
      };
    
    case 'INITIAL_POSITION':
      return {
        ...state.itemDetailsModal,
        x: action.payloadX,
        y: action.payloadY
      };

    default:
      return state.itemDetailsModal;
  }

};

export default updateItemDetailsModal;
