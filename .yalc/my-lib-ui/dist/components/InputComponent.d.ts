import React from "react";
declare type InputComponentProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
};
declare const InputComponent: React.FC<InputComponentProps>;
export default InputComponent;
