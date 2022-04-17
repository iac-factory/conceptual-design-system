import { lazy } from "react";

import { Content } from "..";

const Configuration = () => {
    const Component = lazy(() => import("./configuration-object"));
    return (
        <Content children={(<Component/>)}/>
    )
};

const NPM = {
    Configuration
};

export { NPM };

export default NPM;