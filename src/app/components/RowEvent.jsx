import React from 'react';
import PropTypes from 'prop-types';

import EventImage from './EventImage.jsx';

const RowEvent = props => (
  <div className="row">
    {props.events.map(event => (<EventImage event={event} />))}
  </div>
);

RowEvent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    thumb: PropTypes.string,
  })).isRequired,
};

export default RowEvent;
