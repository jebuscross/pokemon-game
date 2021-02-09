import { string, number, object } from "prop-types";
import cn from "classnames";

import s from "./style.module.css";

const PokemonCard = ({
  key,
  id,
  name,
  type,
  values,
  img,
  active,
  onClick,
  minimize,
  className,
  selected,
}) => {
  const handleClick = () => {
    onClick && onClick(id);
  };

  return (
    <div /*className={s.root}*/>
      <div
        className={cn(
          className,
          { [s.active]: active },
          { [s.selected]: selected }
        )}
        onClick={handleClick}>
        <div className={s.cardFront}>
          <div className={cn(s.wrap, s.front)}>
            <div className={cn(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={cn(s.count, s.top)}>{values.top}</div>
                <div className={cn(s.count, s.right)}>{values.right}</div>
                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cn(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              {!minimize && (
                <div className={s.info}>
                  <span className={s.number}>#{id}</span>
                  <h3 className={s.name}>{name}</h3>
                  <small className={s.type}>
                    Type: <span>{type}</span>
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={s.cardBack}>
          <div className={cn(s.wrap, s.back)} />
        </div>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  values: object.isRequired,
  img: string.isRequired,
};

export default PokemonCard;
