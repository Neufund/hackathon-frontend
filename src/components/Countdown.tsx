import * as React from "react";
import * as moment from "moment";
import * as zeroFill from "zero-fill";
import "./Countdown.css";

const numberFormatter = zeroFill(2);

const SECOND = 1000;

interface CountdownComponentProps {
  duration: moment.Duration;
}

// @todo remove moment prop checkers
export const CountdownComponent = ({ duration }: CountdownComponentProps) =>
  <div>
    <span className="countdown-label">d</span>
    <span className="countdown-value">
      {numberFormatter(duration.days())}
    </span>
    <span className="countdown-label">h</span>
    <span className="countdown-value">
      {numberFormatter(duration.hours())}
    </span>
    <span className="countdown-label">m</span>
    <span className="countdown-value">
      {numberFormatter(duration.minutes())}
    </span>
    <span className="countdown-label">s</span>
    <span className="countdown-value">
      {numberFormatter(duration.seconds())}
    </span>
  </div>;

interface CountdownProps {
  finishDate: moment.Moment;
}

interface CountdownState {
  duration: moment.Duration;
  timerID: number;
}

export class Countdown extends React.Component<CountdownProps, CountdownState> {
  constructor(props: CountdownProps) {
    super(props);

    this.state = {
      duration: this.calculateDuration(),
      timerID: null,
    };
  }

  componentDidMount() {
    const timerID = window.setInterval(() => {
      this.setState({
        ...this.state,
        duration: this.calculateDuration(),
      });
    }, SECOND);

    this.setState({
      ...this.state,
      timerID: timerID,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
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
