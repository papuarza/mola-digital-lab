import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img src={this.props.logo} alt="" className="logo" />
    );
  }
}

export default Logo;