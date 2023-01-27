import React from "react";
import { ComponentStory } from "@storybook/react";
import { SelectComponent } from "../components";
import "../index.css";
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, React.PropsWithChildren<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string | undefined;
    data?: {
        label: React.ReactText;
        value?: string | number | undefined;
    }[] | undefined;
    onSelected?: ((value: string | number | undefined) => void) | undefined;
}>>;
export default _default;
export declare const CheckboxComponentView: ComponentStory<typeof SelectComponent>;
