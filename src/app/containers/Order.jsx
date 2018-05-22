import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Field from '../components/Field.jsx';
import orderActions from '../actions/orderActions.js';

class Order extends React.Component {
  componentWillMount() {
    this.props.cleanUp();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      this.props.history.push({
        pathname: '/success',
        state: {
          event: this.props.location.state.event,
          date: this.props.location.state.date,
          sector: this.props.location.state.sector,
          rate: this.props.location.state.rate,
          quantity: this.props.location.state.quantity,
          response: nextProps.response,
        },
      });
    }
    if (nextProps.error) {
      this.props.history.push({
        pathname: '/error',
        state: {
          event: this.props.location.state.event,
          date: this.props.location.state.date,
          sector: this.props.location.state.sector,
          rate: this.props.location.state.rate,
          quantity: this.props.location.state.quantity,
        },
      });
    }
  }

  getInformation() {
    return {
      rate: this.props.location.state.rate.id,
      quantity: this.props.location.state.quantity,
      card: {
        nameOnCard: this.props.cardholder,
        expires: this.props.cardExpiration,
        number: this.props.cardNumber,
        cvv: this.props.cvv,
      },
      user: {
        firstName: this.props.name,
        lastName: this.props.name,
        email: this.props.email,
        phone: this.props.phone,
      },
    };
  }

  render() {
    return (
      <div>
        <h4>Buying tickets for {this.props.location.state.event.name}</h4>
        <hr />
        <div className="row">
          <form>
            <div className="col-sm-offset-1 col-sm-10">
              <h4><strong>Your Details</strong></h4>
              <hr />
              <div className="row">
                <Field rowClass="col-sm-6" label="Name" type="text" onChange={event => this.props.changeName(event.target.value)} />
                <Field rowClass="col-sm-6" label="Email" type="email" onChange={event => this.props.changeEmail(event.target.value)} />
                <Field rowClass="col-sm-6" label="Phone" type="text" onChange={event => this.props.changePhone(event.target.value)} />
                <Field rowClass="col-sm-6" label="Address" type="text" onChange={event => this.props.changeAddress(event.target.value)} />
              </div>
              <hr />
              <h4><strong>Payment Details</strong></h4>
              <hr />
              <div className="row">
                <Field rowClass="col-xs-12" label="Cardholder Name" type="text" onChange={event => this.props.changeCardholder(event.target.value)} />
                <Field rowClass="col-sm-6" label="Card Number" type="number" onChange={event => this.props.changeCardNumber(event.target.value)} />
                <Field rowClass="col-sm-4" label="Card Expiration" type="month" onChange={event => this.props.changeCardExpiration(event.target.value)} />
                <Field rowClass="col-sm-2" label="CVV" type="number" onChange={event => this.props.changeCVV(event.target.value)} />
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <Link className="btn btn-default btn-block btn-lg" to={`/event/${this.props.location.state.event.id}`}> Back</Link>
          </div>
          <div className="col-xs-6">
            <button onClick={() => this.props.executePay(this.getInformation())} className="btn btn-primary btn-block btn-lg">Pay</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

Order.propTypes = {
  cardExpiration: PropTypes.string.isRequired,
  cardholder: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  changeAddress: PropTypes.func.isRequired,
  changeCardExpiration: PropTypes.func.isRequired,
  changeCardholder: PropTypes.func.isRequired,
  changeCardNumber: PropTypes.func.isRequired,
  changeCVV: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changeName: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired,
  cvv: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  executePay: PropTypes.func.isRequired,
  history: PropTypes.objectOf({ push: PropTypes.func }).isRequired,
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      date: PropTypes.objectOf({
        date: PropTypes.string,
      }).isRequired,
      event: PropTypes.objectOf({
        name: PropTypes.string,
        thubm: PropTypes.string,
        venue: PropTypes.objectOf({
          name: PropTypes.string,
          address: PropTypes.string,
        }).isRequired,
      }).isRequired,
      rate: PropTypes.objectOf({
        id: PropTypes.string,
        max: PropTypes.number,
        name: PropTypes.string,
      }).isRequired,
      sector: PropTypes.objectOf({ name: PropTypes.string }).isRequired,
    }),
  }).isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  response: PropTypes.objectOf({
    confirmationCode: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  success: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  address: state.orderReducer.address,
  cardExpiration: state.orderReducer.cardExpiration,
  cardholder: state.orderReducer.cardholder,
  cardNumber: state.orderReducer.cardNumber,
  cvv: state.orderReducer.cvv,
  email: state.orderReducer.email,
  error: state.orderReducer.error,
  name: state.orderReducer.name,
  phone: state.orderReducer.phone,
  response: state.orderReducer.response,
  success: state.orderReducer.success,
});

const mapDispatchToProps = dispatch => ({
  changeAddress: address => dispatch(orderActions.changeAddress(address)),
  changeCardExpiration: cardExp => dispatch(orderActions.changeCardExpiration(cardExp)),
  changeCardholder: cardholder => dispatch(orderActions.changeCardholder(cardholder)),
  changeCardNumber: cardNumber => dispatch(orderActions.changeCardNumber(cardNumber)),
  changeCVV: cvv => dispatch(orderActions.changeCVV(cvv)),
  changeEmail: email => dispatch(orderActions.changeEmail(email)),
  changeName: name => dispatch(orderActions.changeName(name)),
  changePhone: phone => dispatch(orderActions.changePhone(phone)),
  cleanUp: () => dispatch(orderActions.cleanUp()),
  executePay: information => dispatch(orderActions.executePay(information)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
