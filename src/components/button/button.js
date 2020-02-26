import React from "react";

const Generate = ({ currentClick }) => {
	return (
		<div className="gen-box">
		<button 
		type="button" 
		className="gen-btn" 
		onClick={currentClick}>
		generate 
		</button>
		</div>
		);
}

export default Generate;