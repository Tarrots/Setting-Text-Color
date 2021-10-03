// import file css - js
import React, { Component } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.min";
// import components
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Result from "./components/Result";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontSize: 12
    }
    this.setColor = this.setColor.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.default = this.default.bind(this);
  }
  setColor(params){
    this.setState({
      color: params
    });
  }
  changeSize(value){
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
      this.setState({
        fontSize: this.state.fontSize + value
      });
    }
  }
  default(value){
    if(value){
      this.setState({
        color: "red",
        fontSize: 12
      });
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row mt-5">
        <ColorPicker color={this.state.color} onReceiveColor={this.setColor}/>
        <SizeSetting 
        fontSize={this.state.fontSize}
        changeSize={this.changeSize} 
        color={this.state.color}
        default={this.default}
        /><br/><br/>
        <Result color={this.state.color} fontSize={this.state.fontSize}/>
      </div>
    </div>
    );
  }
}

export default App;
