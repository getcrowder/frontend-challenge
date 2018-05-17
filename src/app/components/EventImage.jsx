import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const EventImage = props => (
  <div className="col-sm-3 event-list">
    <Link to={`/event/${props.event.id}`}>
      <img src={props.event.thumb} alt={props.event.name} width="100%" />
    </Link>
  </div>
);

EventImage.propTypes = {
  event: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    thumb: PropTypes.string,
  }).isRequired,
};

export default EventImage;
