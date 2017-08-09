import * as React from "react";
import { connect } from "react-redux";
import { Moment } from "moment";

import { selectStartDate } from "../reducers/icoParameters";
import { Countdown } from "../components/Countdown";

interface BeforeIcoComponentProps {
  startDate: Moment;
}

export const BeforeIcoComponent: React.SFC<BeforeIcoComponentProps> = ({ startDate }) =>
  <div>
    <h1 className="center before-ico-header">Commit funds to invest in the future</h1>

    <p className="element-center center before-ico-para">
      Commit ETH to get first hand opportunity to invest in startups
    </p>

    <div className="center">
      <span className="gray-caption">Starts in</span>
      <Countdown finishDate={startDate} />
    </div>
  </div>;

export function mapStateToProps(state: any) {
  // @todo state
  return {
    startDate: selectStartDate(state.icoParameters),
  };
}

export default connect(mapStateToProps)(BeforeIcoComponent);
