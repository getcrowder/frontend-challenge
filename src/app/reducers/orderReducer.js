const purchaseReducer = (state = {
  name: '',
  email: '',
  phone: '',
  address: '',
  cardholder: '',
  cardNumber: '',
  cardExpiration: '',
  cvv: '',
  response: {},
  success: false,
  error: false,
}, action) => {
  let newState;
  switch (action.type) {
    case 'CHANGE_NAME':
      newState = {
        ...state,
        name: action.payload,
      };
      break;
    case 'CHANGE_EMAIL':
      newState = {
        ...state,
        email: action.payload,
      };
      break;
    case 'CHANGE_PHONE':
      newState = {
        ...state,
        phone: action.payload,
      };
      break;
    case 'CHANGE_ADDRESS':
      newState = {
        ...state,
        address: action.payload,
      };
      break;
    case 'CHANGE_CARDHOLDER':
      newState = {
        ...state,
        cardholder: action.payload,
      };
      break;
    case 'CHANGE_CARD_NUMBER':
      newState = {
        ...state,
        cardNumber: action.payload,
      };
      break;
    case 'CHANGE_CARD_EXPIRATION':
      newState = {
        ...state,
        cardExpiration: action.payload,
      };
      break;
    case 'CHANGE_CVV':
      newState = {
        ...state,
        cvv: action.payload,
      };
      break;
    case 'CLEAN_UP':
      newState = {
        ...state,
        success: false,
        error: false,
        response: {},
      };
      break;
    case 'EXECUTE_PAY_FULFILLED':
      newState = {
        ...state,
        success: true,
        response: action.payload,
      };
      break;
    case 'EXECUTE_PAY_REJECTED':
      newState = {
        ...state,
        error: true,
        response: action.payload,
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default purchaseReducer;
