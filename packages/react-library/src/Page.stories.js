"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
exports.__esModule = true;
exports.LoggedOut = exports.LoggedIn = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/Users/jsanders/Development/bootstrap/packages/react-library/src/Page.stories.tsx";
var Page_1 = require("./Page");
var HeaderStories = require("./Header.stories");
exports["default"] = {
    title: 'Example/Page',
    component: Page_1.Page
};
var Template = function (args) { return (0, jsx_dev_runtime_1.jsxDEV)(Page_1.Page, __assign({}, args), void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 45 }, _this); };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = __assign({}, HeaderStories.LoggedIn.args);
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = __assign({}, HeaderStories.LoggedOut.args);
