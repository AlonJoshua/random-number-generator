import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Instructions from "./components/instructions/instructions";
import Range from "./components/Range/Range";
import Generate from "./components/button/button";
import View from "./components/view/view";

export class Generator extends React.Component {
  	constructor (props) {
  		super(props)
  		this.state = { 
        onView: '0' 
      }  
  	}

      btnClick = () => {
      var x = Math.ceil(Math.ceil(Math.random()) / Math.random());
      this.setState({ onView : x });
     }

  render() {
      
  return (
    <div className="container">
    <Instructions />
    <Range />
    <Generate currentClick={this.btnClick}/>
    <View show={this.state.onView}/>
    </div>
    );
  }
}

export default Generator;

