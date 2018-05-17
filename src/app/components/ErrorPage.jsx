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
            event: props.location.state.event,
            date: props.location.state.date,
            rate: props.location.state.rate,
            sector: props.location.state.sector,
            quantity: props.location.state.quantity,
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
      rate: PropTypes.objectOf({ id: PropTypes.string, max: PropTypes.number, name: PropTypes.string }).isRequired,
      sector: PropTypes.objectOf({ name: PropTypes.string }).isRequired,
    }),
  }).isRequired,
};

export default ErrorPage;
