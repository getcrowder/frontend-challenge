import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const styles = { color: '#f60' };

const ErrorPage = props => (
  <div className="jumbotron text-center">
    <h3><strong style={styles}>Error on your order</strong></h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec et imperdiet turpis. Quisque at arcu at mi porta dictum.
      Duis venenatis mollis erat sed vehicula.
    </p>
    <p>
      <Link
        className="btn btn-primary btn-lg"
        to={{
          pathname: '/order',
          state: {
            eventId: props.location.state.eventId,
            eventName: props.location.state.eventName,
            quantity: props.location.state.quantity,
            rateId: props.location.state.rateId,
            date: props.location.state.date,
            sector: props.location.state.sector,
          },
        }}
        role="button"
      >Try Again
      </Link>
    </p>
  </div>
);

ErrorPage.propTypes = {
  location: PropTypes.objectOf({
    state: PropTypes.objectOf({
      date: PropTypes.objectOf({ date: PropTypes.string }).isRequired,
      eventId: PropTypes.number.isRequired,
      eventName: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      rateId: PropTypes.number.isRequired,
      sector: PropTypes.objectOf({ name: PropTypes.string }).isRequired,
    }),
  }).isRequired,
};

export default ErrorPage;
