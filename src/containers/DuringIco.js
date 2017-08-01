import React from 'react';
import PropTypes from 'prop-types';
import CountUp from '../components/CountUp';
import TopHeader from '../components/TopHeader';
import './DuringIco.css';

const DuringIco = ({ number }) => (
  <div className="ico-header">
    <TopHeader />
    <h3>ICO Stats</h3>
    <p>Current Neumark amount.</p>
    <CountUp number={number} />
  </div>
);

DuringIco.propTypes = {
  number: PropTypes.number.isRequired,
};

export default DuringIco;
