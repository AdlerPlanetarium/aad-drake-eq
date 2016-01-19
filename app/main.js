import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import App from 'app'
import TermCard from 'components/term-card'

// <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')
require('style/app.css')
require('style/AADcustom.css')

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={TermCard} />
      <Route path='fp' component={TermCard}  />
      <Route path='ne' component={TermCard}  />
      <Route path='fl' component={TermCard}  />
      <Route path='fi' component={TermCard}  />
      <Route path='fc' component={TermCard}  />
      <Route path='L' component={TermCard}  />
    </Route>
  </Router>
), document.getElementById('rstar'))
