declare module "redux-form-material-ui" {
    import { ComponentType } from "react";

    export interface TextFieldProps {
        floatingLabelText: String;
    }

    export const TextField: ComponentType<TextFieldProps>;
}