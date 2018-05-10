import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import eventActions from '../actions/eventActions';

class Home extends React.Component {
  componentDidMount() {
    this.props.lookingEvents();
  }

  splitEvents() {
    const numberOfRows = Math.ceil((this.props.events.length || 0) / 4);
    const splitedEvents = [];
    for (let i = 0; i < numberOfRows; i += 1) {
      splitedEvents.push(this.props.events.slice(i * 4, 4 * (i + 1)));
    }
    return splitedEvents;
  }
  /* eslint-disable class-methods-use-this */
  renderEvent(event) {
    return (
      <div className="col-sm-3 event-list">
        <a href="event.html">
          <img src={event.thumb} alt={event.name} width="100%" />
        </a>
      </div>
    );
  }

  renderRow(rowOfEvents) {
    return (
      <div className="row">
        { rowOfEvents.map(event => (
          <div className="col-sm-3 event-list">
            <a href="event.html">
              <img src={event.thumb} alt={event.name} width="100%" />
            </a>
          </div>
          )) }
      </div>
    );
  }

  render() {
    return (
      <div>
        <h4>Select an event</h4>
        <hr />
        { this.splitEvents().map(this.renderRow) }
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
