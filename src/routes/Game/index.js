import React, { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import StartPage from "./Start";
import BoardPage from "./Board";
import FinishPage from "./Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  const match = useRouteMatch("/game");

  const handleSelectedPokemon = (key, pokemon) => {
    setPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        onSelectedPokemon: handleSelectedPokemon,
      }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
