import React from "react";

const Range = ({ min, max, minChange, maxChange }) => {
	return (
		<div className="range">
			<div className='min-div'>
			<h2>Minimum</h2>
				<input 
				type="number" 
				min="0"
				max="9999999"
				value={min} 
				onChange={minChange}
				id="minInput"
				required/>
			</div>
			<div className='max-div'>
			<h2>Maximum</h2>
				<input 
				type="number" 
				min="1"
				max="9999999"
				value={max}
				onChange={maxChange}
				id="maxInput"
				required/>
			</div>
		</div>
		);
}

export default Range;