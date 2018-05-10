import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header.jsx';

export default class Root extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
};
