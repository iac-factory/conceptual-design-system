import {
    Grid, Column, Row
} from "@carbon/react";

import "./SCSS/Grid.scss";

import React from "react";
import Styles from "./SCSS/Index.module.scss";

// import { default as Search } from "./Search-Bar.js";

const Component = ({ Page, ... Properties }) => {
    return (
        <Grid { ... Properties } className={ "blog-grid" }>
            <Column lg={ 16 } md={ 8 } sm={ 4 }>
                <h1 className={ Styles.heading }>
                    Technology & Infrastructure
                </h1>
            </Column>

            <Column lg={ 16 }>
                <Page/>
            </Column>
        </Grid>
    );
};

export default Component;