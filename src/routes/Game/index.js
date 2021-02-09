import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

import database from "../../services/firebase";

const pokemon1 = {
  abilities: ["keen-eye", "tangled-feet", "big-pecks"],
  active: false,
  base_experience: 122,
  height: 11,
  id: 171,
  img:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  name: "pidgeotto",
  stats: {
    attack: 60,
    defense: 55,
    hp: 63,
    "special-attack": 50,
    "special-defense": 50,
    speed: 71,
  },
  type: "flying",
  values: {
    bottom: 7,
    left: 5,
    right: 2,
    top: "A",
  },
};

const GamePage = () => {
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      const result = Object.entries(snapshot.val());
      result.forEach((card) => {
        if (!card[1].active) {
          card[1].active = false;
        }
      });
      console.log(result);
      setPokemons(result);
      console.log(setPokemons(result));
    });
  }, []);

  const [pokemons, setPokemons] = useState([]);

  const onClick = (id) => {
    setPokemons((prevState) => {
      return prevState.map((card) => {
        if (card[1].id === id) {
          card[1].active = !card[1].active;
        }
        return card;
      });
    });
  };

  const addPokemon = () => {
    const pokemonRef = database.ref().child("pokemons").push(pokemon1);
    const newKey = pokemonRef.key;
    setPokemons((prevState) => {
      // const pokemons = _.cloneDeep(prevState);
      const pokemons = prevState;
      pokemons.push([newKey, pokemon1]);

      return [...pokemons];
    });
  };

  return (
    <>
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <button onClick={addPokemon}>Add Pokemon</button>
        <div className="flex">
          {pokemons.map(([key, { id, name, type, values, img, active }]) => {
            return (
              <PokemonCard
                key={key}
                id={id}
                name={name}
                type={type}
                values={values}
                img={img}
                active={active}
                onClick={onClick}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
