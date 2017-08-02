import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { commitETH } from '../actions/commitActions';
import './CommitWeb3.scss';

const CommitWeb3Component = ({ handleSubmit, submit }) => (
  <div>
    <p>
      We detected web3 in your system that means you can perform commitment directly from our page.
    </p>
    <form className="addressForm" onSubmit={handleSubmit}>
      <Field
        name="amount"
        component={TextField}
        floatingLabelText="How much ETH you want to commit"
      />
      <RaisedButton
        label="Send"
        onTouchTap={submit}
        style={{ marginLeft: '20px' }}
      />
    </form>
  </div>
);

CommitWeb3Component.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

const CommitWeb3Form = reduxForm({
  form: 'commitform',
// eslint-disable-next-line no-unused-vars
  onSubmit: (values, dispatch) => {
    dispatch(commitETH(values.amount));
  },
})(CommitWeb3Component);

export default connect()(CommitWeb3Form);
