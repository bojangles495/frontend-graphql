import React from 'react'
import routes from '../routes'
import { Router } from 'react-router'

const Root = ({history}) => (
    <div>
      <Router history={history} routes={routes} />
    </div>
)

export default Root
