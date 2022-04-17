import React from "react";

import classnames from "classnames";

import DOM from "dom-lib"

enum Type {
/*
 The default behavior of the button. Possible values are:
 submit: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a <form>, or if the attribute is an empty or invalid value.
 reset: The button resets all the controls to their initial values, like <input type="reset"> . (This behavior tends to annoy users.)
 button: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur
 */

    submit= "submit",
    reset = "reset",
    button = "button"
}

interface Properties {
    /*** This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute. */
    autofocus: boolean;

    /*** This attribute on a <button> is nonstandard and Firefox-specific. Unlike other browsers, Firefox persists the dynamic disabled state of a <button> across page loads. Setting autocomplete="off" on the button disables this feature; see bug 654072. */
    autocomplete: boolean

    /***
     * Prevents the user from interacting with the button: it cannot be pressed or focused.
     *
     * Firefox, unlike other browsers, persists the dynamic disabled state of a <button> across page loads. Use the autocomplete attribute to control this feature.
     */
    disalbed: boolean;

    /***
     * The <form> element to associate the button with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <button> is associated with its ancestor <form> element, if any.)
     *
     * This attribute lets you associate <button> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.
     */

    form: string;

    /*** Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button. */

    value: string;

    /** Show loading spinner, only new prop */
    loading: boolean;

    /** Disable the button will be auto disabled when loading */
    disabled: boolean

    /** Button label */
    children: React.ReactNode;

    /** click handler */
    onClick: Function;

    /***
     * @type {["primary", "secondary", "danger", "ghost", "danger--primary", "danger--ghost", "danger--tertiary", "tertiary", "icon-selection"]}
     */

    type: keyof typeof Type;

    /** display green border to denote a recommended button to select, to be used with kind: 'icon-selection' */
    recommended: boolean ;

    /** Specify if the button is an icon-only button */
    hasIconOnly: boolean;

    /** Toggle selected styling for buttons of kind=icon-selection */
    selected: Boolean;

    attributes: React.Attributes;

    classname: string;
}

const Button = ({ type = Type.button }: { type?: keyof typeof Type }) => {
    const [loading, setLoading] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const [click, setClick] = React.useState(false);

    return (
        <button type={type} onClick={(event) => {
            console.log("[Debug] Click-Event", event);
            setClick(true);
        }}>
            Title
        </button>
    )
};

export default Button;
