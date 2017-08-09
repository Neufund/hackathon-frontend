import * as React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  raised: number;
  maxCap: number;
  minCap: number;
}

const ProgressBar = ({ raised, maxCap, minCap }: ProgressBarProps) => {
  const raisedPercentage = (raised / maxCap) * 100;
  const minCapPercentage = (minCap / maxCap) * 100;

  const raisedWidth = {
    width: `${raisedPercentage}%`,
  };

  const minCapWidth = {
    width: `${minCapPercentage}%`,
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-background">
        <div className="progress-bar-line min-cap-progress-line" style={minCapWidth}>
          <p className="max-cap">{ maxCap } ETH</p>
        </div>
        <div className="progress-bar-line" style={raisedWidth} />
      </div>
    </div>
  );
};

export default ProgressBar;
