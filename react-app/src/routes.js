import React from 'react'
import { Route } from 'react-pages'

import App from './pages/App'
import Home from './pages/Home'

export default (
  <Route path="/" component={ App }>
    <Route component={ Home }/>
    <Route path="about" component={ About }/>
  </Route>
)