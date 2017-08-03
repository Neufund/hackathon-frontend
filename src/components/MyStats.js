import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import AddressForm from './AddressForm';
import './MyStats.scss';
import getAccount from '../web3/getAccount';
import { setUserAddress } from '../actions/myStatsActions';

const MyStatsComponent = ({ address, loading, neumarkAmmount, onRescanTouchTap }) => (
  <div className="my-stats">
    {address ?
      <h3>Hello, you provided us with following eth address: {address}</h3>
      :
      <div>
        <h3>We weren&pos;t able to automatically obtain your ETH address.</h3>
        <p>You can unlock your metamask, attach ledger etc and we can try again</p>
        <RaisedButton
          label="Rescan"
          onTouchTap={onRescanTouchTap}
        />
        <p>Or you can pass it into following field</p>
        <AddressForm />
      </div>
    }
    {loading &&
      <div className="spinner">
        <CircularProgress />
        <div className="caption">Obtaining data from smartcontract!</div>
      </div>}
    {neumarkAmmount &&
    <p className="neumarks">Currently you own <b>{neumarkAmmount}</b> NeuMarks</p>}
  </div>);

MyStatsComponent.propTypes = {
  address: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  neumarkAmmount: PropTypes.number,
  onRescanTouchTap: PropTypes.func.isRequired,
};

MyStatsComponent.defaultProps = {
  address: null,
  neumarkAmmount: null,
};

const MapStateToProps = state => ({
  address: state.myStats.address,
  loading: state.myStats.loading,
  neumarkAmmount: state.myStats.neumarkAmmount,
});

const MapDispatchToProps = dispatch => ({
  onRescanTouchTap: () => {
    getAccount().then((account) => {
      if (account !== undefined) {
        // eslint-disable-next-line no-console
        console.log(`got account from web3: ${account} `);
        dispatch(setUserAddress(account, true));
      } else {
        // eslint-disable-next-line no-console
        console.log('didn\'t get any account from web3');
      }
    });
  },
});

export default connect(MapStateToProps, MapDispatchToProps)(MyStatsComponent);
