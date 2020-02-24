import React from "react";

class Range extends React.Component {
	constructor(props) {
  		super(props)
  		}
  		render() {
	return (
		<div className="range">
			<div className='min-div'>
			<h2>Minimum</h2>
				<input 
				type="number" 
				min="0"
				max="9999999"
				value={this.props.min} 
				onChange={this.props.minChange}
				id="minInput"
				required/>
			</div>
			<div className='max-div'>
			<h2>Maximum</h2>
				<input 
				type="number" 
				min="1"
				max="9999999"
				value={this.props.max}
				onChange={this.props.maxChange}
				id="maxInput"
				required/>
			</div>
		</div>
		)
	}
}


export default Range;