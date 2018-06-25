import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
        <header>
          <div className="left-header-wrapper">
            <img src='images/menu.svg' className="menu-trigger" alt="logo" id="menu-trigger" />
            <img src='images/header-image.svg' className="main-logo" alt="logo" />
          </div>
          <div className="right-header-wrapper">
            <img src='images/logo.svg' className="app-logo" alt="logo" />
            <h1>Lorem ipsum dolor sit amet, ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in felis tellus. Sed maximus congue quam eget tincidunt. Morbi interdum ipsum nec nisl tristique, eu sollicitudin nulla luctus. </p>
          </div>
        </header>  
    );
  }
}

export default Header;