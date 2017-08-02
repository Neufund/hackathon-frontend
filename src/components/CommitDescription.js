import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CommitDescription.scss';

const CommitDescriptionComponent = ({ address, code }) => (
  <div className="commit-description">
    <p>
      We didn&apos;t detect any web3 library (Metamast, Mist, Parity) in your system so we can only
      give you instruction how you can make transfer.
    </p>
    <p>You will need to send transaction to following address: <b>{address}</b></p>
    <p>You have to include following string in your transaction: <b>{code}</b></p>
  </div>);

CommitDescriptionComponent.propTypes = {
  address: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

// eslint-disable-next-line no-unused-vars
const MapStateToProps = state => ({
  address: '0x223479080po0o98',
  code: 'asdasdasdadad',
});

export default connect(MapStateToProps)(CommitDescriptionComponent);
