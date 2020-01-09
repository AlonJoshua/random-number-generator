import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Instructions from "./components/instructions/instructions";
import Generate from "./components/button/button";
import View from "./components/view/view";

export class Generator extends React.Component {
  	constructor () {
  		super()
  		this.state = { 
        onView: '0' 
      }  
  	}
      btnClick() {
      var x = Math.ceil(Math.ceil(Math.random()) / Math.random());
      console.log(x);
     }

  render() {
      
  return (
    <div className="container">
    <Instructions />
    <Generate currentClick={this.btnClick}/>
    <View show={this.state.onView}/>
    </div>
    );
  }
}

export default Generator;

