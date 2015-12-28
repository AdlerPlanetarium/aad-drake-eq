import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App from 'app'
import EQTerm from 'components/eq-term'
require('skeleton-css/css/normalize.css')
require('skeleton-css/css/skeleton.css')
require('style/app.css')

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={EQTerm} />
      <Route path='fp' component={EQTerm}  />
    </Route>
  </Router>
), document.getElementById('root'))
