import React, { useContext, useState, Fragment } from "react";
import PokemonContext from "../../context/pokemon/pokemonContext";

const EvoForms = ({ evolutionForms, diffForms }) => {
  const pokemonContext = useContext(PokemonContext);

  const [form1, setForm1] = useState([]);

  console.log(evolutionForms);

  const {
    searchPokemon,
    getSprite,
    getPokeName,
    getPokeType,
    getEvolutions,
    clearAll
  } = pokemonContext;

  // const secondEvo = () => {
  //   try {
  //     clearAll();
  //     searchPokemon(evolutionForms.toLowerCase());
  //     getSprite(evolutionForms.toLowerCase());
  //     getPokeName(evolutionForms.toLowerCase());
  //     getPokeType(evolutionForms.toLowerCase());
  //     getEvolutions(evolutionForms.toLowerCase());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(evolutionForms);

  return (
    <Fragment>
      {evolutionForms.map(nameOfForm => { //When you use map inside of jsx, you still have to return
        return (
          <div>
            <p>{nameOfForm.species.name}</p>
          </div>
        );
      })}
      {diffForms.map(sForm => { //When you use map inside of jsx, you still have to return
        return (
          <div>
            <p>{sForm.species.name}</p>
          </div>
        );
      })}
    </Fragment>
  );
};

export default EvoForms;
