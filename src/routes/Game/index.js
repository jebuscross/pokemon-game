import React, { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";

import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
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

  const [player2Pokemons, setPlayer2Pokemons] = useState([]);

  const handlePlayer2Pokemons = (pokemons) => {
    setPlayer2Pokemons((prevState) => {
      return [...prevState, ...pokemons];
    });
  };

  const handleClearContext = () => {
    setPokemons({});
    setPlayer2Pokemons([]);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        onSelectedPokemon: handleSelectedPokemon,
        player2Pokemons,
        addPlayer2Pokemon: handlePlayer2Pokemons,
        clearContext: handleClearContext,
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
