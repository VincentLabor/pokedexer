import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const PokeEvolutions = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    haveEvolution,
    evo1,
    evo2,
    preEvoName,
    evoSprite,
    evoSprite2,
    preEvoSprite
  } = pokemonContext;

  return (
    <Fragment>
      <div className="centers pad2">{evo1 && <h3>Evolutions</h3>}</div>

      <div className="evolved centers">
        <div className="preEvo sidepad2">
          <img src={preEvoSprite} alt="" />
          <p className="evolutions">{preEvoName}</p>
        </div>

        {/* Arrow */}
        {evo1 && (
          <div className="evolutionArrows centers">
            <i class="fas fa-long-arrow-alt-right centers"></i>
          </div>
        )}

        {evo1 && (<div className="evo1 sidepad2">
          <img src={evoSprite} alt="" />
          <p className="evolutions">{evo1}</p>
        </div>)}
        

          {/* Arrow */}
        {evo2 && (
          <div className="evolutionArrows">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        )}

        {evo2 && (
          <div className="evo2 sidepad2">
            {/* This will hide the 3rd div from appearing if the pokemon doe snot have 3 evolutions */}
            <img src={evoSprite2} alt="" />
            <p className="evolutions">{evo2}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PokeEvolutions;
