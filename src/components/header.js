import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <div className="left-header-wrapper">
            <img src='images/menu.svg' style={styles.menuTrigger} alt="logo" />
            <img src='images/header-image.svg' style={styles.mainLogo} alt="logo" />
          </div>
          <div className="right-header-wrapper">
            <img src='images/logo.svg' className="App-logo" alt="logo" />
            <h2>DIGITAL LAB</h2>
            <h1>Lorem ipsum dolor sit amet, ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in felis tellus. Sed maximus congue quam eget tincidunt. Morbi interdum ipsum nec nisl tristique, eu sollicitudin nulla luctus. </p>
          </div>
        </header>  
    );
  }
}

const styles = {
  mainLogo: {
    height: '80%'
  },
  menuTrigger: {
    height: '5%',
    marginLeft: '45px',
  }
}

export default Header;