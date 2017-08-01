import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { connect } from 'react-redux';
import { loadIcoParams } from '../actions/loadIcoParams';
import { loadIcoStats } from '../actions/loadIcoStats';
import config from '../config';
import BeforeIco from '../components/BeforeIco';
import DuringIco from '../components/DuringIco';
import AfterIco from '../components/AfterIco';

const ICO_PHASE = {
  BEFORE_ICO: 'BEFORE_ICO',
  DURING_ICO: 'DURING_ICO',
  AFTER_ICO: 'AFTER_ICO',
};

export class AppComponent extends React.Component {
  componentDidMount() {
    this.props.loadIcoParams();

    setInterval(() => {
      this.props.loadIcoStats();
    }, config.timeToCheckIcoStatsInMilliSeconds);
  }

  render() {
    const { icoPhase, icoState } = this.props;

    switch (icoPhase) {
      case ICO_PHASE.BEFORE_ICO:
        return <BeforeIco />;
      case ICO_PHASE.DURING_ICO:
        return <DuringIco number={icoState.neuMarkAmount} />;
      case ICO_PHASE.AFTER_ICO:
        return <AfterIco />;
      default:
        return invariant(false, 'Unsupported ICO Phase');
    }
  }
}

AppComponent.propTypes = {
  loadIcoParams: PropTypes.func.isRequired,
  loadIcoStats: PropTypes.func.isRequired,
  icoState: PropTypes.shape({
    neuMarkAmount: PropTypes.number,
  }).isRequired,
  icoPhase: PropTypes.oneOf(['BEFORE_ICO', 'DURING_ICO', 'AFTER_ICO']).isRequired,
};

function mapStateToProps(state) {
  return {
    icoPhase: 'DURING_ICO',
    icoState: state.icoState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoParams: () => dispatch(loadIcoParams),
    loadIcoStats: () => dispatch(loadIcoStats),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
