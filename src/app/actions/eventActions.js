import BackendService from '../services/backendService';

export default {
  lookingEvents() {
    return {
      type: 'LOOKING_EVENTS',
      payload: BackendService.getEvents(),
    };
  },
  getEvent(eventId) {
    return {
      type: 'GET_EVENT',
      payload: BackendService.getEvent(eventId),
    };
  },
};
