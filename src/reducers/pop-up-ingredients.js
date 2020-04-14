
const updatePopUpIngredients = (state, action) => {
  if (state === undefined) {
    return {
      ingredient: {},
      isOpenPopUp: false
    };
  }

  switch(action.type) {
    case 'OPEN_POP_UP_ING_DETAILS':
      return {
        ingredient: action.payload,
        isOpenPopUp: true
      };

    case 'CLOSE_POP_UP_ING_DETAILS':
      return {
        ...state.popUpIngredients,
        isOpenPopUp: false
      };

    default: 
      return state.popUpIngredients;
  };
}

export default updatePopUpIngredients;
