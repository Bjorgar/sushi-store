
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
    case 'SHOW_QUANTITY_SETTINGS':
      return {
        ...state.displaySettings,
        isActiveQuantitySettings: !state.displaySettings.isActiveQuantitySettings
      };
    case 'SHOW_ORDER_SETTINGS':
      return {
        ...state.displaySettings,
        isActiveOrderSettings: !state.displaySettings.isActiveOrderSettings
      };
      case 'CLOSE_QUANTITY_SETTINGS':
        return {
          ...state.displaySettings,
          isActiveQuantitySettings: false
        };
      case 'CLOSE_ORDER_SETTINGS':
        return {
          ...state.displaySettings,
          isActiveOrderSettings: false
        };
    
    default: 
      return state.displaySettings
  };
};

export default updateDisplaySettings;
