import { useHistory } from "react-router-dom";
import MenuHeader from "../../Components/MenuHeader";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import data from "../../shared/data/pokemoncards.json";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";

const GamePage = () => {
  return (
    <>
      <MenuHeader />
      <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <div className="flex">
          {data.map(({ id, name, type, values, img }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
              isActive={false}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default GamePage;
