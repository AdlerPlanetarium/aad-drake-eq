import React from 'react'
import Data from 'sample-data'

let EQTerm = React.createClass({

  getRoute(key){
    return '#/' + key
  },

	formatNum(num){
		if(this.props.cardData.valueType == 'percentage')
			return (100*num)+'%'

		return num
	},

	render(){
		return (
			<li className='one column'>
				<a href={this.getRoute(this.props.name)} className='button'>
					<span dangerouslySetInnerHTML={{__html: Data[this.props.name].displayName}}></span>
				</a>
			</li>
		)
	}
})

export default EQTerm
