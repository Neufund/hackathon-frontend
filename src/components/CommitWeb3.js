import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { commitETH } from '../actions/commitActions';
import './CommitWeb3.scss';

const CommitWeb3Component = ({ userAddress, handleSubmit, submit, commit }) => {
  if (commit.commiting) {
    return (
      <div>
        <CircularProgress />
        { commit.transactionSubmitted && <p>Waiting for transaction to be mined</p> }
      </div>
    );
  }

  return (
    <div>
      { commit.error &&
        <div className="alert alert-danger">
          <strong>Error!</strong> Something went wrong while sending transaction :(
        </div>
      }
      <p>
        We detected web3 in your system that means
        you can perform commitment directly from our page.
      </p>
      <p>
        Your address: {userAddress}
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
};

CommitWeb3Component.propTypes = {
  userAddress: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  commit: PropTypes.shape({
    error: PropTypes.shape({}),
    commiting: PropTypes.bool,
    transactionSubmitted: PropTypes.bool,
  }).isRequired,
};

const CommitWeb3Form = reduxForm({
  form: 'commitform',
  onSubmit: (values, dispatch, props) => {
    dispatch(commitETH(values.amount, props.userAddress));
  },
})(CommitWeb3Component);

const mapStateToProps = state => ({
  userAddress: state.myStats.address,
  commit: state.commit,
});

export default connect(mapStateToProps)(CommitWeb3Form);
