import React from 'react'

const DefaultLayout = props => {
  console.log(this.props)
  return (
    <html>
      <head>
        <title>{this.props.title}</title>
      </head>
      <body>{this.props.children}</body>
    </html>
  );
}

export default DefaultLayout