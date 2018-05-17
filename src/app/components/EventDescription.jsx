import React from 'react';
import PropTypes from 'prop-types';

const EventDescription = props => (
  <div className="row">
    <div className="col-sm-7">
      <h4><strong>Event Description</strong></h4>
      <p>
        { props.event.description }
      </p>
    </div>
    <div className="col-sm-offset-1 col-sm-4">
      <h4><strong>Where</strong></h4>
      { props.event.venue.address }
    </div>
  </div>
);

EventDescription.propTypes = {
  event: PropTypes.objectOf({
    description: PropTypes.string,
    venue: PropTypes.objectOf({ address: PropTypes.string }),
  }).isRequired,
};

export default EventDescription;
