import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Layout from './Components/Layout/Layout';
import PokemonCard from './Components/PokemonCard/PokemonCard';
import data from './Components/pokemoncards.json';
import './index.css';

export default function App() {
  return (
    <React.Fragment>
      <Header title='header title' descr='Header description' />

      <Layout
        title='Layout 1'
        id='024sgawef'
        urlBg='url(./resourses/images/Stars.svg)'
        descr="Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue. To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead."
      />
      <Layout
        title='Layout 2'
        id='024sgaweg'
        colorBg='#aaa'
        descr='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      />
      <div className='flex'>
        {Object.values(data).map((item) => {
          return (
            <PokemonCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              type={item.type}
              values={item.values}
            />
          );
        })}
      </div>
      <Layout
        title='Layout 3'
        urlBg='url(./resourses/images/Trees.svg)'
        id='024sgawes'
        descr='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      />
      <Footer />
    </React.Fragment>
  );
}
