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
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "/Users/jsanders/Development/bootstrap/packages/react-library/src/Button.stories.tsx";
var Button_1 = require("./Button");
exports["default"] = {
    title: 'Example/Button',
    component: Button_1.Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_dev_runtime_1.jsxDEV)(Button_1.Button, __assign({}, args), void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 47 }, _this); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    primary: true,
    label: 'Button'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Button'
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: 'large',
    label: 'Button'
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: 'small',
    label: 'Button'
};
