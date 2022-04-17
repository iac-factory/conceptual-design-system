import Styles from "./index.module.scss";

import { Column } from "@carbon/react";
import { Grid } from "@carbon/react";

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