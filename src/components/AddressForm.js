import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { setUserAddress } from '../actions/myStatsActions';

const AddressFormComponent = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="address"
      component="input"
      type="text"
      placeholder="Your Address"
    />
    <button type="submit">Submit</button>
  </form>);

AddressFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addresform',
  onSubmit: (values, dispatch) => {
    dispatch(setUserAddress(values.address));
  },
})(AddressFormComponent);
