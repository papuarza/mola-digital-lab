import React, { Component } from 'react';
import Title from '../title/index.js'
import Description from '../description/index.js'
import './Works.css';

const description = 'Trabajamos desarrollando aplicaciones y webs personalizadas según las exigencias de cada uno de los clientes. Desde desarrollos Front End hasta webs Full Stack, entre nuestros trabajos puedes encontrar una amplia gama de poryectos. Para conocer más a detalle cada uno de los que hemos desarrollado, podés visitar la pestaña de Proyectos.';

class Works extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row-wrapper">
        <Title title="Trabajos"></Title>
        <div className="description-wrapper">
          <Description description={description}></Description>
          <img src="images/screen-jobs.png" alt="" className="works-image"/>
        </div>
      </div>
      
    );
  }
}


export default Works;