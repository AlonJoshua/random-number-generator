import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Instructions from "./components/instructions/instructions";
import Generate from "./components/button/button";
import View from "./components/view/view";

class Generator extends React.Component {
  
  render() {
  return (
    <div className="container">
    <Instructions />
    <Generate />
    <View />
    </div>
    );
  }
}

export default Generator;

