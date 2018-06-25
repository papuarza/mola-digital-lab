import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
        <div className="menu-wrapper" id="menu-wrap">
          <img src='images/close.svg' className="close-icon" alt="close" />
          <img src='images/menu-image.svg' className="menu-icon" alt="menu" />
          <div className="menu-list-wrapper">
            <ul>
              <li className="active">HOME</li>
              <li>SERVICIOS</li>
              <li>TRABAJOS</li>
              <li>CLIENTES</li>
              <li>SOBRE NOSOTROS</li>
              {/* <li>BLOG</li> */}
              <li>CONTÁCTANOS</li>
            </ul>
          </div>
        </div> 
    );
  }
}

export default Menu;