import * as React from "react";
import { reduxForm, Field, InjectedFormProps, GenericFieldHTMLAttributes } from "redux-form";
import { TextField as MaterialTextField, TextFieldProps as MaterialTextFieldProps } from "redux-form-material-ui";
import RaisedButton from "material-ui/RaisedButton";
import { setUserAddress } from "../actions/myStatsActions";

interface AddressFormProps {
  handleSubmit: any;
  submit: any;
}

interface FormData {
  address: String;
}

const TextField = Field as { new (): Field<MaterialTextFieldProps> };

const AddressFormComponent = ({ handleSubmit }: InjectedFormProps<FormData>) =>
  <form className="addressForm" onSubmit={handleSubmit}>
    <TextField name="address" component={MaterialTextField} floatingLabelText="Your Address" />
    <RaisedButton label="Submit" onTouchTap={handleSubmit} style={{ marginLeft: "20px" }} />
  </form>;

export default reduxForm<FormData>({
  form: "addresform",
  onSubmit: (values, dispatch) => {
    dispatch(setUserAddress(values.address, false));
  },
})(AddressFormComponent);
