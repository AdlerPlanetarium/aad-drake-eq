import React from 'react';

let Fp = React.createClass({

	doUpdate(){
		this.props.updateParent(parseFloat(this.refs.userValue.value)/100)
	},

	render(){
		return (
			<div>
				<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
				<p>{this.props.cardData.description}</p>
				<input type="number" ref="userValue" required="required"></input>%&nbsp;
				<button onClick={this.doUpdate}>Estimate</button>
			</div>
		)
	}
})

export default Fp
