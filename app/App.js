import React from 'react'
import Data from 'sample-data'
import EQTerm from 'components/eq-term'

let App = React.createClass({
  getInitialState(){
    return { 'rstar': null , 'fp': null , 'ne': null , 'fl': null , 'fi': null , 'fc': null , 'L': null  }
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

  resetState(){
    var newState = {}
    Object.keys(Data).forEach(function(key){
      newState[key] = 0
    })
    this.setState(newState)
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
        <h1>Exploring the Drake Equation</h1>
        <button onClick={this.resetState}>reset</button>
        <nav>
          <ul>
            <li>
              <p>N=</p>
              <p>{this.computeDrake()}</p>
            </li>
            {Object.keys(Data).map(function(key){
              return <EQTerm key={key} name={key} value={this.state[key]} />
            },this)}
          </ul>
        </nav>
        <div>
          <div style={{position: 'relative'}}>
            {this.props.children && React.cloneElement(this.props.children, {
              updateParent: this.setUserValue.bind(this,this.getPath()),
              cardData: this.getData()
            })}
          </div>
        </div>
      </div>
    );
  }
});

export default App
