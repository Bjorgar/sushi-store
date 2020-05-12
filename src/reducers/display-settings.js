
const updateDisplaySettings = (state, action) => {
  if (state === undefined) {
    return {
      isActiveQuantitySettings: false,
      isActiveOrderSettings: false,
      quantity: 12,
      order: 'выбрать фильтр'
    }
  }

  switch (action.type) {
    case 'TRANSFER_QUANTITY':
      return {
        ...state.displaySettings,
        quantity: action.payload
      };
    case 'TRANSFER_ORDER':
      return {
        ...state.displaySettings,
        order: action.payload
      };
    case 'VISIBILITY_QUANTITY_SETTINGS_CHANGED':
      return {
        ...state.displaySettings,
        isActiveQuantitySettings: action.payload
      };
    case 'VISIBILITY_ORDER_SETTINGS_CHANGED':
      return {
        ...state.displaySettings,
        isActiveOrderSettings: action.payload
      };
    
    default: 
      return state.displaySettings
  };
};

export default updateDisplaySettings;
