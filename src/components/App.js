import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from './TopHeader';

const App = ({ children }) => (
  <div>
    <TopHeader />
    { children }
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;

