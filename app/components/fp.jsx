import React from 'react';

let Fp = React.createClass({

	doUpdate(){
		this.props.updateParent(2)
	},

	render(){
		return (
			<div>
				<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
				<p>{this.props.cardData.description}</p>
			  <p>{JSON.stringify(this.props.cardData)}</p>
				<button onClick={this.doUpdate}>blah</button>
			</div>
		)
	}
})

export default Fp
