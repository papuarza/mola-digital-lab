import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.titleWrapper}>
        <h2 style={styles.title}>{this.props.title}</h2>
      </div>
    );
  }
}

const styles = {
  titleWrapper: {
    backgroundImage: 'url("/images/background-circles.svg")',
    backgroundPosition: 'left',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: '0 5%'
  },
  title: {
    fontFamily: "'Nova Mono', monospace",
    fontSize: '60px',
    textTransform: 'uppercase',
    letterSpacing: '4px'
  }
}

export default Title;