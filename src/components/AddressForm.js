import * as React from 'react';
import * as PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { setUserAddress } from '../actions/myStatsActions';

const AddressFormComponent = ({ handleSubmit, submit }) => (
  <form className="addressForm" onSubmit={handleSubmit}>
    <Field
      name="address"
      component={TextField}
      floatingLabelText="Your Address"
    />
    <RaisedButton
      label="Submit"
      onTouchTap={submit}
      style={{ marginLeft: '20px' }}
    />
  </form>);

AddressFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'addresform',
  onSubmit: (values, dispatch) => {
    dispatch(setUserAddress(values.address, false));
  },
})(AddressFormComponent);
