"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const DefaultLayout = props => {
    console.log(this.props);
    return (<html>
      <head>
        <title>{this.props.title}</title>
      </head>
      <body>{this.props.children}</body>
    </html>);
};
exports.default = DefaultLayout;
//# sourceMappingURL=default.jsx.map