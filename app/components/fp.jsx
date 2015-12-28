import React from 'react';

export default class Fp extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return <p>{JSON.stringify(this.props.route.cardData)}</p>
	}
}
