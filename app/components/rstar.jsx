import React from 'react';

let RStar = React.createClass({

	doUpdate(){
		this.props.updateParent(5)
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

export default RStar
