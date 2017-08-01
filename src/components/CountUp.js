import React from 'react';
import PropTypes from 'prop-types';

const CountUp = ({ number }) => (
  <div>
    <h2>{number}</h2>
  </div>
);

CountUp.propTypes = {
  number: PropTypes.number,
};

CountUp.defaultProps = {
  number: 0,
};

export default CountUp;
