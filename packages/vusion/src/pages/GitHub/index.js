import Styles from "./SCSS/Index.module.scss";

import {
    Grid, Column
} from "@carbon/react";

import React, {
    Suspense, lazy as Import
} from "react";

import { default as Loader } from "./../../components/Loader";

const Component = (props) => {
    const {
        timeout,
        description,
        ... Properties
    } = props;

    console.debug("[Debug] Unassigned Properties", Properties);

    const Page = Import(() => import("./Page"));

    return (
        <Grid className={ Styles.component }>
            <Column lg={ 16 } md={ 8 } sm={ 4 }>
                <Suspense fallback={ (<Loader description={ description } timeout={ timeout }/>) }>
                    <Loader description={ description } timeout={ timeout }>
                        <Page/>
                    </Loader>
                </Suspense>
            </Column>
        </Grid>
    );
};

export default Component;