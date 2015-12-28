import React from 'react'
//import ReactDOM from 'react-dom'
//import App from 'App.js';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import RStar from 'components/rstar'
import Fp from 'components/fp'
import Default from 'components/default'

let App = React.createClass({
  render() {
    return (
      <div className='app'>
      <p>app</p>
      {this.props.children}
      </div>
    );
  }
});
/*
let routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="rstar" path="/rstar" handler={RStar}/>
    </Route>
);
*/

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={RStar} />
      <Route path='fp' component={Fp} />
      <Route path='*' component={Default} />
    </Route>
  </Router>
), document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));
//Router.run(routes, function(Handler) {
//  ReactDOM.render(<Handler />, document.getElementById('root'));
//});
