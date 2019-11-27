import React, { useContext, Fragment, useState } from "react";
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
    preEvoSprite,
    searchPokemon,
    getSprite,
    getDexEntry,
    getPokeName,
    getPokeType,
    getEvolutions,
    setPkmn,
    error,
    clearAll,
    pokeName
  } = pokemonContext;

  const [baseForm, setBaseForm] = useState("");

  const baseEvo = () => {
    try {
      clearAll();
      searchPokemon(preEvoName.toLowerCase());
      getSprite(preEvoName.toLowerCase());
      getDexEntry(preEvoName.toLowerCase());
      getPokeName(preEvoName.toLowerCase());
      getPokeType(preEvoName.toLowerCase());
      getEvolutions(preEvoName.toLowerCase());
      setPkmn("");
    } catch (error) {
      console.log(error);
    }
  };

  const secondEvo = () => {
    try {
      clearAll();
      searchPokemon(evo1.toLowerCase());
      getSprite(evo1.toLowerCase());
      getDexEntry(evo1.toLowerCase());
      getPokeName(evo1.toLowerCase());
      getPokeType(evo1.toLowerCase());
      getEvolutions(evo1.toLowerCase());
      setPkmn("");
    } catch (error) {
      console.log(error);
    }
  };

  const thirdEvo = () => {
    try {
      clearAll();
      searchPokemon(evo2.toLowerCase());
      getSprite(evo2.toLowerCase());
      getDexEntry(evo2.toLowerCase());
      getPokeName(evo2.toLowerCase());
      getPokeType(evo2.toLowerCase());
      getEvolutions(evo2.toLowerCase());
      setPkmn("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
<div className="centers pad2">{evo1 && <h3>Evolutions</h3>}{pokeName !== "" && evo1 === "" ? (<h3>There are no evolutions</h3>) : null}</div>
      
      {/* Container for evolutions*/}
      <div className="evolved centers">

        {/* Base form */}
        {evo1 && (<div className="preEvo sidepad2" onClick={baseEvo}>
          <img src={preEvoSprite} alt="" />
          <p className="evolutions">{preEvoName}</p>
        </div>)}
        

        {/* Arrow Image*/}
        {evo1 && (
          <div className="evolutionArrows centers">
            <i className="fas fa-long-arrow-alt-right centers"></i>
          </div>
        )}

        {/* First evolution */}
        {evo1 && (
          <div className="evo1 sidepad2" onClick={secondEvo}>
            <img src={evoSprite} alt="" />
            <p className="evolutions">{evo1}</p>
          </div>
        )}

        {/* Arrow Image */}
        {evo2 && (
          <div className="evolutionArrows">
            <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        )}

        {/* Second evolution */}
        {evo2 && (
          <div className="evo2 sidepad2" onClick={thirdEvo}>
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
