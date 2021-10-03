import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "green", "blue", "aqua"]
    }
  }
  getColor(color){
    return{
      backgroundColor: color
    }
  }
  setColor(color){
    this.props.onReceiveColor(color);
   // console.log(color);
  }
  render() {
    return (
      <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
          <div className="card text-white">
            <div className="card-header bg-primary">
              Color Picker
            </div>
            <div className="card-body">
              {
                this.state.colors.map((color, index) => {
                  return (
                    <span 
                    key={index}
                    style={this.getColor(color)}
                    className={this.props.color === color ? "active" : ""}
                    onClick={() => this.setColor(color)} // function(value) => arrow function
                    > 
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div> 
    );
  }
}

export default ColorPicker;
