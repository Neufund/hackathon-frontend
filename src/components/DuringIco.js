import React from 'react';
import PropTypes from 'prop-types';
import CountUp from '../components/CountUp';

const DuringIco = ({ number }) => (
  <div>
    <h1>During ICO</h1>
    <CountUp number={number} />
  </div>
);

DuringIco.propTypes = {
  number: PropTypes.number.isRequired,
};

export default DuringIco;
