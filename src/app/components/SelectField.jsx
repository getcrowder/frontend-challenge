import React from 'react';
import PropTypes from 'prop-types';

const SelectField = props => (
  <div className={props.rowClass}>
    <div className="form-group">
      <select name={props.name} id={props.name} className="form-control" onChange={props.onChange} disabled={props.disableWhen()}>
        <option value="-1" selected>{props.name}</option>
        {props.renderOptions()}
      </select>
    </div>
  </div>
);

SelectField.propTypes = {
  rowClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  renderOptions: PropTypes.func.isRequired,
  disableWhen: PropTypes.func.isRequired,
};

export default SelectField;

