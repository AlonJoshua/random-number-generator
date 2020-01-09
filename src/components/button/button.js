import React from "react";

class Generate extends React.Component {
	constructor(props) {
  		super(props)
  		}

  	render() {

	return (
		<div className="gen-box">
		<button 
		type="button" 
		className="gen-btn" 
		onClick={this.props.btnClick}>
		generate 
		</button>
		</div>
		);
	}
}

export default Generate;