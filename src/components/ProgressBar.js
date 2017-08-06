import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ raised, maxCap, minCap }) => {
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

ProgressBar.propTypes = {
  raised: PropTypes.number.isRequired,
  maxCap: PropTypes.number.isRequired,
  minCap: PropTypes.number.isRequired,
};
export default ProgressBar;
