import React from 'react';
import './App.css';
import { BrowserRouter as Ruta, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import PerfilesAdmin from './pages/PerfilesAdmin';
import PerfilesCrear from './pages/PerfilesCrear';
import PerfilesEditar from './pages/PerfilesEditar';

class App extends React.Component {

  render() {

    return (
      <Ruta>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/perfiles" exact component={PerfilesAdmin} />
          <Route path="/perfiles-crear" exact component={PerfilesCrear}/>
          <Route path="/perfiles-editar/:perfilId" exact component={PerfilesEditar}/>
        </Switch>
      </Ruta>
    )
  }

}
export default App;