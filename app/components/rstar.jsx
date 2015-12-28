import React from 'react';

let RStar = React.createClass({

	doUpdate(){
		this.props.updateParent(5)
	},

	render(){
		return (
			<div>
				<button onClick={this.doUpdate}>blah</button>
			</div>
		)
	}
})

export default RStar
