import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="description-wrapper">
        <h2 className="description">{this.props.description}</h2>
      </div>
    );
  }
}


export default Description;