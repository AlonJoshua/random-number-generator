import React from "react";

class Generate extends React.Component {
	constructor(props) {
  		super(props)
  		}

  		handleClick = () => {
  			this.props.currentClick();
  		}
  	render() {
	return (
		<div className="gen-box">
		<button 
		type="button" 
		className="gen-btn" 
		onClick={this.handleClick}>
		generate 
		</button>
		</div>
		);
	}
}

export default Generate;