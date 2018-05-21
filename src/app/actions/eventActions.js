import BackendService from '../services/backendService';

export default {
  lookingEvents(page) {
    return {
      type: 'LOOKING_EVENTS',
      payload: BackendService.getEvents(8, page * 8),
    };
  },
  getEvent(eventId) {
    return {
      type: 'GET_EVENT',
      payload: BackendService.getEvent(eventId),
    };
  },
};
