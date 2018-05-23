import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contact-form-wrapper">
        <h2>Alguna duda?</h2>
        <p>Te quedaste con ganas de saber algo más de la empresa? <br/>Cómo podes hacer para trabajar con nosotros?<br/> Querés contarnos sobre algún proyecto? <br/> <b>No dudes en escribirnos, te respondemos lo más rápido que podamos.</b></p>
        <form>
          <fieldset>
            <input type="text"/>
            <label>Nombre</label>
          </fieldset>
          <fieldset>
            <input type="text"/>
            <label>Apellido</label>
          </fieldset>
          <fieldset>
            <input type="text"/>
            <label>Tema de la Consulta</label>
          </fieldset>
          <fieldset>
            <textarea></textarea>
            <label>Mensaje</label>
          </fieldset>
          <button>ENVIAR</button>
        </form>
      </div>  
    );
  }
}


export default Contact;