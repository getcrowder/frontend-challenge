import React from 'react';
import PropTypes from 'prop-types';

const Field = props => (
  <div className={props.rowClass}>
    <div className="form-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input type={props.type} className="form-control" onChange={props.onChange} />
    </div>
  </div>
);

Field.propTypes = {
  rowClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;

