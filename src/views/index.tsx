var React = require('react');
var DefaultLayout = require('./layouts/default');

export default class index extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title || 'express' }>
        <div>Hello</div>
      </DefaultLayout>
    );
  }
}