import React, { Suspense, lazy as Split } from "react";

const Content = Split( () => import("./../../components/page") );

interface Properties {name?: string;}

import Static from "./index.mdx";

const Page = ( properties: Properties = { name: "Home" } ) => {
    const View = () => {
        return (
            <Static/>
        );
    };

    return (
        <Suspense fallback={ null }>
            <Content name={ properties.name } children={ ( <View/> ) }/>
        </Suspense>
    );
};

export { Page as Home };

export default { Page };
