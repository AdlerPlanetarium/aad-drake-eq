import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Data from '../sample-data'

let TermCard = React.createClass({

	doUpdate(){
		var newValue = parseFloat(this.refs.userValue.value)
		if(this.props.cardData.valueType=='percentage') parseFloat(newValue /= 100)

		this.props.updateParent(newValue)
	},

	formatNum(num){

		if(num==null)
			return '&nbsp;'

    var valType = this.props.cardData.valueType

    if(valType == 'log')
      num = Math.pow(10,num)

    if(valType == 'percentage')
      num = 100 * num

		return Math.round(num) + ( valType == 'percentage' ? '%' : '' )
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
			<ReactCSSTransitionGroup transitionName='card' transitionEnterTimeout={300} transitionLeaveTimeout={300}>
				<div key={this.props.cardData.name} style={{backgroundImage: 'url('+this.props.cardData.backgroundImage+')'}} className='term-card chrome safari firefox ie'>
					<h1 dangerouslySetInnerHTML={{__html: this.props.cardData.displayName}}></h1>
					<p>{this.props.cardData.description}</p>
					<p style={{display: this.props.cardData.estimatedMax ? 'block' : 'none'}}>Estimates range from {this.formatNum(this.props.cardData.estimatedMin)} to {this.formatNum(this.props.cardData.estimatedMax)}.</p>
					<p>What's your estimate?  Adjust the slider below accordingly...</p>
					<div>
						<input
							type='range'
							ref='userValue'
							required='required'
							defaultValue={(this.props.cardData.valueType === 'percentage') ? (this.props.state[this.props.cardData.name] * 100) : this.props.state[this.props.cardData.name]}
							min={(this.props.cardData.valueType == 'percentage') ? (this.props.cardData.estimatedMin * 100) : this.props.cardData.estimatedMin}
							max={(this.props.cardData.valueType == 'percentage') ? (this.props.cardData.estimatedMax * 100) : this.props.cardData.estimatedMax}
							step={(this.props.cardData.valueType == 'quantity') ? '1' : '0.01' }
							onInput={this.doUpdate}>
						</input>
					</div>
					<br/>
					<br clear="all"/>
					<a style={{display: this.props.cardData.name == 'rstar' ? 'none' : 'inherit'}} className='btn btn-default prev-button' href={this.getPreviousRoute()}>&laquo; Previous</a>
					<div className='center-button'><a className='btn btn-reset' href="http://adlerplanetarium.github.io/aad-drake-eq/dist/" onClick={this.props.resetState}>Start Over</a></div>
					<a style={{display: this.props.cardData.name == 'L' ? 'none' : 'inherit'}} className='btn btn-default next-button' href={this.getNextRoute()}>Next &raquo;</a>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
})

export default TermCard
