import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../tokenChart';

class TokenChart extends React.Component {

  componentDidMount() {
    const config = {
      name: `tokenChartCanvas${this.props.id}`,
      width: 1200,
      height: 200,
      radius: 10,
      limit: 10000,
      initX: 100,
      circleBackground: '#fff000',
      hoverBackground: 'orange',
    };
    const chart = new Chart(config);
    chart.drawChart();
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
