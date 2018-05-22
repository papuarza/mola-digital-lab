import React, { Component } from 'react';
import Title from './title.js'
import Description from './description.js'

const description = 'Trabajamos desarrollando aplicaciones y webs personalizadas según las exigencias de cada uno de los clientes. Desde desarrollos Front End hasta webs Full Stack, entre nuestros trabajos puedes encontrar una amplia gama de poryectos. Para conocer más a detalle cada uno de los que hemos desarrollado, podés visitar la pestaña de Proyectos.';

class Works extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.rowWrapper}>
        <Title title="Trabajos"></Title>
        <div style={styles.descriptionWrapper}>
          <Description description={description}></Description>
          <img src="images/screen-jobs.png" alt="" height="450px"/>
        </div>
      </div>
      
    );
  }
}

const styles = {
  rowWrapper: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '5% 0',
    justifyContent: 'center'
  },
  descriptionWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default Works;