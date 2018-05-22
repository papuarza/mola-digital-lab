import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.descriptionWrapper}>
        <h2 style={styles.description}>{this.props.description}</h2>
      </div>
    );
  }
}

const styles = {
  descriptionWrapper: {
    textAlign: 'left',
    width: '90%',
    padding: '0 5%'
  },
  description: {
    fontSize: '20px',
    fontWeight: '100',
    lineHeight: '35px'
  }
}

export default Description;