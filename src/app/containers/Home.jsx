import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';
import React from 'react';

import RowEvent from '../components/RowEvent.jsx';
import eventActions from '../actions/eventActions';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.events.length === 0) {
      this.props.lookingEvents(0);
    }
  }

  nextEvents() {
    this.props.lookingEvents(this.props.currentPage);
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
    return (
      <InfiniteScroll
        dataLength={this.props.events.length}
        next={() => this.nextEvents()}
        hasMore={this.props.hasMoreEvents}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>So far we do not have more events</b>
          </p>
        }
        style={{ overflow: false }}
      >
        {this.splitEventsOn(4).map(row => <RowEvent events={row} />)}
      </InfiniteScroll>);
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
  currentPage: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    thumb: PropTypes.string,
  })).isRequired,
  hasMoreEvents: PropTypes.bool.isRequired,
  lookingEvents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  events: state.eventReducer.events,
  currentPage: state.eventReducer.currentPage,
  hasMoreEvents: state.eventReducer.hasMoreEvents,
});

const mapDispatchToProps = dispatch => ({
  lookingEvents: page => dispatch(eventActions.lookingEvents(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
