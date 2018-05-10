import BackendService from '../services/backendService';

export default {
  lookingEvents() {
    return {
      type: 'LOOKING_EVENTS',
      payload: BackendService.getEvents(),
    };
  },
};
