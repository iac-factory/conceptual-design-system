import Styles from "./index.module.scss";

import { Suspense } from "react";

const Content = ({ children }) => {
    return (
        <Suspense fallback={null}>
            <div className={ Styles.content }>
                {
                    children
                }
            </div>
        </Suspense>
    );
};

export { Content };

export * from "./npm";