import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Data from 'sample-data'


let TermCard = React.createClass({

	doUpdate(){
		var newValue = parseFloat(this.refs.userValue.value)
		if(this.props.cardData.valueType=='percentage') newValue /= 100

		this.props.updateParent(newValue)
	},

	componentWillReceiveProps(){
		this.refs.userValue.value = ''
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
					<div><input type="number" ref="userValue" required="required"></input><span className='pctLabel' style={{display: this.props.cardData.valueType=='percentage' ? 'inline' : 'none'}}>%</span></div>
					<button onClick={this.doUpdate}>Estimate</button>
					<a href={this.getPreviousRoute()}>&laquo; Previous</a>
					<a href={this.getNextRoute()}>Next &raquo;</a>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
})

export default TermCard
