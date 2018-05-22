import React, { Component } from 'react';

class Service extends Component {
  render() {
    return (
      <div style={styles.serviceItem}>
        <div style={styles.itemWrapper}>
          <div style={styles.imageWrapper}>
            <img src={this.props.data.image} alt="" width="120px"/>
          </div>
          <h3 style={styles.title}>{this.props.data.name}</h3>
          <p style={styles.description}>{this.props.data.description}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  serviceItem: {
    width: "25%",
    padding: "0 0.5%"
  },
  itemWrapper: {
    width: '100%',
    minHeight: '370px',
    boxShadow: '0 4px 5px 0 #CFD8DC, 0 1px 10px 0 #CFD8DC, 0 2px 4px -1px #CFD8DC',
    borderRadius: '3px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '10% 15%',
    textAlign: 'left'
  },
  imageWrapper: {
    backgroundImage: 'url("images/background-circles.svg")',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '150px',
    alignItems: 'center'
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '10px',
    color: '#FD384B',
    fontWeight: '600'
  },
  description: {
    fontWeight: '100',
    lineHeight: '20px',
    color: '#2E2E30'
  }
}

export default Service;