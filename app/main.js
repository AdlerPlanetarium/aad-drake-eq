import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App from 'app'
import EQTerm from 'components/eq-term'

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={EQTerm} />
      <Route path='fp' component={EQTerm}  />
    </Route>
  </Router>
), document.getElementById('root'))
