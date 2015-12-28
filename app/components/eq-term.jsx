import React from 'react';

let EQTerm = React.createClass({

	doUpdate(){
		var newValue = parseFloat(this.refs.userValue.value);
		if(this.props.cardData.valueType=='percentage') newValue /= 100

		this.props.updateParent(newValue)
	},

	componentWillReceiveProps(){
		this.refs.userValue.value = ''
	},

	render(){
		return (
			<div style={{backgroundImage: 'url('+this.props.cardData.backgroundImage+')'}} className='eq-term'>
				<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
				<p>{this.props.cardData.description}</p>
				<input type="number" ref="userValue" required="required"></input><span style={{display: this.props.cardData.valueType=='percentage' ? 'inline' : 'none'}}>%</span>
				<button onClick={this.doUpdate}>Estimate</button>
			</div>
		)
	}
})

export default EQTerm
