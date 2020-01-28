import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Instructions from "./components/instructions/instructions";
import Range from "./components/Range/Range";
import Generate from "./components/button/button";
import View from "./components/view/view";

class Generator extends React.Component {
  	constructor (props) {
  		super(props)
  		this.state = { 
        onView: '0',
        minNum: 0 ,
        maxNum: 100
      } 
  	}

    

    btnClick = () => {
      const { minNum, maxNum } = this.state;
      // min = Math.ceil(min);
      // max = Math.floor(max);
      // var x = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(minNum);
      // return this.setState({ onView : minNum });
     };

    // var minRangeNumChange = (event) => {
    //   this.setState({ minNum : event.target.value })
    // }

  render() {

  return (
    <div className="container">
    <Instructions />
    <Range 
      max={this.state.maxNum} 
      min={this.state.minNum} 
      />
    <Generate currentClick={btnClick}/>
    <View show={this.state.onView}/>
    </div>
    );
  }
}

export default Generator;

