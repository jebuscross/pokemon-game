import React, { useState } from "react";

const Card = ({ onClick, name, showBack }) => (
  <div onClick={onClick} className={`card ${showBack ? "card_back" : ""}`}>
    {name}
  </div>
);

export default function Main() {
  const [state, setstate] = useState([
    {
      cardId: "1",
      name: "Card 1",
      // showBack: false,
    },
    {
      cardId: "2",
      name: "Card 2",
      // showBack: false,
    },
  ]);

  const [cardsState, setCardsState] = useState({cardId : {showBack: false}})
  
  // useEffect(() => {
  //   let mounted = true
  //   // 
  //   effect
  //   return () => {
  //     mounted = false
  //   }
  // }, [input])

  return <div>
    {state.map(({name, cardId}) => {
      return <Card showBack={cardsState[cardId].showBack} name={name} key={cardId} onClick={() => {
        // setState(state.map(card => {
        //   if (card.cardId === cardId) {
        //     card.showBack = !card.showBack;
        //   }
        //   return card;
        // })) 
        const newState = {...cardsState};
        newState[cardId].showBack = !newState[cardId].showBack;
        setCardsState(newState);       
      }}/>
    })}
  </div>;
}
