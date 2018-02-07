"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var DefaultLayout = require('./layouts/default');
class index extends React.Component {
    render() {
        return (React.createElement(DefaultLayout, { title: this.props.title || 'express' },
            React.createElement("div", null, "Hello")));
    }
}
exports.default = index;
//# sourceMappingURL=index.js.map