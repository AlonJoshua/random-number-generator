import React from "react";

class Range extends React.Component {
	constructor(props) {
  		super(props)
  		}
  		render() {
	return (
		<div className="range">
			<h3>Minimum</h3>
				<input type="number" 
				value={this.props.minNum} 
				onChange={this.props.minChange} 
				required/>
			<h3>Maximum</h3>
				<input type="number" 
				value={this.props.maxNum}
				onChange={this.props.maxChange}
				required/>
		</div>
		)
	}
}


export default Range;