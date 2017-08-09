import * as React from 'react';
import { momentObj } from 'react-moment-proptypes';
import { connect } from 'react-redux';

import { selectStartDate } from '../reducers/icoParameters';
import { Countdown } from '../components/Countdown';

export const BeforeIcoComponent = ({ startDate }) => (
  <div>
    <h1 className="center before-ico-header">Commit funds to invest in the future</h1>

    <p className="element-center center before-ico-para">
      Commit ETH to get first hand opportunity to invest in startups
    </p>

    <div className="center">
      <span className="gray-caption">Starts in</span>
      <Countdown finishDate={startDate} />
    </div>
  </div>
);

BeforeIcoComponent.propTypes = {
  startDate: momentObj.isRequired,
};

export function mapStateToProps(state) {
  return {
    startDate: selectStartDate(state.icoParameters),
  };
}


export default connect(mapStateToProps)(BeforeIcoComponent);
