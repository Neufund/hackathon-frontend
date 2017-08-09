import * as React from 'react';
import * as PropTypes from 'prop-types';
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

