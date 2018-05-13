import BackendService from '../services/backendService';

export default {
  getSectors(dateId) {
    return {
      type: 'GET_SECTORS',
      payload: BackendService.getSectors(dateId),
    };
  },
  getRates(eventId) {
    return {
      type: 'GET_RATES',
      payload: BackendService.getRates(eventId),
    };
  },
  setDate(date) {
    return {
      type: 'SET_DATE',
      payload: date,
    };
  },
  setSector(sector) {
    return {
      type: 'SET_SECTOR',
      payload: sector,
    };
  },
  setRate(rate) {
    return {
      type: 'SET_RATE',
      payload: rate,
    };
  },
  setQuantity(quantity) {
    return {
      type: 'SET_QUANTITY',
      payload: quantity,
    };
  },
  clearPurchase() {
    return {
      type: 'CLEAR_PURCHASE',
      payload: null,
    };
  },
};
