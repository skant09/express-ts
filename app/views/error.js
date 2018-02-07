"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
var DefaultLayout = require('./layouts/default');
const HelloMessage = props => {
    return (react_1.default.createElement(DefaultLayout, { title: props.title },
        react_1.default.createElement("div", null,
            "Hello ",
            props.message)));
};
module.exports = HelloMessage;
//# sourceMappingURL=error.js.map