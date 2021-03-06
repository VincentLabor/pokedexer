import React, { useContext, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";
import PokemonForms from "../pokemonForms/PokemonForms";
import Spinner from "../../layout/Spinner";

const PokeEvolutions = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
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
    clearAll,
    loading,
  } = pokemonContext;

  const baseEvo = () => {
    try {
      clearAll();
      searchPokemon(preEvoName.toLowerCase());
      getSprite(preEvoName.toLowerCase());
      getDexEntry(preEvoName.toLowerCase());
      getPokeName(preEvoName.toLowerCase());
      getPokeType(preEvoName.toLowerCase());
      getEvolutions(preEvoName.toLowerCase());
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
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <div className="centers pad2">{evo1 && <h3>Evolutions</h3>}</div>

      {/* Container for evolutions*/}
      <div className="evolved centers flexDown ">
        {/* Base form */}
        {evo1 && (
          <div
            className="preEvo sidepad2 cursorPointer centerFlex"
            onClick={baseEvo}
          >
            <img src={preEvoSprite} className="roundBackground" alt="" />
            <p className="evolutions">{preEvoName}</p>
          </div>
        )}

        {/* Arrow Image*/}
        {evo1 && (
          <div className="">
            <i className="fas fa-angle-right hideOnSmall"></i>
            <i className="fas fa-angle-down icon-large hideOnLarge pd-1 "></i>
          </div>
        )}

        {/* First evolution */}
        {evo1 && (
          <div
            className="evo1 sidepad2 cursorPointer centerFlex "
            onClick={secondEvo}
          >
            <img src={evoSprite} alt="" className="roundBackground" />
            <p className="evolutions">{evo1}</p>
          </div>
        )}

        {/* Arrow Image */}
        {evo2 && (
          <div className="  ">
            <i className="fas fa-angle-right hideOnSmall showDesktop"></i>
            <i className="fas fa-angle-down icon-large hideOnLarge pd-1 "></i>
          </div>
        )}

        {/* <PokemonForms /> */}

        {/* Second evolution */}
        {evo2 && (
          <div
            className="evo2 sidepad2 cursorPointer centerFlex"
            onClick={thirdEvo}
          >
            {/* This will hide the 3rd div from appearing if the pokemon doe snot have 3 evolutions */}
            <img src={evoSprite2} className="roundBackground" alt="" />
            <p className="evolutions">{evo2}</p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PokeEvolutions;
