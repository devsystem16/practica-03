import React from 'react';
import './App.css';
import Header from './components/Header'
import Formulario from './components/Formulario'
import CategoriasComponent from './components/context/CategoriasComponent'

// import { UserProvider } from './components/context/ContextApp'


function App() {
  // const user = { name: 'Tania', loggedIn: true }


  return (
     
    <div className="App">

      <CategoriasComponent>

        <Header titulo="Proyecto React" />
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <Formulario />
            </div>


            <div className="col-md-6">
              <h1>RESULTADO</h1>


            </div>


          </div>
        </div>


      </CategoriasComponent>
    </div>
  
  );
}

export default App;
