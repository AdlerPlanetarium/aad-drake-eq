import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App from 'app'
import RStar from 'components/rstar'
import Fp from 'components/fp'
import Default from 'components/default'

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={RStar} />
      <Route path='fp' component={Fp}  />
      <Route path='*' component={Default} />
    </Route>
  </Router>
), document.getElementById('root'))
