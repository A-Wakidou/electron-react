import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputComponent } from "../components";
import "../scss/Input.css";
declare const _default: import("@storybook/csf").ComponentAnnotations<import("@storybook/react").ReactFramework, React.PropsWithChildren<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string | undefined;
}>>;
export default _default;
export declare const CheckboxComponentView: ComponentStory<typeof InputComponent>;
