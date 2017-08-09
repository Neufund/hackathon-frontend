import * as React from 'react';
import * as PropTypes from 'prop-types';

import './Jumbotron.css';

const Jumbotron = ({ children }) => (
  <div className="neufund-jumbotron">
    { children }
  </div>
);

Jumbotron.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Jumbotron;
