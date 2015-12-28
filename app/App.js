import React from 'react'
import Data from 'sample-data'

let App = React.createClass({
  getInitialState(){
    return { 'rstar': null , 'fp': null , 'ne': null , 'fe': null , 'fi': null , 'fc': null , 'L': null  }
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

  getRoute(key){
    return '#/' + key
  },

  computeDrake(){
    return Object.keys(this.state).map(
      function(key){ return this.state[key]},
      this
    ).reduce(
      function(x,y){return x*y}
    )
  },

  render() {
    return (
      <div className='app'>
        <nav>
          <ul>
            {Object.keys(Data).map(function(key){
              return <li key={key}><a href={this.getRoute(key)}>{key}</a></li>
            },this)}
          </ul>
          <ul>
            {Object.keys(this.state).map(function(key){
              return <li key={key}><a href={this.getRoute(key)}>{this.state[key]}</a></li>
            },this)}
          </ul>
        </nav>
        <p><span>{ this.computeDrake() }</span></p>
        {this.props.children && React.cloneElement(this.props.children, {
          updateParent: this.setUserValue.bind(this,this.getPath()),
          cardData: this.getData()
        })}
      </div>
    );
  }
});

export default App
