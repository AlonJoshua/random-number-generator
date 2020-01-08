import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Instructions from "./components/instructions/instructions";
import Generate from "./components/button/button";
import View from "./components/view/view";

class Generator extends React.Component {
  	constructor () {
  		super()
  		this.state = { onView: '1' }
  	}

  render() {
  	const { show } = this.state.onView;
  return (
    <div className="container">
    <Instructions />
    <Generate />
    <View show={show}/>
    </div>
    );
  }
}

export default Generator;

