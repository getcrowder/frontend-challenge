import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import purchaseActions from '../actions/purchaseActions.js';
import Field from '../components/Field.jsx';

class PurchaseEvent extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.event.id !== this.props.event.id) {
      this.props.clearPurchase();
    }
  }
  getDates() {
    return this.props.event.dates || [];
  }

  getQuantity() {
    return [...Array(this.props.rate.max).keys()];
  }

  renderDates() {
    return this.getDates().map(date => <option value={date.id}>{date.name} </option>);
  }

  renderSectors() {
    return this.props.sectors.map(sector => <option value={sector.id}>{sector.name} </option>);
  }

  renderRates() {
    return this.props.rates.map(rate => <option value={rate.id}>{rate.name} </option>);
  }

  renderQuantity() {
    return this.getQuantity().map(quantity => <option value={quantity}>{quantity} </option>);
  }

  render() {
    return (
      <div>
        <h5><strong>Buy Tickets</strong></h5>
        <div className="row">
          <Field
            rowClass="col-sm-3"
            name="date"
            onChange={(event) => {
              const selectedDate = this.getDates()
                .find(date => date.id === parseInt(event.target.value, 10));
              this.props.setDate(selectedDate);
            }}
            renderOptions={() => this.renderDates()}
            disableWhen={() => false}
          />
          <Field
            rowClass="col-sm-3"
            name="sector"
            onChange={(event) => {
              const selectedSector = this.props.sectors
                .find(sector => sector.id === parseInt(event.target.value, 10));
              this.props.setSector(selectedSector);
            }}
            renderOptions={() => this.renderSectors()}
            disableWhen={() => this.props.sectors.length === 0}
          />
          <Field
            rowClass="col-sm-2"
            name="rate"
            onChange={(event) => {
              const selectedRate = this.props.rates
                .find(rate => rate.id === parseInt(event.target.value, 10));
              this.props.setRate(selectedRate);
            }}
            renderOptions={() => this.renderRates()}
            disableWhen={() => this.props.rates.length === 0}
          />
          <Field
            rowClass="col-sm-2"
            name="quantity"
            onChange={event => this.props.setQuantity(event.target.value)}
            renderOptions={() => this.renderQuantity()}
            disableWhen={() => this.getQuantity().length === 0}
          />
          <div className="col-sm-2"> <a href="order.html" className="btn btn-primary btn-block">BUY</a> </div>
        </div>
      </div>
    );
  }
}

PurchaseEvent.propTypes = {
  event: PropTypes.objectOf(PropTypes.string).isRequired,
  sectors: PropTypes.arrayOf(PropTypes.object).isRequired,
  rate: PropTypes.objectOf(PropTypes.string).isRequired,
  rates: PropTypes.arrayOf(PropTypes.object).isRequired,
  setDate: PropTypes.func.isRequired,
  setSector: PropTypes.func.isRequired,
  setRate: PropTypes.func.isRequired,
  setQuantity: PropTypes.func.isRequired,
  clearPurchase: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  date: state.purchaseReducer.date,
  sector: state.purchaseReducer.sector,
  sectors: state.purchaseReducer.sectors,
  rate: state.purchaseReducer.rate,
  rates: state.purchaseReducer.rates,
});

const mapDispatchToProps = dispatch => ({
  setDate: (date) => {
    dispatch(purchaseActions.setDate(date));
    dispatch(purchaseActions.getSectors(date.id));
  },
  setSector: (sector) => {
    dispatch(purchaseActions.setSector(sector));
    dispatch(purchaseActions.getRates(sector.id));
  },
  setRate: rate => dispatch(purchaseActions.setRate(rate)),
  setQuantity: quantity => dispatch(purchaseActions.setQuantity(quantity)),
  clearPurchase: () => dispatch(purchaseActions.clearPurchase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseEvent);
