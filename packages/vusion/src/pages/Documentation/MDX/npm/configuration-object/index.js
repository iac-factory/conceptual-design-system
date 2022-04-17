import Content from "./index.mdx";

import Highlighter from "react-syntax-highlighter";

const pastel = {
    "hljs": {
        "display": "block",
        "overflowX": "auto",
        "padding": "0.5em",
        "color": "#ABB2BF"
    },
    "hljs-comment": {
        "color": "#5C6370",
        "fontStyle": "italic"
    },
    "hljs-quote": {
        "color": "#5C6370",
        "fontStyle": "italic"
    },
    "hljs-doctag": {
        "color": "#F39DE8"
    },
    "hljs-keyword": {
        "color": "#F39DE8"
    },
    "hljs-formula": {
        "color": "#F39DE8"
    },
    "hljs-section": {
        "color": "#F39D9D"
    },
    "hljs-name": {
        "color": "#F39D9D"
    },
    "hljs-selector-tag": {
        "color": "#F39D9D"
    },
    "hljs-deletion": {
        "color": "#F39D9D"
    },
    "hljs-subst": {
        "color": "#F39D9D"
    },
    "hljs-literal": {
        "color": "#F39D9D"
    },
    "hljs-string": {
        "color": "#9DF3B8"
    },
    "hljs-regexp": {
        "color": "#9DF3B8"
    },
    "hljs-addition": {
        "color": "#9DF3B8"
    },
    "hljs-attribute": {
        "color": "#9DF3B8"
    },
    "hljs-meta-string": {
        "color": "#9DF3B8"
    },
    "hljs-built_in": {
        "color": "#9DD9F3"
    },
    "hljs-class .hljs-title": {
        "color": "#9DD9F3"
    },
    "hljs-attr": {
        "color": "#BA9DF3"
    },
    "hljs-variable": {
        "color": "#BA9DF3"
    },
    "hljs-template-variable": {
        "color": "#BA9DF3"
    },
    "hljs-type": {
        "color": "#BA9DF3"
    },
    "hljs-selector-class": {
        "color": "#BA9DF3"
    },
    "hljs-selector-attr": {
        "color": "#BA9DF3"
    },
    "hljs-selector-pseudo": {
        "color": "#BA9DF3"
    },
    "hljs-number": {
        "color": "#BA9DF3"
    },
    "hljs-symbol": {
        "color": "#618EEE"
    },
    "hljs-bullet": {
        "color": "#618EEE"
    },
    "hljs-link": {
        "color": "#618EEE",
        "textDecoration": "underline"
    },
    "hljs-meta": {
        "color": "#618EEE"
    },
    "hljs-selector-id": {
        "color": "#618EEE"
    },
    "hljs-title": {
        "color": "#618EEE"
    },
    "hljs-emphasis": {
        "fontStyle": "italic"
    },
    "hljs-strong": {
        "fontWeight": "bold"
    }
};

const Component = () => {
    const code = ({ className, children, ... properties }) => {
        const match = /language-(\w+)/.exec(className || "");
        console.log(properties, className);
        return (match?.[1]) ? (
            <Highlighter
                children={ String(children).replace(/\n$/, "") }
                style={ pastel }
                language={ match[1] ?? null }
                PreTag="div"
                { ... properties }
            />
        ) : (
            <code>
                { children }
            </code>
        )
    };

    /// Interesting... Components has to be := an html tag <code> for example
    const Target = () => (<Content components={ { code } }/>);

    return (<Target/>);
};

export { Component as Configuration };
export default Component;