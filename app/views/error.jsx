"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
var DefaultLayout = require('./layouts/default');
const HelloMessage = props => {
    return (<DefaultLayout title={props.title}>
      <div>Hello {props.message}</div>
    </DefaultLayout>);
};
module.exports = HelloMessage;
//# sourceMappingURL=error.jsx.map