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
            <div className='row'>
                <div className='col-lg-8 col-lg-offset-2'>
                  <br/>
                  <button className='btn btn-reset' onClick={this.resetState}>Reset</button>
                  <br/>
                  <nav>
                    <ul className='nav nav-pills nav-justified'>
                      <li>
                        <p className='result'><i>alieNs</i> =</p>
                        <p className='result-value'>{this.computeDrake()} =</p>
                      </li>
                      {Object.keys(Data).map(function(key){
                        return <EQTerm key={key} name={key} value={this.state[key]} path={this.getPath()} />
                      },this)}
                    </ul>
                  </nav>
                  <div>
                    <div style={{position: 'relative'}}>
                      {this.props.children && React.cloneElement(this.props.children, {
                        updateParent: this.setUserValue.bind(this,this.getPath()),
                        cardData: this.getData(),
                        state: this.state
                      })}
                    </div>
                  </div>

            </div>
          </div>
        </section>
      </div>
    );
  }
});

export default App
