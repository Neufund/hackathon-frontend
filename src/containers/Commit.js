import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommitDescription from '../components/CommitDescription';
import CommitWeb3 from '../components/CommitWeb3';
import './Commit.scss';

const CommitComponent = ({ web3Present }) => (
  <div className="commit">
    <h1>Hello, Its great that you are interested in commiting in ICBM!</h1>
    {web3Present ?
      <CommitWeb3 />
      :
      <CommitDescription />
    }
  </div>);

CommitComponent.propTypes = {
  web3Present: PropTypes.bool.isRequired,
};

// eslint-disable-next-line no-unused-vars,arrow-body-style
const mapStateToProps = (state) => {
  return {
    web3Present: true,
  };
};

export default connect(mapStateToProps)(CommitComponent);
