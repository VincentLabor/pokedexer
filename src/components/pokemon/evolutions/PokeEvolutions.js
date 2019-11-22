import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokeEvolutions = () => {
  const pokemonContext = useContext(PokemonContext);

  const { haveEvolution, evo1, evo2, evoSprite } = pokemonContext;

  return (
    <Fragment>
      {evo1 && <h3>Evolutions</h3>}
      <div className="evolved">
        <img src={evoSprite} alt="" />
        <p className="evolutions">{evo1}</p>
        <p className="evolutions">{evo2}</p>
      </div>
    </Fragment>
  );
};

export default PokeEvolutions;
