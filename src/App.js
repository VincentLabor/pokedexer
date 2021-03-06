import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import PokemonState from "./components/context/pokemon/PokemonState";
import AlertState from "./components/context/alert/AlertState";

function App() {
  return (
    <Fragment>
      <PokemonState>
        <AlertState>
          <Router>
            <Navbar />
            <div className="container">
              <div className="alerts"></div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </PokemonState>
    </Fragment>
  );
}

export default App;
