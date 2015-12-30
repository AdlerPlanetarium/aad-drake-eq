import React from 'react'
import Data from 'sample-data'

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
        <nav>
          <ul className='row'>
            <li className='four columns'>N=</li>
            {Object.keys(Data).map(function(key){
              return <li className='one column' key={key}><a href={this.getRoute(key)} className='button'><span dangerouslySetInnerHTML={{__html: Data[key].displayName}}></span></a></li>
            },this)}
          </ul>
        </nav>
        <div className="row">
          <div className="twelve columns" style={{position: 'relative'}}>
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
