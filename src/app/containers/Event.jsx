import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EventDescription from '../components/EventDescription.jsx';
import PurchaseEvent from '../containers/PurchaseEvent.jsx';
import RowEvent from '../components/RowEvent.jsx';

import eventActions from '../actions/eventActions';

class Event extends React.Component {
  componentDidMount() {
    this.props.getEvent(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.getEvent(nextProps.match.params.eventId);
    }
  }

  renderImage() {
    return (
      <img src={this.props.event.image} alt={this.props.event.name} width="100%" />
    );
  }

  render() {
    return (
      <div>
        <h4>{ this.props.event.name }</h4>
        <hr />
        { this.renderImage() }
        <hr />
        <PurchaseEvent event={this.props.event} />
        <hr />
        <EventDescription event={this.props.event} />
        <hr />
        <RowEvent events={this.props.event.similarEvents || []} />
      </div>
    );
  }
}

Event.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      eventId: PropTypes.number,
    }),
  }).isRequired,
  event: PropTypes.objectOf({
    image: PropTypes.string,
    name: PropTypes.string,
    similarEvents: PropTypes.arrayOf(PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string,
      thumb: PropTypes.string,
    })),
  }).isRequired,
  getEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  event: state.eventReducer.event,
});

const mapDispatchToProps = dispatch => ({
  getEvent: eventId => dispatch(eventActions.getEvent(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
