import BackendService from '../services/backendService';

export default {
  lookingEvents(page) {
    return {
      type: 'LOOKING_EVENTS',
      payload: BackendService.getEvents(16, page * 16),
    };
  },
  getEvent(eventId) {
    return {
      type: 'GET_EVENT',
      payload: BackendService.getEvent(eventId),
    };
  },
};
