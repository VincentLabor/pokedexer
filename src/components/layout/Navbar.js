import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PokemonContext from "../context/pokemon/pokemonContext";

const Navbar = () => {
    const pokemonContext = useContext(PokemonContext);
  const { clearAll } = pokemonContext;

  const reset = () => {
    clearAll();
  };

  return (
    <Fragment>
      <div className="nav pd-1">
        <h1 onClick={reset} className="cursorPointer">Pokedex</h1>
        <ul>
          <li onClick={reset} className="cursorPointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursorPointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
