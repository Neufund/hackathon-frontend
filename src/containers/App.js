import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { connect } from 'react-redux';
import { loadIcoParams } from '../actions/loadIcoParams';

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
  }

  render() {
    const { icoPhase } = this.props;

    switch (icoPhase) {
      case ICO_PHASE.BEFORE_ICO:
        return <BeforeIco />;
      case ICO_PHASE.DURING_ICO:
        return <DuringIco />;
      case ICO_PHASE.AFTER_ICO:
        return <AfterIco />;
      default:
        return invariant(false, 'Unsupported ICO Phase');
    }
  }
}

AppComponent.propTypes = {
  loadIcoParams: PropTypes.func.isRequired,
  icoPhase: PropTypes.oneOf(['BEFORE_ICO', 'DURING_ICO', 'AFTER_ICO']).isRequired,
};

function mapStateToProps() {
  return {
    icoPhase: 'DURING_ICO',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadIcoParams: () => dispatch(loadIcoParams),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
