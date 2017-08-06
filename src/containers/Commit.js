import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommitDescription from '../components/CommitDescription';
import CommitWeb3 from '../components/CommitWeb3';
import './Commit.scss';

const CommitComponent = ({ weCanSendTransaction }) => (
  <div className="commit">
    <h1>Hello, Its great that you are interested in committing in our ICO!</h1>
    {weCanSendTransaction ?
      <CommitWeb3 />
      :
      <CommitDescription />
    }
  </div>);

CommitComponent.propTypes = {
  weCanSendTransaction: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  weCanSendTransaction: state.myStats.addressFromWeb3 === true,
});

export default connect(mapStateToProps)(CommitComponent);
