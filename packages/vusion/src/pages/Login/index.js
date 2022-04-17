import {
    Grid, Column
} from "@carbon/react";

import { default as Page } from "./Page";

const Component = (props) => {
    const {
        Authorizer,
        ... Properties
    } = props;

    console.debug("[Debug] Unassigned Properties", Properties);

    return (
        <Grid>
            <Column lg={16} md={8} sm={4}>
                <Page Authorizer={Authorizer}/>
            </Column>
        </Grid>
    );
};

export default Component;