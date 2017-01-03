import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import RelayDemo from './components/RelayRoot'

export default 
<Route path="/" component={App}>
	<IndexRoute component={RelayDemo} />
	<Route path="/:login" component={RelayDemo} />
</Route>