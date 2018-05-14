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
          eventName: this.props.location.state.eventName,
          eventId: this.props.location.state.eventId,
          response: nextProps.response,
          date: this.props.location.state.date,
          sector: this.props.location.state.sector,
          venue: this.props.location.state.venue,
        },
      });
    }
    if (nextProps.error) {
      this.props.history.push({
        pathname: '/error',
        state: {
          eventName: this.props.location.state.eventName,
          eventId: this.props.location.state.eventId,
          rateId: this.props.location.state.rateId,
          quantity: this.props.location.state.quantity,
          date: this.props.location.state.date,
          sector: this.props.location.state.sector,
        },
      });
    }
  }
  getInformation() {
    return {
      rate: this.props.location.state.rateId,
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
        <h4>Buying tickets for {this.props.location.state.eventName}</h4>
        <hr />
        <div className="row">
          <form>
            <div className="col-sm-offset-1 col-sm-10">
              <h4><strong>Your Details</strong></h4>
              <hr />
              <div className="row">
                <Field rowClass="col-sm-6" label="Name" type="text" onChange={event => this.props.changeName(event.target.value)} />
                <Field rowClass="col-sm-6" label="Email" type="text" onChange={event => this.props.changeEmail(event.target.value)} />
                <Field rowClass="col-sm-6" label="Phone" type="text" onChange={event => this.props.changePhone(event.target.value)} />
                <Field rowClass="col-sm-6" label="Address" type="text" onChange={event => this.props.changeAddress(event.target.value)} />
              </div>
              <hr />
              <h4><strong>Payment Details</strong></h4>
              <hr />
              <div className="row">
                <Field rowClass="col-xs-12" label="Cardholder Name" type="text" onChange={event => this.props.changeCardholder(event.target.value)} />
                <Field rowClass="col-sm-6" label="Card Number" type="text" onChange={event => this.props.changeCardNumber(event.target.value)} />
                <Field rowClass="col-sm-4" label="Card Expiration" type="text" onChange={event => this.props.changeCardExpiration(event.target.value)} />
                <Field rowClass="col-sm-2" label="CVV" type="text" onChange={event => this.props.changeCVV(event.target.value)} />
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-6">
            <Link className="btn btn-default btn-block btn-lg" to={`/event/${this.props.location.state.eventId}`}> Back</Link>
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
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      eventName: PropTypes.string.isRequired,
      eventId: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  changeName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePhone: PropTypes.func.isRequired,
  changeAddress: PropTypes.func.isRequired,
  changeCardholder: PropTypes.func.isRequired,
  changeCardNumber: PropTypes.func.isRequired,
  changeCardExpiration: PropTypes.func.isRequired,
  changeCVV: PropTypes.func.isRequired,
  executePay: PropTypes.func.isRequired,
  cleanUp: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cardholder: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  cardExpiration: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  response: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  name: state.orderReducer.name,
  email: state.orderReducer.email,
  phone: state.orderReducer.phone,
  address: state.orderReducer.address,
  cardholder: state.orderReducer.cardholder,
  cardNumber: state.orderReducer.cardNumber,
  cardExpiration: state.orderReducer.cardExpiration,
  cvv: state.orderReducer.cvv,
  success: state.orderReducer.success,
  response: state.orderReducer.response,
  error: state.orderReducer.error,
});

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(orderActions.changeName(name)),
  changeEmail: email => dispatch(orderActions.changeEmail(email)),
  changePhone: phone => dispatch(orderActions.changePhone(phone)),
  changeAddress: address => dispatch(orderActions.changeAddress(address)),
  changeCardholder: cardholder => dispatch(orderActions.changeCardholder(cardholder)),
  changeCardNumber: cardNumber => dispatch(orderActions.changeCardNumber(cardNumber)),
  changeCardExpiration: cardExp => dispatch(orderActions.changeCardExpiration(cardExp)),
  changeCVV: cvv => dispatch(orderActions.changeCVV(cvv)),
  cleanUp: () => dispatch(orderActions.cleanUp()),
  executePay: information => dispatch(orderActions.executePay(information)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
