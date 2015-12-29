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
			<div className="row">
				<div style={{backgroundImage: 'url('+this.props.cardData.backgroundImage+')'}} className='eq-term twelve columns'>
					<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
					<p>{this.props.cardData.description}</p>
					<div className='three columns'><input type="number" ref="userValue" required="required"></input><span className='pctLabel' style={{display: this.props.cardData.valueType=='percentage' ? 'inline' : 'none'}}>%</span></div>
					<button onClick={this.doUpdate} className="button-primary">Estimate</button>
				</div>
			</div>
		)
	}
})

export default EQTerm
