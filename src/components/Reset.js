import React, { Component } from 'react';
class  Reset extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
  }
  reset(){
    this.props.default(true);
  }
  render() {
    return (
      <button type="button" className="btn btn-outline-primary" onClick={this.reset}>Reset</button>
    );
  }
}

export default Reset;
