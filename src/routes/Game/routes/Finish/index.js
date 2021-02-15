import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { FireBaseContext } from "../../../../context/firebaseContext";

import { PokemonContext } from "../../../../context/pokemonContext";

import PokemonCard from "../../../../components/PokemonCard";

import cn from "classnames";
import s from "./style.module.css";

const FinfshPage = () => {
  const pokemonsContext = useContext(PokemonContext);
  const history = useHistory();
  const [priceCard, setPriceCard] = useState({});
  const firebase = useContext(FireBaseContext);

  const handleClick = () => {
    const afterData = () => {
      alert("Pokemon added");
    };
    if (priceCard.id) {
      firebase.addPokemon(priceCard, afterData);
    }
    pokemonsContext.clearContext();
    history.push("/game");
  };

  if (Object.keys(pokemonsContext.player2Pokemons).length === 0) {
    history.replace("/game");
  }
  // console.log(pokemonsContext.pokemons);
  // console.log(pokemonsContext.player2Pokemons);

  return (
    <>
      <div className={s.root}>
        <div className={s.playerOne}>
          {Object.values(pokemonsContext.pokemons).map(
            ({ name, type, img, id, values }) => (
              <PokemonCard
                key={id}
                className={s.cardBoard}
                name={name}
                type={type}
                img={img}
                id={id}
                values={values}
                active
              />
            )
          )}
        </div>
        <div>
          <button className={s.button} onClick={handleClick}>
            END GAME
          </button>
        </div>
        <div className={s.playerTwo}>
          {pokemonsContext.player2Pokemons.map((item) => (
            <PokemonCard
              className={cn(s.cardBoard, {
                [s.selected]: priceCard.id === item.id,
              })}
              key={item.id}
              name={item.name}
              type={item.type}
              img={item.img}
              id={item.id}
              values={item.values}
              active
              onClick={() => setPriceCard(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FinfshPage;
