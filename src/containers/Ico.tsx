import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CircularProgress from 'material-ui/CircularProgress';

import './Ico.css';
import { loadIcoParams } from '../actions/loadIcoParams';
import BeforeIco from '../containers/BeforeIco';
import DuringIco from './DuringIco';
import AfterIco from './AfterIco';
import { ICO_PHASES } from '../actions/constants';
import { selectIcoPhase, selectLoadingState } from '../reducers/icoParameters';
import Jumbotron from '../components/Jumbotron';
import MyStats from '../components/MyStats';

enum IcoPhase {
    BEFORE_ICO = "BEFORE_ICO",
    DURING_ICO = "DURING_ICO",
    AFTER_ICO = "AFTER_ICO",
    UNKNOWN = "UNKNOWN",
};

interface IcoProps {
  loadIcoParams: any; // @todo fix
  icoPhase: IcoPhase;
  isLoading: boolean;
}

export class IcoComponent extends React.Component<IcoProps> {
  componentDidMount() {
    this.props.loadIcoParams();
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
        throw new Error('Unsupported ICO Phase');
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

function mapStateToProps(state: any) { // @todo @state
  return {
    icoPhase: selectIcoPhase(state.icoParameters),
    isLoading: selectLoadingState(state.icoParameters),
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {  // @todo state
  return {
    loadIcoParams: () => dispatch(loadIcoParams),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IcoComponent);
