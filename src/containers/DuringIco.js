import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadIcoStats } from '../actions/loadIcoStats';
import { Countdown } from '../components/Countdown';
import './DuringIco.css';
import config from '../config';
import { selectStartDate } from '../reducers/icoParameters';

class DuringIco extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }

  componentDidMount() {
    this.props.loadIcoStats();
    const interval = setInterval(() => {
      this.props.loadIcoStats();
    }, config.timeToCheckIcoStatsInMilliSeconds);

    /*eslint-disable */
    this.setState({
        interval,
      });
    /*eslint-enable */
  }

  render() {
    const { icoState, startDate } = this.props;
    return (
      <div className="ico-header">
        <h3>Commit funds to invest in the future</h3>
        <h6>Total commited</h6>
        <h3>{ icoState.raised } ETH</h3>
        <p>Bar</p>
        <h6>Finishes in:</h6>
        <Countdown finishDate={startDate} />

        <div className="money-container">
          <div className="neumark">
            <h6>How much Neumarks has been issued</h6>
            <h3>{ icoState.neuMarkAmount } <span className="light-text">NEU</span></h3>
          </div>
          <div className="investors">
            <h6>How many investors</h6>
            <h3>{ icoState.investorNumber }</h3>
          </div>
        </div>
      </div>
    );
  }
}

DuringIco.propTypes = {
  loadIcoStats: PropTypes.func.isRequired,
  startDate: PropTypes.isRequired,
  icoState: PropTypes.shape({
    raised: PropTypes.number,
    investorNumber: PropTypes.number,
    neuMarkAmount: PropTypes.number,
    neuMarkToEtherRatio: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    icoState: state.icoState,
    startDate: selectStartDate(state.icoParameters),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoStats: () => dispatch(loadIcoStats),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DuringIco);
