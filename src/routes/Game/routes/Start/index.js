import { useState, useEffect, useContext } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import PokemonCard from "../../../../components/PokemonCard";
import Layout from "../../../../components/Layout";

import { FireBaseContext } from "../../../../context/firebaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from "./style.module.css";

import bgStart from "../../../../assets/bgStart.jpg";

const StartPage = () => {
  const pokemonContext = useContext(PokemonContext);

  const firebase = useContext(FireBaseContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.offPokemonSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const match = useRouteMatch();
  const history = useHistory();
  const handleClick = () => {
    history.push(`${match.path}board`);
  };

  const onClickSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonContext.onSelectedPokemon(key, pokemon);

    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  return (
    <>
      <div className={s.flex}>
        <div className={s.root}>
          <h1>Pick 5 pokemons</h1>
        </div>
        <button
          className={
            Object.keys(pokemonContext.pokemons).length < 5
              ? s.disabled
              : s.button
          }
          onClick={handleClick}
          disabled={
            Object.keys(pokemonContext.pokemons).length < 5 ? "disabled" : ""
          }>
          Start Game
        </button>
      </div>
      <Layout urlBg={bgStart}>
        <div className={s.grid}>
          {Object.entries(pokemons).map(
            ([key, { id, name, type, values, img, selected }]) => {
              return (
                <PokemonCard
                  key={key}
                  id={id}
                  name={name}
                  type={type}
                  values={values}
                  img={img}
                  active={true}
                  className={s.card}
                  selected={selected}
                  onClick={() => {
                    if (
                      Object.keys(pokemonContext.pokemons).length < 5 ||
                      selected
                    ) {
                      onClickSelected(key);
                    }
                  }}
                  minimize={false}
                />
              );
            }
          )}
        </div>
      </Layout>
    </>
  );
};

export default StartPage;
