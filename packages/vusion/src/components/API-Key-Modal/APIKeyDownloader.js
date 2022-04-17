import React, { useEffect, useState } from "react";
import { default as settings } from "./../../settings/Configuration.js";

const componentName = "APIKeyDownloader";

export const APIKeyDownloader = ({
                                     apiKey,
                                     body,
                                     fileName,
                                     fileType,
                                     linkText
                                 }) => {
    const [ linkProps, setLinkProps ] = useState({});

    useEffect(() => {
        const generateLinkProps = async () => {
            const data = fileType === "txt" ? apiKey : JSON.stringify({ apiKey });
            const blob = new Blob([ data ], {
                type: fileType === "txt" ? "text/plain" : "application/json"
            });
            const href = await URL.createObjectURL(blob);
            const download = `${ fileName || "apikey" }.${ fileType }`;
            const props = {
                href,
                download
            };
            setLinkProps(props);
        };

        generateLinkProps();
    }, [ apiKey, fileName, fileType ]);

    return (
        <div className={ `${ settings.prefix }-apikey-modal__download-container` }>
            <p className={ `${ settings.prefix }-apikey-modal__messaging-text` }>
                { body }{ " " }
                <a
                    { ... linkProps }
                    className={ `${ settings.prefix }-apikey-modal__download-link` }
                >
                    { linkText }
                </a>
            </p>
        </div>
    );
};