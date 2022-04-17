import { default as Template } from "./Module";

import { default as Page } from "./Page";

import Styles from "./SCSS/Index.module.scss";

/***
 *
 * @param timeout {Number} Timeout Spinner Duration
 * @param description {String} Spinner Contextual Overlay
 * @return {JSX.Element}
 * @constructor
 */
const Component = ({ timeout, description }) => {
    return (
        <Template Page={ Page } description={ description } timeout={ timeout } className={ Styles.component }/>
    );
};

export default Component;