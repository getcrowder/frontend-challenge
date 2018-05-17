import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

function venueName(props) {
  return props.location.state.event.venue.name;
}

function venueAddress(props) {
  return props.location.state.event.venue.address;
}

function parseDate(props) {
  const date = new Date(props.location.state.date.date);
  const dayName = date.toUTCString().split(',')[0];
  const stringDate = date.toISOString().split('T')[0].split('-');
  const year = stringDate[0].slice(2, 4);
  return `${dayName}, ${stringDate[2]}/${stringDate[1]}/${year}`;
}

const SuccessPage = props => (
  <div className="jumbotron">
    <h3><strong>Congratulations! Order successful</strong></h3>
    <hr />
    <h5><strong>Order Details</strong></h5>
    <hr />
    <div className="media">
      <div className="media-left">
        <img src={props.location.state.event.thubm} alt={props.location.state.event.name} width="150" className="media-object" />
      </div>
      <div className="media-body">
        <h4 className="media-heading"><strong>{props.location.state.event.name}</strong></h4>
        <strong>Where:</strong>{venueName(props)}, {venueAddress(props)}<br />
        <strong>When:</strong> {parseDate(props)}<br />
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
      response: PropTypes.objectOf({
        confirmationCode: PropTypes.string,
        quantity: PropTypes.number,
      }).isRequired,
      sector: PropTypes.objectOf({ name: PropTypes.string }).isRequired,
    }),
  }).isRequired,
};

export default SuccessPage;
