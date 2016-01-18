import React from 'react'
import Data from 'sample-data'

let EQTerm = React.createClass({

  getRoute(key){
    return '#/' + key
  },

  transformNum(num, valType){
    if(valType == 'log')
      num = Math.pow(10,num)

    if(valType == 'percentage')
      num = 100 * num

		return Math.round(num)
  },

	formatNum(num){

		if(num==null)
			return '&nbsp;'

    var valType = Data[this.props.name].valueType;
    return this.transformNum(num, valType) + ( valType=='percentage' ? '%' : '' )
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
  				<div className='eq-term'>
  					<a className={this.checkActive(this.props.name)} dangerouslySetInnerHTML={{__html: Data[this.props.name].displayName}} href={this.getRoute(this.props.name)}></a>
    				<p className='value' dangerouslySetInnerHTML={{__html: this.formatNum(this.props.value)}}></p>
  				</div>
			  </li>
		)
	}
})

export default EQTerm
