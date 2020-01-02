import React from "react";

const Generate = () => {
// button genetare random number on click event.

  function btnClick(x, y) {

 // connect the btnClick result to the view.

 	


 // Create a random number

  	x = Math.ceil(Math.ceil(Math.random()) / Math.random());
    console.log(x);
    }
  	




	return (
		<div className="gen-box">
		<button type="button" className="gen-btn" onClick={btnClick} >generate</button>
		</div>
		);
}

export default Generate;