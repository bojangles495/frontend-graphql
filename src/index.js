import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import Relay from 'react-relay'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
    headers: {
      Authorization: 'Bearer <YOUR_ACCESS_TOKEN_HERE>'
    }
  })
);

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
