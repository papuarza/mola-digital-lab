import React, { Component } from 'react';

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <img src={this.props.logo} alt="" style={styles.logo} />
    );
  }
}

const styles = {
  logo: {
    width: "250px",
    height: "250px",
    filter: "grayscale(100%)",
    opacity: "0.3",
    margin: '0 2%'
  }
}

export default Logo;