import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokeEvolutions = () => {
  const pokemonContext = useContext(PokemonContext);

  const { haveEvolution, evo1, evo2, evoSprite, evoSprite2 } = pokemonContext;

  return (
    <Fragment>
      {evo1 && <h3>Evolutions</h3>}
      <div className="evolved">
        <div className="evo1">
          <img src={evoSprite} alt="" />
          <p className="evolutions">{evo1}</p>
        </div>
        <div className="evo2">
          <img src={evoSprite2} alt="" />
          <p className="evolutions">{evo2}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default PokeEvolutions;
