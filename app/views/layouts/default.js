"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DefaultLayout = props => {
    console.log(this.props);
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, this.props.title)),
        react_1.default.createElement("body", null, this.props.children)));
};
exports.default = DefaultLayout;
//# sourceMappingURL=default.js.map