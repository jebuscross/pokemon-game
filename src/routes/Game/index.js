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
        card[1].showBack = false;
      });
      setPokemons(result);
    });
  }, []);

  const [pokemons, setPokemons] = useState([]);

  // НЕ РАБОТАЕТ!!!!!!
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

  return (
    <>
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <div className="flex">
          {pokemons.map(([key, { id, name, type, values, img, showBack }]) => (
            <PokemonCard
              key={key}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              showBack={showBack}
              onClick={() => {
                setPokemons(
                  pokemons.map((card) => {
                    if (card[1].id === id) {
                      card[1].showBack = !card[1].showBack;
                    }
                    return card;
                  })
                );
              }}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
