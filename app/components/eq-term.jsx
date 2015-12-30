import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


let EQTerm = React.createClass({

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

	render(){
		return (
			<ReactCSSTransitionGroup transitionName="card" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
				<div key={this.props.cardData.name} style={{backgroundImage: 'url('+this.props.cardData.backgroundImage+')'}} className='eq-term'>
					<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
					<p>{this.props.cardData.description}</p>
					<p style={{display: this.props.cardData.estimatedMax ? 'block' : 'none'}}>Estimates range from {this.formatNum(this.props.cardData.estimatedMin)} to {this.formatNum(this.props.cardData.estimatedMax)} </p>
					<div className='three columns'><input type="number" ref="userValue" required="required"></input><span className='pctLabel' style={{display: this.props.cardData.valueType=='percentage' ? 'inline' : 'none'}}>%</span></div>
					<button onClick={this.doUpdate} className="button-primary">Estimate</button>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
})

export default EQTerm
