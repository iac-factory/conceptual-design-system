import { Suspense } from "react";

import Styles from "./index.module.scss";

import {
    Grid, Column
} from "@carbon/react";

import { NPM } from "./MDX";

const Component = () => {
    return (
        <Grid className={ Styles.grid }>
            <Column lg={ 16 }>
                <div className={ Styles.page }>
                    <NPM.Configuration/>
                </div>
            </Column>
        </Grid>
    );
};

export default Component;