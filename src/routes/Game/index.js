import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

import database from "../../service/firebase";

const GamePage = () => {
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      const result = Object.entries(snapshot.val());
      result.forEach((card) => {
        if (!card[1].active) {
          card[1].active = false;
        }
      });
      setPokemons(result);
    });
  }, []);

  const [pokemons, setPokemons] = useState([]);

  // НЕ РАБОТАЕТ, требует изменений в PokemonCard
  // const handleChangeActive = (id) => {
  //   setPokemons((prevState) => {
  //     return Object.entries(prevState).reduce((acc, item) => {
  //       const pokemon = { ...item[1] };
  //       if (pokemon.id === id) {
  //         pokemon.isActive = true;
  //       }

  //       acc[item[0]] = pokemon;

  //       return acc;
  //     }, {});
  //   });
  // };

  const pokemon = {
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

  const addPokemon = () => {
    const pokemonRef = database.ref().child("pokemons").push(pokemon);
    const newKey = pokemonRef.key;
    setPokemons((prevState) => {
      const newState = prevState;
      newState.push([newKey, pokemon]);
      return newState;
    });
  };

  return (
    <>
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <button onClick={addPokemon}>Add Pokemon</button>
        <div className="flex">
          {pokemons.map(([key, { id, name, type, values, img, active }]) => {
            const onClick = () => {
              setPokemons(
                pokemons.map((card) => {
                  if (card[1].id === id) {
                    card[1].active = !card[1].active;
                    database.ref("pokemons/" + key).update({
                      active: card[1].active,
                    });
                  }
                  return card;
                })
              );
            };
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
