import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import './Ico.css';
import { loadIcoParams } from '../actions/loadIcoParams';
import { loadWeb3Settings } from '../actions/loadWeb3Settings';
import BeforeIco from '../containers/BeforeIco';
import DuringIco from './DuringIco';
import AfterIco from './AfterIco';
import { ICO_PHASES } from '../actions/constants';
import { selectIcoPhase, selectLoadingState } from '../reducers/icoParameters';
import Jumbotron from '../components/Jumbotron';
import MyStats from '../components/MyStats';

export class IcoComponent extends React.Component {
  componentDidMount() {
    this.props.loadIcoParams();
    this.props.loadWeb3Settings();
  }

  renderBody() {
    const { isLoading, icoPhase } = this.props;

    if (isLoading) {
      return <div><CircularProgress className="center-loading-spinner" /></div>;
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

  render() {
    const { icoPhase } = this.props;

    return (
      <div>
        <Jumbotron>
          {this.renderBody()}
        </Jumbotron>

        { (icoPhase === ICO_PHASES.DURING_ICO || icoPhase === ICO_PHASES.AFTER_ICO) && <MyStats />}
      </div>
    );
  }
}

IcoComponent.propTypes = {
  loadIcoParams: PropTypes.func.isRequired,
  loadWeb3Settings: PropTypes.func.isRequired,
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
    loadWeb3Settings: () => dispatch(loadWeb3Settings),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IcoComponent);
