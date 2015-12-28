import React from 'react'
import Data from 'sample-data'

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
      <p><a href="#/rstar">rstar</a> | <a href="#/fp">fp</a></p>
      {this.props.children && React.cloneElement(this.props.children, {
        updateParent: this.setUserValue.bind(this,this.getPath()),
        cardData: this.getData()
      })}
      <p>{JSON.stringify(this.state)}</p>
      </div>
    );
  }
});

export default App
