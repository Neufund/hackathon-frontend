import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import AddressForm from './AddressForm';
import './MyStats.scss';

const MyStatsComponent = ({ address, loading, neumarkAmmount }) => (
  <div className="my-stats">
    {address ?
      <h3>Hello, you provided us with following eth address: {address}</h3>
      :
      <div>
        <h3>
          We werent able to automatically obtain your ETH address. If you provide us one we can show
          your current commitment.
        </h3>
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

export default connect(MapStateToProps)(MyStatsComponent);
