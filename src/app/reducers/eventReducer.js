const eventReducer = (state = {
  currentPage: 0,
  event: { venue: {} },
  events: [],
  hasMoreEvents: true,
}, action) => {
  let newState;
  switch (action.type) {
    case 'LOOKING_EVENTS_FULFILLED':
      newState = {
        ...state,
        currentPage: state.currentPage + 1,
        events: [...state.events, ...action.payload],
        hasMoreEvents: action.payload.length !== 0,
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
