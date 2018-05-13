const eventReducer = (state = {
  events: [],
  event: {
    venue: {},
  },
}, action) => {
  let newState;
  switch (action.type) {
    case 'LOOKING_EVENTS_FULFILLED':
      newState = {
        ...state,
        events: action.payload,
      };
      break;
    case 'GET_EVENT_FULFILLED':
      newState = {
        ...state,
        event: action.payload,
      };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
};

export default eventReducer;
