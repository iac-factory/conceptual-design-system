import React, {
    useEffect, useState
} from "react";

import {
    InlineLoading
} from "@carbon/react";

/***
 *
 * @param description {String} Target Component Description
 *
 * @return {JSX.Element}
 * @constructor
 */

export const Loader = ({ description }) => (
    <InlineLoading
        description={ description }
        iconDescription={ "Loading Indicator" }
    />
);

/***
 *
 * @param children {JSX.Element}
 * @param description {String}
 * @param timeout {Number}
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

const Component = ({ children, description, timeout } = { description: "", timeout: 1500 }) => {
    const [ awaiting, setAwaiting ] = useState(null);

    const $ = () => children;

    useEffect(() => {
        let $ = setTimeout(() => setAwaiting(false), timeout);

        return () => {
            clearTimeout($);
        };

        /***
         * useEffect will run only once with an empty [];
         * if there are value(s) associated inside the dependencies
         * array, then clearTimeout will run every time any attribute
         * or value changes.
         */
    }, [ awaiting ]);

    if ( timeout === null ) return (<Loader description={ " " }/>);

    return (awaiting === false) ? (<$/>) : (<Loader description={ description }/>);
};

export default Component;

/***
 *
 * Authorization Lazy Page Loader
 *
 * @param children {JSX.Element}
 * @param description {String}
 * @param timeout {Number}
 *
 * @returns {JSX.Element}
 *
 * @constructor
 *
 */

export const Validator = ({ children, description, timeout }) => {
    const [ awaiting, setAwaiting ] = useState(null);

    const $ = () => children;

    useEffect(() => {
        let $ = setTimeout(() => setAwaiting(false), timeout);

        return () => clearTimeout($);

        /***
         * useEffect will run only once with an empty [];
         * if there are value(s) associated inside the dependencies
         * array, then clearTimeout will run every time any attribute
         * or value changes.
         */
    }, [ awaiting ]);

    if ( timeout === null ) return (<Loader description={ " " }/>);

    return (awaiting === false) ? (<$/>) : (<Loader description={ description }/>);
};