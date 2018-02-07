import React, {Component} from 'react'
var DefaultLayout = require('./layouts/default');

const HelloMessage = props => {
  return (
    <DefaultLayout title={props.title}>
      <div>Hello {props.message}</div>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;