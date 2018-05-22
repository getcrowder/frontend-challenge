import BackendService from '../services/backendService.js';

export default {
  changeName(name) {
    return {
      type: 'CHANGE_NAME',
      payload: name,
    };
  },
  changeEmail(email) {
    return {
      type: 'CHANGE_EMAIL',
      payload: email,
    };
  },
  changePhone(phone) {
    return {
      type: 'CHANGE_PHONE',
      payload: phone,
    };
  },
  changeAddress(address) {
    return {
      type: 'CHANGE_ADDRESS',
      payload: address,
    };
  },
  changeCardholder(cardholder) {
    return {
      type: 'CHANGE_CARDHOLDER',
      payload: cardholder,
    };
  },
  changeCardNumber(cardNumber) {
    return {
      type: 'CHANGE_CARD_NUMBER',
      payload: cardNumber,
    };
  },
  changeCardExpiration(cardExpiration) {
    return {
      type: 'CHANGE_CARD_EXPIRATION',
      payload: cardExpiration,
    };
  },
  changeCVV(cvv) {
    return {
      type: 'CHANGE_CVV',
      payload: cvv,
    };
  },
  cleanUp() {
    return {
      type: 'CLEAN_UP',
      payload: null,
    };
  },
  executePay(information) {
    return {
      type: 'EXECUTE_PAY',
      payload: BackendService.executePay(information),
    };
  },
};
