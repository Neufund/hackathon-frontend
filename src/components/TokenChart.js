import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../tokenChart';

class TokenChart extends React.Component {
  constructor(...props) {
    super(...props);
    console.log(props);
  }

  componentDidMount() {
    const config = {
      name: `tokenChartCanvas${this.props.id}`,
      width: 1200,
      height: 200,
      circleRadius: 10,
      limit: 10000,
      circleBackground: '#fff000',
      hoverBackground: '#000a6d',
    };
    const chart = new Chart(config);
    chart.drawChart();
    chart.circle(100, config.circleBackground);
  }

  render() {
    const { id } = this.props;
    return (<canvas width="600" height="200" id={`tokenChartCanvas${id}`} />
    );
  }
}
TokenChart.propTypes = {
  id: PropTypes.number.isRequired,
};
export default TokenChart;
