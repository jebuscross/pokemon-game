import { useContext } from "react";
import { PokemonContext } from "../../../context/pokemonContext";
import s from "./style.module.css";
import PokemonCard from "../../../Components/PokemonCard";

const BoardPage = () => {
  const selectedContext = useContext(PokemonContext);

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {selectedContext.pokemon.map(
          ([key, { id, name, type, values, img, selected }]) => {
            console.log(selectedContext.pokemon);
            return (
              <PokemonCard
                key={key}
                id={id}
                name={name}
                type={type}
                values={values}
                img={img}
                active={true}
                minimize
                className={s.card}
                // selected={selected}
              />
            );
          }
        )}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
