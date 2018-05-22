import React, { Component } from 'react';
import Service from './service.js'



class Services extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.servicesWrapper}>
      {
        this.props.services.map(service => {
          return <Service data={service}></Service>
        })
      }
      </div>
      
    );
  }
}

const styles = {
  servicesWrapper: {
    display: 'flex',
    padding: '5% 8%',
    margin: '0 auto',
    justifyContent: 'center'
  }
}

export default Services;