import AboutLayoutBg from "../../assets/layout/bg1.jpg";
import CardsLayoutBg from "../../assets/layout/bg2.jpeg";
import RulesLayoutBg from "../../assets/layout/bg3.jpg";

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import data from "../../shared/data/pokemoncards.json";
import "../../App.css";
import MenuHeader from "../../Components/MenuHeader";

const HomePage = ({ onChangePage }) => {
  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
  };
  return (
    <>
      {/* <MenuHeader /> */}
      <Header
        title="Pokemon Game"
        descr="It is a simple triple triad card game"
        onClickButton={handleClickButton}
      />

      <Layout title="About" id="about" urlBg={AboutLayoutBg}>
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </p>
        <p>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </p>
      </Layout>
      {/* <Layout title="Cards" id="cards" urlBg={CardsLayoutBg}>
        <div className="flex">
          {data.map(({ id, name, type, values, img }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              type={type}
              values={values}
              img={img}
            />
          ))}
        </div>
      </Layout> */}
      <Layout title="Rules" urlBg={RulesLayoutBg} id="rules">
        <p>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </p>
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
