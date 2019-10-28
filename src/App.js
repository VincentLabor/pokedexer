import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PokemonState from './components/context/pokemon/PokemonState';

function App() {
  return (
    <Fragment>
      <PokemonState>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Router>
      </PokemonState>
    </Fragment>
  );
}

export default App;
