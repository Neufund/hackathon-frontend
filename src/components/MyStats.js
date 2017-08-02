import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import AddressForm from './AddressForm';


const MyStatsComponent = ({ address, loading, neumarkAmmount }) => (<div>
  {address ?
    <p>Your eth address: {address}</p>
    :
    <AddressForm />
  }
  {loading && <div>
    <CircularProgress /> Obtaining data from smartcontract!
  </div>}
  {neumarkAmmount && <p>Currently you own {neumarkAmmount} NeuMarks</p>}
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
