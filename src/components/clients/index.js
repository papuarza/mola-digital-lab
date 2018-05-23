import React, { Component } from 'react';
import Title from '../title/index.js'
import Logo from '../logo/index.js'
import './Clients.css';

const description = 'Trabajamos desarrollando aplicaciones y webs personalizadas según las exigencias de cada uno de los clientes. Desde desarrollos Front End hasta webs Full Stack, entre nuestros trabajos puedes encontrar una amplia gama de poryectos. Para conocer más a detalle cada uno de los que hemos desarrollado, podés visitar la pestaña de Proyectos.';

class Clients extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row-wrapper">
        <Title title="Clientes"></Title>
        <div className="logos-wrapper">
        {
          this.props.companies.map((company,i) => {
            return <Logo key={i} logo={company.logo}></Logo>
          })
        }
        </div>
      </div>
      
    );
  }
}


export default Clients;