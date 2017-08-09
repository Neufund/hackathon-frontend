import * as React from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { TextField as MaterialTextField, TextFieldProps as MaterialTextFieldProps } from "redux-form-material-ui";
import RaisedButton from "material-ui/RaisedButton";
import CircularProgress from "material-ui/CircularProgress";
import { commitETH } from "../actions/commitActions";
import "./CommitWeb3.scss";

interface Commit {
  error: any;
  commiting: boolean;
  transactionSubmitted: boolean;
}

interface CommitWeb3ComponentProps {
  userAddress: string;
  handleSubmit: () => {};
  commit: Commit;
}

const TextField = Field as { new (): Field<MaterialTextFieldProps> };

const CommitWeb3Component = ({ userAddress, handleSubmit, commit }: CommitWeb3ComponentProps) => {
  if (commit.commiting) {
    return (
      <div>
        <CircularProgress />
        {commit.transactionSubmitted && <p>Waiting for transaction to be mined</p>}
      </div>
    );
  }

  return (
    <div>
      {commit.error &&
        <div className="alert alert-danger">
          <strong>Error!</strong> Something went wrong while sending transaction :(
        </div>}
      <p>We detected web3 in your system that means you can perform commitment directly from our page.</p>
      <p>
        Your address: {userAddress}
      </p>
      <form className="addressForm" onSubmit={handleSubmit}>
        <TextField name="amount" component={MaterialTextField} floatingLabelText="How much ETH you want to commit" />
        <RaisedButton label="Send" onTouchTap={handleSubmit} style={{ marginLeft: "20px" }} />
      </form>
    </div>
  );
};

interface FormInterface {
  amount: number;
}

const CommitWeb3Form = reduxForm<FormInterface, CommitWeb3ComponentProps>({
  form: "commitform",
  onSubmit: (values, dispatch, props) => {
    dispatch(commitETH(values.amount, props.userAddress));
  },
})(CommitWeb3Component);

const mapStateToProps = (state: any) => ({
  //@todo fix state
  userAddress: state.myStats.address,
  commit: state.commit,
});

export default connect(mapStateToProps)(CommitWeb3Form);
