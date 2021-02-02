import React, { useState } from 'react';
import styles from './pokemonCard.module.css';
import cardBackBG from '../../resourses/images/card-back-side.jpg';

export const PokemonCard = ({ name, img, id, type, values, ...props }) => {
  const [isShowCard, setIsShowCard] = useState(false);

  const onCardClickHandler = () => {
    setIsShowCard((prev) => !prev);
  };

  return (
    <div className={styles.root} onClick={onCardClickHandler}>
      <div
        className={`${styles.pokemonCard} ${isShowCard ? styles.active : ''}`}>
        <div className={styles.cardFront}>
          <div className={`${styles.wrap} ${styles.front}`}>
            <div className={`${styles.pokemon} ${styles[type]}`}>
              <div className={styles.values}>
                <div className={`${styles.count} ${styles.top}`}>
                  {values.top}
                </div>
                <div className={`${styles.count} ${styles.right}`}>
                  {values.right}
                </div>
                <div className={`${styles.count} ${styles.bottom}`}>
                  {values.bottom}
                </div>
                <div className={`${styles.count} ${styles.left}`}>
                  {values.left}
                </div>
              </div>
              <div className={styles.imgContainer}>
                <img src={img} alt={img} />
              </div>
              <div className={styles.info}>
                <span className={styles.number}>{id}</span>
                <h3 className={styles.name}>{name}</h3>
                <small className={`${styles[type]}`}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={`${styles.wrap} ${styles.back}`}>
            <img src={cardBackBG} alt='Сard Backed' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
