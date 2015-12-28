import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import Data from 'sample-data'

import RStar from 'components/rstar'
import Fp from 'components/fp'
import Default from 'components/default'

let App = React.createClass({
  getInitialState(){
    return { 'rstar': null , 'fp': null  }
  },

  setUserValue(name,value){
    var update = { }
    update[name] = value
    this.setState(update)
  },

  getPath(){
    return this.props.routes[this.props.routes.length-1].path
  },

  getData(){
    return Data[this.getPath()]
  },

  render() {
    return (
      <div className='app'>
      <p>app</p>
      {this.props.children && React.cloneElement(this.props.children, {
        updateParent: this.setUserValue.bind(this,this.getPath()),
        cardData: this.getData()
      })}
      <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
});

render((
  <Router>
    <Route path='/' component={App}>
      <Route path='rstar' component={RStar} />
      <Route path='fp' component={Fp} cardData={Data.fp} />
      <Route path='*' component={Default} />
    </Route>
  </Router>
), document.getElementById('root'))
