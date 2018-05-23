import React, { Component } from 'react';
import './Service.css';

class Service extends Component {
  render() {
    return (
      <div className="service-item">
        <div className="item-wrapper">
          <div className="image-wrapper">
            <img src={this.props.data.image} alt="" width="120px"/>
          </div>
          <h3 className="title">{this.props.data.name}</h3>
          <p className="description">{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}

export default Service;