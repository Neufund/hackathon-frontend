import * as React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { momentObj } from 'react-moment-proptypes';
import { loadIcoStats } from '../actions/loadIcoStats';
import './DuringIco.css';
import config from '../config';
import { selectEndDate } from '../reducers/icoParameters';

class AfterIco extends React.Component {

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
    const { icoState, finishDate } = this.props;
    return (
      <div className="ico-header during-ico">
        <h3 className="title">Commit funds to invest in the future</h3>
        <h6 className="normal-text">Total commited</h6>
        <h3>{ icoState.raised } ETH</h3>
        <h6 className="normal-text">Finished in:</h6>
        <h3>{finishDate.utc().format('YYYY-MM-DD HH:mm')}</h3>
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
          <button>etherscan.io</button>
        </div>
      </div>
    );
  }
}

AfterIco.propTypes = {
  loadIcoStats: PropTypes.func.isRequired,
  finishDate: momentObj.isRequired,
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
    finishDate: selectEndDate(state.icoParameters),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoStats: () => dispatch(loadIcoStats),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AfterIco);
