import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="title-wrapper">
        <h2 className="title-section">{this.props.title}</h2>
      </div>
    );
  }
}

export default Title;