import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Clientes App</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Crear Cliente</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Lista de Clientes</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
          <h3>Gestiona la Información de tus Clientes</h3>
        <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
