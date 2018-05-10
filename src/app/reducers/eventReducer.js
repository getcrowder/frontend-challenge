const eventReducer = (state = {
  events: [],
}, action) => {
  let newState;
  switch (action.type) {
    case 'LOOKING_EVENTS_FULFILLED':
      newState = {
        ...state,
        events: action.payload,
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default eventReducer;
