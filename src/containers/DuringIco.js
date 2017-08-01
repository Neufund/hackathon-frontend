import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadIcoStats } from '../actions/loadIcoStats';
import CountUp from '../components/CountUp';
import TopHeader from '../components/TopHeader';
import './DuringIco.css';
import config from '../config';

class DuringIco extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      interval: null,
    };
  }

  componentDidMount() {
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
    const { icoState } = this.props;
    return (
      <div className="ico-header">
        <TopHeader />
        <h3>ICO Stats</h3>
        <p>Current Neumark amount.</p>
        <CountUp number={icoState.neuMarkAmount} />
      </div>
    );
  }
}

DuringIco.propTypes = {
  loadIcoStats: PropTypes.func.isRequired,
  icoState: PropTypes.shape({
    neuMarkAmount: PropTypes.number,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    icoState: state.icoState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoStats: () => dispatch(loadIcoStats),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DuringIco);
