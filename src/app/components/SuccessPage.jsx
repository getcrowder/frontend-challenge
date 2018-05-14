import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SuccessPage = props => (
  <div className="jumbotron">
    <h3><strong>Congratulations! Order successful</strong></h3>
    <hr />
    <h5><strong>Order Details</strong></h5>
    <hr />
    <div className="media">
      <div className="media-left">
        <img src="https://cdn.boletius.com/images/1521202649764-test-pos-DA32F77A-C542-41B7-81C4-43091924255B.jpeg" alt="eventImage" width="150" className="media-object" />
      </div>
      <div className="media-body">
        <h4 className="media-heading"><strong>{props.location.state.eventName}</strong></h4>
        <strong>Where:</strong>{props.location.state.venue.name}, {props.location.state.venue.address}<br />
        <strong>When:</strong> {props.location.state.date.date}<br />
        <strong>Sector:</strong> {props.location.state.sector.name}<br />
        <strong>Quantity:</strong> {props.location.state.response.quantity}<br />
        <strong>Confirmation Code:</strong>{props.location.state.response.confirmationCode}
      </div>
    </div>
    <hr />
    <div className="text-right">
      <Link className="btn btn-primary btn-lg" to="/" role="button">Back to home</Link>
    </div>
  </div>
);

SuccessPage.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      date: PropTypes.objectOf({ date: PropTypes.string }).isRequired,
      eventName: PropTypes.string.isRequired,
      response: PropTypes.objectOf({
        confirmationCode: PropTypes.string,
        quantity: PropTypes.number,
      }).isRequired,
      sector: PropTypes.objectOf({ name: PropTypes.string }).isRequired,
      venue: PropTypes.objectOf({ name: PropTypes.string, address: PropTypes.string }).isRequired,
    }),
  }).isRequired,
};

export default SuccessPage;
