import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from './TopHeader';
import TokenChart from './TokenChart';

const App = ({ children }) => (
  <div>
    <TopHeader />
    <TokenChart id={3} />
    { children }
    <TokenChart id={4} />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;

