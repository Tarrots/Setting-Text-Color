import React, { Component } from 'react';
import Reset from "./Reset";
class SizeSetting extends Component {
  constructor(props) {
    super(props);
    this.default = this.default.bind(this);
  }
  changeSize(value){
    this.props.changeSize(value);
  }
  default(value){
    if(value){
      this.props.default(true);
    }
  }
    render() {
      return (
        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
        <div className="card text-dark">
          <div className="card-header bg-light">
            Serting Size: {this.props.fontSize}
          </div>
          <div className="card-body">
          <button type="button" className="btn btn-primary" onClick={() => this.changeSize(+2)}>+</button> &nbsp;
          <button type="button" className="btn btn-primary" onClick={() => this.changeSize(-2)}>-</button>
          </div>
        </div>
        <Reset color={this.props.color} fontSize={this.props.fontSize} default={this.default}/>
      </div>
      );
    }
}

export default SizeSetting;
