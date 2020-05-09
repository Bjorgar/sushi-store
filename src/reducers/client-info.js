
const updateClientInfo = (state, action) => {

  if (state === undefined) {
    return {
      nameField: '',
      phoneField: '',
      nameValid: '',
      phoneValid: '',
      formValid: false,
      clientName: '',
      clientPhone: ''
    };
  };

  switch (action.type) {
    case 'USER_DATA_TRANSFERED':
      return {
        ...state.clientInfo,
        clientName: action.payloadClientName,
        clientPhone: action.payloadClientPhone
      };

    case 'HANDLE_INPUT_TRANSFERED':
      return {
        ...state.clientInfo,
        [action.payloadInputName]: action.payloadInputValue
      };

    case 'VALIDATION_TRANSFERED':
      return {
        ...state.clientInfo,
        [action.payloadValidateFielf]: action.payloadValidateValue
      };

    case 'FORM_VALIDATION_TRANSFERED':
      console.log(action.payload);
      return {
        ...state.clientInfo,
        formValid: action.payload
      }

    default:
      return state.clientInfo
  }
};

export default updateClientInfo;
