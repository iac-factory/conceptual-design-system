import "./button.css";

import React from "react";

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/***
 * Primary UI component for user interaction
 * ---
 *
 * @param {boolean | undefined} primary
 * @param {"small" | "medium" | "large" | undefined} size
 * @param {string | undefined} backgroundColor
 * @param {string} label
 * @param {Pick<ButtonProps & {children?: React.ReactNode | undefined}, "onClick" | "children">} properties
 *
 * @returns {JSX.Element}
 *
 * @constructor
 */
export const Button: React.FC<ButtonProps> = ( {
    primary = false,
    size = "medium",
    backgroundColor,
    label,
    ... properties
} ) => {
    const attribution = {mode: "", size: ""};
    Object.assign(attribution.mode, primary ? "button-primary" : "button-secondary");
    Object.assign(attribution.size, [attribution.mode, attribution.size].join("-"));

    const classname = Object.values(attribution).join(".");

    console.log(classname);

    return (
        <button
            type="button"
            className={ classname }
            style={ { backgroundColor } }
            { ... properties }
        >
            { label }
        </button>
    );
};
