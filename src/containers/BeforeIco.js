import React from 'react';
import { momentObj } from 'react-moment-proptypes';
import { connect } from 'react-redux';

import { selectStartDate } from '../reducers/icoParameters';
import { Countdown } from '../components/Countdown';

export const BeforeIcoComponent = ({ startDate }) => (
  <div>
    <h1>BEFORE ICO</h1>

    <Countdown finishDate={startDate} />
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
