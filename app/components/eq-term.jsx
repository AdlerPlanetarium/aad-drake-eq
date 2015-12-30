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
			return (100*num)+'%'

		return num
	},

	render(){
		return (
			<li className='one column'>
				<a href={this.getRoute(this.props.name)} className='button'>
					<p dangerouslySetInnerHTML={{__html: Data[this.props.name].displayName}}></p>
				</a>
				<p dangerouslySetInnerHTML={{__html: this.formatNum(this.props.value)}}></p>
			</li>
		)
	}
})

export default EQTerm
