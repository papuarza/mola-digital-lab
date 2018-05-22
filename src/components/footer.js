import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer style={styles.footer}>

      </footer>
    );
  }
}

const styles = {
  footer: {
    minHeight: '80vh',
    backgroundColor: '#FD384B',
    width: '100%'
  }
}

export default Footer;