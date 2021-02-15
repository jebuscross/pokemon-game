import React, { useState } from "react";
import cn from "classnames";

import PokemonCard from "../../../../../../components/PokemonCard";
import s from "./style.module.css";

const PlayerBoard = ({ player, cards, onClickCard }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      {cards.map((item) => (
        <div
          className={cn(s.cardBoard, {
            [s.selected]: selected === item.id,
          })}
          onClick={() => {
            setSelected(item.id);
            onClickCard && onClickCard({ player, ...item });
          }}
          key={item.id}>
          <PokemonCard
            name={item.name}
            type={item.type}
            img={item.img}
            id={item.id}
            values={item.values}
            active={true}
            minimize={true}
          />
        </div>
      ))}
    </>
  );
};

export default PlayerBoard;
