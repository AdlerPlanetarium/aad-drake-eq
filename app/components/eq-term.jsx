import React from 'react'
import Data from 'sample-data'

let EQTerm = React.createClass({

  getRoute(key){
    return '#/' + key
  },

	formatNum(num){
		if(num==null)
			return '&nbsp;'

		if(Data[this.props.name].valueType == 'percentage')
			return Math.round(100*num)+'%'

		return num
	},

	render(){
		return (
			<li>
				<a href={this.getRoute(this.props.name)}>
					<p className='btn value' dangerouslySetInnerHTML={{__html: Data[this.props.name].displayName}}></p>
  				<p  className='btn value' dangerouslySetInnerHTML={{__html: this.formatNum(this.props.value)}}></p>
				</a>
			</li>
		)
	}
})

export default EQTerm
