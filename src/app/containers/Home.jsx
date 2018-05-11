import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RowEvent from '../components/RowEvent.jsx';
import eventActions from '../actions/eventActions';

class Home extends React.Component {
  componentDidMount() {
    this.props.lookingEvents();
  }

  splitEventsOn(number) {
    const numberOfRows = Math.ceil((this.props.events.length || 0) / number);
    const splitedEvents = [];
    for (let i = 0; i < numberOfRows; i += 1) {
      splitedEvents.push(this.props.events.slice(i * number, number * (i + 1)));
    }
    return splitedEvents;
  }

  renderRows() {
    return this.splitEventsOn(4).map(row => <RowEvent events={row} />);
  }

  render() {
    return (
      <div>
        <h4>Select an event</h4>
        <hr />
        {this.renderRows()}
      </div>
    );
  }
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  lookingEvents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  events: state.eventReducer.events,
});

const mapDispatchToProps = dispatch => ({
  lookingEvents: () => dispatch(eventActions.lookingEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
