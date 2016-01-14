import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Data from 'sample-data'


let TermCard = React.createClass({

	getInitialState(){
  	return { 'rstar': null , 'fp': null , 'ne': null , 'fl': null , 'fi': null , 'fc': null , 'L': null  }
  },

  setUserValue(name,value){
    var update = { }
    update[name] = value
    this.setState(update)
  },

	doUpdate(){
		var newValue = parseFloat(this.refs.userValue.value)
		if(this.props.cardData.valueType=='percentage') parseFloat(newValue /= 100)

		this.props.updateParent(newValue)
	},

	componentWillReceiveProps(){
		this.setUserValue(this.props.cardData.name)
	},

	formatNum(num){
		if(this.props.cardData.valueType == 'percentage')
			return (100*num)+'%'

		return num
	},

  getRoute(key){
    return '#/' + key
  },

	getPreviousRoute(){
		var keys = Object.keys(Data);
		var index = keys.indexOf(this.props.cardData.name);
		if(index < 1)
			return null;

		return this.getRoute(keys[index-1]);
	},

	getNextRoute(){
		var keys = Object.keys(Data);
		var index = keys.indexOf(this.props.cardData.name);
		if(index > 5)
			return null;

		return this.getRoute(keys[index+1]);
	},

	render(){
		return (
			<ReactCSSTransitionGroup transitionName="card" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
				<div key={this.props.cardData.name} style={{backgroundImage: 'url('+this.props.cardData.backgroundImage+')'}} className='eq-term'>
					<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
					<p>{this.props.cardData.description}</p>
					<p style={{display: this.props.cardData.estimatedMax ? 'block' : 'none'}}>Estimates range from {this.formatNum(this.props.cardData.estimatedMin)} to {this.formatNum(this.props.cardData.estimatedMax)} </p>
					<div>
						<input
							type="range"
							ref="userValue"
							required="required"
							defaultValue={this.state[this.props.cardData.name]}
							min={(this.props.cardData.valueType == 'percentage') ? (this.props.cardData.estimatedMin * 100) : this.props.cardData.estimatedMin}
							max={(this.props.cardData.valueType == 'percentage') ? (this.props.cardData.estimatedMax * 100) : this.props.cardData.estimatedMax}
							onInput={this.doUpdate}>
						</input><span className='pctLabel' style={{display: this.props.cardData.valueType=='percentage' ? 'inline' : 'none'}}>%</span></div>
					<button onClick={this.doUpdate}>Estimate</button>
					<br/>
					<span>{this.formatNum(this.state[this.props.cardData.name])}</span>
					<a className='btn btn-default prev-button' href={this.getPreviousRoute()}>&laquo; Previous</a>
					<a className='btn btn-default next-button' href={this.getNextRoute()}>Next &raquo;</a>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
})

export default TermCard
