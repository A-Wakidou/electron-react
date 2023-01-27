import React from 'react';
declare type selectItems = {
    label: string | number;
    value?: string | number;
};
declare type SelectComponentProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label?: string;
    data?: selectItems[];
    onSelected?: (value: string | number | undefined) => void;
};
declare const SelectComponent: React.FC<SelectComponentProps>;
export default SelectComponent;
