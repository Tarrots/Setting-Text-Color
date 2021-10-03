import React, { Component } from 'react';
class Result extends Component {
  constructor(props) {
    super(props);
    this.setStyle = this.setStyle.bind(this);
  }
  
  setStyle(){
    return{
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    }
  }
  render() {
    return (
      <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12 mt-4">
      <p>Color: {this.props.color} - FontSize: {this.props.fontSize}</p>
      <div className="result" style={this.setStyle()}>This is a paragraph!</div>
    </div>
    );
  }
}

export default Result;