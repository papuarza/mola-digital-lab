import React, { Component } from 'react';
import Title from './title.js'
import Logo from './logo.js'

const description = 'Trabajamos desarrollando aplicaciones y webs personalizadas según las exigencias de cada uno de los clientes. Desde desarrollos Front End hasta webs Full Stack, entre nuestros trabajos puedes encontrar una amplia gama de poryectos. Para conocer más a detalle cada uno de los que hemos desarrollado, podés visitar la pestaña de Proyectos.';

class Works extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.rowWrapper}>
        <Title title="Clientes"></Title>
        <div style={styles.logosWrapper}>
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
  logosWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
}

export default Works;