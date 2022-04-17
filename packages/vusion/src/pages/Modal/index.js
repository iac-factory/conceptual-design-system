import { default as Template } from "..";

import { default as Page } from "./Page.js";

import Styles from "./SCSS/Index.module.scss";

const Component = ({ timeout, description }) => {
    return (
        <Template Page={ Page } description={ description } timeout={ timeout } className={ Styles.component }/>
    );
};

export default Component;