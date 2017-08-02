import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  const style = {
    width: `${percentage}%`,
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-background">
        <dv className="progress-bar-line" style={style}>
          <p className="percentage">{ percentage }%</p>
        </dv>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default ProgressBar;
