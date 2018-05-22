import React, { Component } from 'react';
import Header from './components/header.js'
import Services from './components/services.js'
import Works from './components/works.js'
import Clients from './components/clients.js'
import Footer from './components/footer.js'
import './App.css';

let services = [
  {image: 'images/webpage.svg', name: 'Marketing Digital', description: 'Nos gusta decir que somos diferentes, nuestro ADN nos hace diferentes, somos inconformistas y vivimos con pasión cada proyecto. Aportamos siempre lo mejor de nosotros.'},
  {image: 'images/computer.svg', name: 'Desarrollo Web', description: 'Nos gusta decir que somos diferentes, nuestro ADN nos hace diferentes, somos inconformistas y vivimos con pasión cada proyecto. Aportamos siempre lo mejor de nosotros.'},
  {image: 'images/webpage.svg', name: 'Marketing Digital', description: 'Nos gusta decir que somos diferentes, nuestro ADN nos hace diferentes, somos inconformistas y vivimos con pasión cada proyecto. Aportamos siempre lo mejor de nosotros.'},
  {image: 'images/webpage.svg', name: 'Marketing Digital', description: 'Nos gusta decir que somos diferentes, nuestro ADN nos hace diferentes, somos inconformistas y vivimos con pasión cada proyecto. Aportamos siempre lo mejor de nosotros.'},
]

const companies = [
  {name: 'Budweiser', logo: 'images/logos/bud.png'},
  {name: 'Padeco Global', logo: 'images/logos/padeco.png'},
  {name: 'Patagonia', logo: 'images/logos/patagonia.png'},
  {name: 'Vero Cuir', logo: 'images/logos/vero-cuir.png'},
  {name: 'Quesos Arcam', logo: 'images/logos/arcam.png'},
  {name: 'Rincon de Santi', logo: 'images/logos/rincon-de-santi.png'},
  {name: 'CSCMP', logo: 'images/logos/cscmp.png'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Services services={services}></Services>
        <Works></Works>
        <Clients companies={companies}></Clients>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
