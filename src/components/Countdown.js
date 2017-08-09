import * as React from 'react';
import * as moment from 'moment';
import * as zeroFill from 'zero-fill';
import { momentDurationObj, momentObj } from 'react-moment-proptypes';
import './Countdown.css';

const numberFormatter = zeroFill(2);

const SECOND = 1000;

export const CountdownComponent = ({ duration }) => (
  <div>
    <span className="countdown-label">d</span>
    <span className="countdown-value">{numberFormatter(duration.days())}</span>
    <span className="countdown-label">h</span>
    <span className="countdown-value">{numberFormatter(duration.hours())}</span>
    <span className="countdown-label">m</span>
    <span className="countdown-value">{numberFormatter(duration.minutes())}</span>
    <span className="countdown-label">s</span>
    <span className="countdown-value">{numberFormatter(duration.seconds())}</span>
  </div>
);

CountdownComponent.propTypes = {
  duration: momentDurationObj.isRequired,
};

export class Countdown extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      duration: this.calculateDuration(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        // clearInterval(this.timerID); //@todo when to clean?
        this.setState({
          duration: this.calculateDuration(),
        });
      },
      SECOND
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // is it fine? we should use state here i guess
  }

  calculateDuration() {
    const finishDate = this.props.finishDate;
    const now = moment();

    return moment.duration(finishDate.diff(now));
  }

  render() {
    const { duration } = this.state;

    return <CountdownComponent duration={duration} />;
  }
}


Countdown.propTypes = {
  finishDate: momentObj.isRequired,
};
