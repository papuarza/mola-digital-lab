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
        this.props.services.map((service, index) => {
          return <Service data={service} key={index}></Service>
        })
      }
      </div>
      
    );
  }
}

export default Services;