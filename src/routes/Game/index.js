import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

import database from "../../service/firebase";

const GamePage = () => {
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const [pokemons, setPokemons] = useState({});

  const handleChangeActive = (id) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.active = true;
        }

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

  return (
    <>
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <div className="flex">
          {Object.entries(pokemons).map(
            ([key, { id, name, type, values, img, active }]) => (
              <PokemonCard
                key={key}
                id={id}
                name={name}
                type={type}
                values={values}
                img={img}
                isActive={active}
                onClick={handleChangeActive}
              />
            )
          )}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
