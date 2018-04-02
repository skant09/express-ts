"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var DefaultLayout = require('./layouts/default');
class index extends React.Component {
    render() {
        return (<DefaultLayout title={this.props.title || 'express'}>
        <div>Hello</div>
      </DefaultLayout>);
    }
}
exports.default = index;
//# sourceMappingURL=index.jsx.map