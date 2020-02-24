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
      const min = Math.ceil(minNum);
      const max = Math.floor(maxNum);
      const x = Math.floor(Math.random() * (max - min + 1)) + min;
      return this.setState({ onView : x });
    }

    minRangeInputChange = (event) => {
      const { minNum, maxNum } = this.state;
      const typeNum = parseInt(event.target.value, 10)
      let numLength = event.target.value.length;
       if (typeNum > maxNum) {
            this.setState({ minNum: maxNum });
       } else if (numLength > 7) {
            numLength = numLength - 1
       } else {
            this.setState({ minNum: typeNum });
      }
      return console.log(minNum);
    }

    maxRangeInputChange = (event) => {
      const { minNum, maxNum } = this.state;
      const typeNum = parseInt(event.target.value, 10)
      let numLength = event.target.value.length;
       if (typeNum < minNum) {
          this.setState({ maxNum: minNum});
      } else if (numLength > 7) {
          numLength = numLength - 1
      } else {
          this.setState({ maxNum: typeNum })
      }
      return console.log(maxNum);
    }

  render() {

  return (
    <div className="container">
    <Instructions />
    <Range 
      max={this.state.maxNum} 
      min={this.state.minNum} 
      minChange={this.minRangeInputChange}
      maxChange={this.maxRangeInputChange}
      />
    <Generate currentClick={this.btnClick}/>
    <View show={this.state.onView}/>
    </div>
    );
  }
}

export default Generator;

