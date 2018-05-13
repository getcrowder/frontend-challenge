const purchaseReducer = (state = {
  date: {
    id: '',
  },
  sector: {},
  sectors: [],
  rate: { max: 0 },
  rates: [],
  quantity: 0,
}, action) => {
  let newState;
  switch (action.type) {
    case 'SET_DATE':
      newState = {
        ...state,
        date: action.payload,
      };
      break;
    case 'SET_SECTOR':
      newState = {
        ...state,
        sector: action.payload,
      };
      break;
    case 'SET_RATE':
      newState = {
        ...state,
        rate: action.payload,
      };
      break;
    case 'SET_QUANTITY':
      newState = {
        ...state,
        quantity: action.payload,
      };
      break;
    case 'GET_SECTORS_FULFILLED':
      newState = {
        ...state,
        sectors: action.payload,
      };
      break;
    case 'GET_RATES_FULFILLED':
      newState = {
        ...state,
        rates: action.payload,
      };
      break;
    case 'CLEAR_PURCHASE':
      newState = {
        ...state,
        sector: {},
        sectors: [],
        rate: { max: 0 },
        rates: [],
        quantity: 0,
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default purchaseReducer;
