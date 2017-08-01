import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { connect } from 'react-redux';

import { loadIcoParams } from '../actions/loadIcoParams';
import BeforeIco from '../containers/BeforeIco';
import DuringIco from './DuringIco';
import AfterIco from '../components/AfterIco';
import { ICO_PHASES } from '../actions/constants';
import { selectIcoPhase, selectLoadingState } from '../reducers/icoParameters';

export class AppComponent extends React.Component {
  componentDidMount() {
    this.props.loadIcoParams();
  }

  render() {
    const { icoPhase, isLoading } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    switch (icoPhase) {
      case ICO_PHASES.BEFORE_ICO:
        return <BeforeIco />;
      case ICO_PHASES.DURING_ICO:
        return <DuringIco />;
      case ICO_PHASES.AFTER_ICO:
        return <AfterIco />;
      default:
        return invariant(false, 'Unsupported ICO Phase');
    }
  }
}

AppComponent.propTypes = {
  loadIcoParams: PropTypes.func.isRequired,
  icoPhase: PropTypes.oneOf(['BEFORE_ICO', 'DURING_ICO', 'AFTER_ICO', 'UNKNOWN']).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    icoPhase: selectIcoPhase(state.icoParameters),
    isLoading: selectLoadingState(state.icoParameters),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoParams: () => dispatch(loadIcoParams),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
