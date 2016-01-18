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

  checkActive(key){
    if (key === this.props.path)
      return 'btn btn-term-active'
    else
      return 'btn btn-term'
  },

	render(){
    return (
        <li>
  				<a  className='eq-term' href={this.getRoute(this.props.name)}>
  					<p className={this.checkActive(this.props.name)} dangerouslySetInnerHTML={{__html: Data[this.props.name].displayName}}></p>
    				<p className='btn value' dangerouslySetInnerHTML={{__html: this.formatNum(this.props.value)}}></p>
  				</a>
          <span className='multiply' dangerouslySetInnerHTML={this.props.name !== 'L' ? {__html: 'x'} : null}></span>
			  </li>
		)
	}
})

export default EQTerm
