import React, { Component } from 'react';
import Service from './service.js'
import './Services.css';


class Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="services-wrapper">
      {
        this.props.services.map(service => {
          return <Service data={service}></Service>
        })
      }
      </div>
      
    );
  }
}

export default Services;