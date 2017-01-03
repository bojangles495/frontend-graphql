import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './containers/Root'
import Relay from 'react-relay'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
    headers: {
      Authorization: 'bearer 61e221c7fb48e5bf31ad2158be4c267859c4294e'
    }
  })
);

render(
  <Root history={browserHistory}/>,
  document.getElementById('root')
)
