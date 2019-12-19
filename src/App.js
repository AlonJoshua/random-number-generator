import React from "react";
import ReactDOM from "react-dom";
import Instructions from "./components/instructions/instructions"

class Generator extends React.Component {

  render() {
  return (
    <div className="App">
    <div className="gen-button">
    <Instructions />
    <button type="button">generate</button>
      </div>
      <div className="random-number"> 
      <p>0</p>
      </div>
    </div>
    );
  }
}

export default Generator;

