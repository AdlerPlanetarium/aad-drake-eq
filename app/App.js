import React from 'react'
import Data from 'sample-data'
import EQTerm from 'components/eq-term'

let App = React.createClass({
  getInitialState(){
    return { 'rstar': Data['rstar'].defaultValue , 'fp': Data['fp'].defaultValue , 'ne': Data['ne'].defaultValue , 'fl': Data['fl'].defaultValue , 'fi': Data['fi'].defaultValue , 'fc': Data['fc'].defaultValue , 'L': Data['L'].defaultValue  }
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
      newState[key] = Data[key].defaultValue
    })
    this.setState(newState)
  },

  computeDrake(){
    return Math.round(Object.keys(this.state).map(
      function(key){ return this.state[key]},
      this
    ).reduce(
      function(x,y){return x*y}
    ))
  },

  render(){
    return (
      <div className='app'>
        <section id='cards' >
          <nav>
            <ul className='nav nav-pills nav-justified'>
              <li>
                <p className='result'><i>alieNs=</i></p>
              </li>
              {Object.keys(Data).map(function(key){
                return <EQTerm key={key} name={key} value={this.state[key]} path={this.getPath()} />
              },this)}
              <li>
                <p className='result'>= {this.computeDrake()}</p>
              </li>
            </ul>
          </nav>
          <div id='one-card'>
          {this.props.children && React.cloneElement(this.props.children, {
            resetState: this.resetState,
            updateParent: this.setUserValue.bind(this,this.getPath()),
            cardData: this.getData(),
            state: this.state
          })}
          </div>
        </section>
      </div>
    );
  }
});

export default App
