import React from 'react';
import { CircularProgress } from 'material-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { momentObj } from 'react-moment-proptypes';
import { routeTo } from 'redux-router-kit';
import { loadIcoStats } from '../actions/loadIcoStats';
import { Countdown } from '../components/Countdown';
import ProgressBar from '../components/ProgressBar';
import './DuringIco.css';
import config from '../config';
import { selectEndDate } from '../reducers/icoParameters';
import TokenChart from '../components/TokenChart';


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

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { icoState, finishDate, onCommitClick, minCap, maxCap } = this.props;

    if (icoState.loading) {
      return (
        <div className="ico-header during-ico">
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="ico-header during-ico">
        <h3 className="title">Commit funds to invest in the future</h3>
        <h6 className="normal-text">Total commited</h6>
        <h3>{ icoState.raised.toFixed(3) } ETH</h3>
        <ProgressBar raised={icoState.raised} minCap={minCap} maxCap={maxCap} />
        <h6 className="normal-text">Finishes in:</h6>
        <Countdown finishDate={finishDate} />

        <div className="money-container">
          <div className="clearfix">
            <div className="neumark">
              <h6 className="normal-text">How much Neumarks has been issued</h6>
              <h3>{ icoState.neuMarkAmount } <span className="light-text">NEU</span></h3>
            </div>
            <div className="investors">
              <h6 className="normal-text">How many investors</h6>
              <h3>{ icoState.investorNumber }</h3>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="active" onClick={onCommitClick}>Commit</button>
          <button>etherscan.io</button>
        </div>
        <TokenChart id={1} />
      </div>
    );
  }
}

DuringIco.propTypes = {
  loadIcoStats: PropTypes.func.isRequired,
  finishDate: momentObj.isRequired,
  minCap: PropTypes.number,
  maxCap: PropTypes.number,
  icoState: PropTypes.shape({
    raised: PropTypes.number,
    investorNumber: PropTypes.number,
    neuMarkAmount: PropTypes.number,
    neuMarkToEtherRatio: PropTypes.number,
    loading: PropTypes.bool,
  }).isRequired,
  onCommitClick: PropTypes.func.isRequired,
};

DuringIco.defaultProps = {
  minCap: null,
  maxCap: null,
};

function mapStateToProps(state) {
  return {
    icoState: state.icoState,
    minCap: state.icoParameters.minCap,
    maxCap: state.icoParameters.maxCap,
    finishDate: selectEndDate(state.icoParameters),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoStats: () => dispatch(loadIcoStats),
    onCommitClick: () => dispatch(routeTo('/commit')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DuringIco);
