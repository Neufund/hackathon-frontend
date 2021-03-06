import * as React from "react";
import Chart from "../tokenChart";
import "./TokenChart.scss";

interface TokenChartProps {
  id: number;
}

class TokenChart extends React.Component<TokenChartProps> {
  componentDidMount() {
    const config = {
      name: `tokenChartCanvas${this.props.id}`,
      width: 600,
      height: 200,
      radius: 10,
      limit: 10000,
      initX: 100,
      circleBackground: "#fff000",
      hoverBackground: "orange",
    };
    const chart = new (Chart as any)(config);
    chart.drawChart();
  }

  render() {
    const { id } = this.props;
    return (
      <div className="token-chart">
        <canvas width="600" height="200" id={`tokenChartCanvas${id}`} />
      </div>
    );
  }
}

export default TokenChart;
