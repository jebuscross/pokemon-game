import { useState } from "react";
import MenuHeader from "../../Components/MenuHeader";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import data from "../../shared/data/pokemoncards.json";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

data.forEach((elem) => {
  elem.showBack = false;
});

const GamePage = () => {
  const [state, setState] = useState(data);

  return (
    <>
      {/* <MenuHeader /> */}
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <div className="flex">
          {state.map(({ id, name, type, values, img, showBack }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              showBack={showBack}
              onClick={() => {
                setState(
                  state.map((card) => {
                    if (card.id === id) {
                      card.showBack = !card.showBack;
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
